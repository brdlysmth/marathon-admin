import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, Menu, Breadcrumb, Typography, Input } from "antd";
import { Card, Divider } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

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

const UnboundHardware: React.FC = () => {
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

  const gatewayHardware: {
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

  allSensors.forEach((sensor: any) => {
    if (sensor && !sensor.owner) {
      unassignedHardware.push({
        id: sensor.id,
        name: `Sensor ${sensor.id}`,
        type: "Sensor",
        owner: null,
        distributor: null,
        sharedUsers: [],
      });
    }
  });

  allGateways.forEach((gateway: any) => {
    if (gateway && !gateway.owner) {
      unassignedHardware.push({
        id: gateway.id,
        name: `Gateway ${gateway.id}`,
        type: "Gateway",
        owner: null,
        distributor: null,
        sharedUsers: [],
      });
    }
  });

  return (
    <div>
      <Search
        placeholder="input search text"
        onSearch={(value) => console.log(value)}
        enterButton
        style={{ width: 200 }}
      />
      <Divider />
      <List
        dataSource={unassignedHardware}
        renderItem={(unassignedHardware: any) => (
          <div>
            <List.Item>
              <div style={{ justifyContent: "left" }}>
                {unassignedHardware.id}
              </div>
            </List.Item>
          </div>
        )}
      ></List>
    </div>
  );
};

export default UnboundHardware;
