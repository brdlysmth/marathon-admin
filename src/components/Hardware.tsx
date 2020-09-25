import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, Menu, Breadcrumb } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";
const { Header, Content, Footer, Sider } = Layout;

const UNASSIGNED_HARDWARE = gql`
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
  }
`;

const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(UNASSIGNED_HARDWARE);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { allDistributors } = data;
  const hardware: {
    id: string;
    name: string | null;
    type: "Sensor" | "Gateway";
    owner: string | null;
    distributor: string | null;
    sharedUsers: string[];
  }[] = [];

  allDistributors.forEach((distributor: any) => {
    if (distributor && distributor.unassigned) {
      if (distributor.unassigned.sensors) {
        distributor.unassigned.sensors.forEach((sensor: any) => {
          hardware.push({
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
          hardware.push({
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
      itemLayout="horizontal"
      bordered
      dataSource={hardware}
      renderItem={(hardware: any) => (
        <div>
          <List.Item>
            <div style={{ justifyContent: "left" }}>
              {hardware.distributor} | {hardware.id}
            </div>
          </List.Item>
        </div>
      )}
    ></List>
  );
};

export default Orders;
