import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const ALL_BOOKS = gql`
  query {
    books {
      title
    }
  }
`;

const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_BOOKS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <List
      itemLayout="horizontal"
      bordered
      dataSource={data.books}
      renderItem={(book: any) => (
        <div>
          <List.Item>
            <div style={{ justifyContent: "left" }}>{book.title}</div>
          </List.Item>
        </div>
      )}
    ></List>
  );
};

export default Orders;
