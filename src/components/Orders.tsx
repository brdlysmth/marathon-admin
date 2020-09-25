import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { useQuery, gql } from "@apollo/client";
const { Header, Content, Footer, Sider } = Layout;

const ALL_ORDERS = gql`
  query {
    allOrders {
      id
    }
  }
`;

const Orders: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_ORDERS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allOrders.map((order: any) => {
    return <Content> {order.id}</Content>;
  });
};

export default Orders;
