import React from "react";
import { Link } from "@reach/router";
import { Layout, Menu, Breadcrumb } from "antd";
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row } from "antd";
import { List, Avatar, Button, Skeleton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { colors } from "../theme";

const { Header, Content, Footer, Sider } = Layout;

const ALL_USER_PROJECTS = gql`
  query {
    books {
      title
    }
  }
`;

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_USER_PROJECTS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "inherit" }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {data.books.map((book: any) => {
              return <Menu.Item key="1">{book.title}</Menu.Item>;
            })}
            <Menu.Item key="4" icon={<PlusOutlined />}>
              <Link to="/addProject" style={{ color: colors.white }}>
                Add Project
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content></Content>
      </Layout>
    </div>
  );
};

export default Projects;
