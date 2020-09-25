import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const ALL_ORDERS = gql`
  query {
    allOrders {
      id
      details {
        rep {
          name {
            first
            last
          }
        }
      }
      boundIds
    }
  }
`;

const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_ORDERS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List
      itemLayout="horizontal"
      bordered
      dataSource={data.allOrders}
      renderItem={(order: any) => (
        <div>
          <List.Item>
            <div style={{ justifyContent: "left" }}>
              {order.id} | {order.details.rep.name.first}
            </div>
          </List.Item>
        </div>
      )}
    ></List>
  );
};

export default Orders;
