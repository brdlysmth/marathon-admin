import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Layout, Menu, Breadcrumb, Typography, Input, Divider } from "antd";
import { Card } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const ALL_HARDWARE = gql`
  query {
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

const AssignedHardware: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_HARDWARE);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { allSensors, allGateways } = data;

  const assignedHardware: {
    id: string;
    name: string | null;
    type: "Sensor" | "Gateway";
    owner: string | null;
  }[] = [];

  allSensors.forEach((sensor: any) => {
    if (sensor && sensor.owner) {
      assignedHardware.push({
        id: sensor.id,
        name: `Sensor ${sensor.id}`,
        type: "Sensor",
        owner: sensor.owner,
      });
    }
  });

  allGateways.forEach((gateway: any) => {
    if (gateway && gateway.owner) {
      assignedHardware.push({
        id: gateway.id,
        name: `Gateway ${gateway.id}`,
        type: "Gateway",
        owner: gateway.owner,
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
        dataSource={assignedHardware}
        renderItem={(assignedHardware: any) => (
          <div>
            <List.Item>
              <div style={{ justifyContent: "left" }}>
                {assignedHardware.id}
              </div>
            </List.Item>
          </div>
        )}
      ></List>
    </div>
  );
};

export default AssignedHardware;
