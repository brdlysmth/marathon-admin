import React from "react";
import { Link } from "@reach/router";
import { Layout, Menu, Breadcrumb } from "antd";
import { useQuery, gql } from "@apollo/client";
import { Card, Col, Row } from "antd";
import { List, Avatar, Button, Skeleton, Popconfirm } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { colors } from "../theme";
import { Table, Tag, Space } from "antd";
import { link } from "fs";

const { Header, Content, Footer, Sider } = Layout;

const ALL_USER_PROJECTS = gql`
  query {
    projects {
      name
      number
    }
  }
`;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any) => (
      <a>
        <div style={{ color: "blue" }}>{text}</div>
      </a>
    ),
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags: any) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text: any, record: any) => (
      <div style={{ justifyContent: "right" }}>
        <Space size="middle">
          <Link to={`/customers/edit/${record.id}`}>
            <Button>
              <div style={{ color: "blue" }}>Edit</div>
            </Button>
          </Link>
          <Button>
            <div style={{ color: "red" }}>
              <Popconfirm
                title="Are you sure delete this task?"
                okText="Yes"
                cancelText="No"
              >
                Delete
              </Popconfirm>
            </div>
          </Button>
        </Space>
      </div>
    ),
  },
];

const Projects: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_USER_PROJECTS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // console.log(data);
  const tableData: {
    key: string;
    name: string | null;
    age: number;
    address: string | null;
    tags: string[];
  }[] = [];

  data.projects.map((project: any, index: any) => {
    tableData.push({
      key: index,
      name: project.name,
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    });
  });

  return (
    <div>
      <div>
        <Button icon={<PlusOutlined />}>
          <Link to="/addProject" style={{ color: colors.primaryDark }}>
            Add Project
          </Link>
        </Button>
      </div>
      <Table columns={columns} dataSource={tableData}></Table>
    </div>
  );
};

export default Projects;
