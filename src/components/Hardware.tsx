import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import { Card } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const ALL_HARDWARE = gql`
  query {
    allDistributors {
      id
      name {
        first
        last
      }
      unassigned {
        sensors {
          id
        }
        gateways {
          id
        }
      }
    }
    allSensors {
      id
      owner {
        name {
          first
          last
        }
      }
    }
    allGateways {
      id
      owner {
        name {
          first
          last
        }
      }
    }
  }
`;

const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_HARDWARE);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { allDistributors, allSensors, allGateways } = data;

  const unassignedHardware: {
    id: string;
    name: string | null;
    type: "Sensor" | "Gateway";
    owner: string | null;
    distributor: string | null;
    sharedUsers: string[];
  }[] = [];

  const sensorHardware: {
    id: string;
    type: "Sensor" | "Gateway";
    owner: string | null;
  }[] = [];

  allDistributors.forEach((distributor: any) => {
    if (distributor && distributor.unassigned) {
      if (distributor.unassigned.sensors) {
        distributor.unassigned.sensors.forEach((sensor: any) => {
          unassignedHardware.push({
            id: sensor.id,
            name: `Sensor ${sensor.id}`,
            type: "Sensor",
            owner: null,
            distributor: distributor.name
              ? `${distributor.name.first} ${distributor.name.last}`
              : null,
            sharedUsers: [],
          });
        });
      }
      if (distributor.unassigned.gateways) {
        distributor.unassigned.gateways.forEach((gateway: any) => {
          unassignedHardware.push({
            id: gateway.id,
            name: null,
            type: "Gateway",
            owner: null,
            distributor: distributor.name
              ? `${distributor.name.first} ${distributor.name.last}`
              : null,
            sharedUsers: [],
          });
        });
      }
    }
  });

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={unassignedHardware}
      renderItem={(unassignedHardware: any) => (
        <div>
          <List.Item>
            <div style={{ justifyContent: "left" }}>
              <Card title={unassignedHardware.id}> content </Card>
            </div>
          </List.Item>
        </div>
      )}
    ></List>
  );
};

export default Orders;
