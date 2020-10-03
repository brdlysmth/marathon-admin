import React from "react";
import { Link } from "@reach/router";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  FormOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  ProjectOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import { colors } from "../theme";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Overlay extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          style={{
            backgroundColor: colors.primaryDark,
            background: colors.primaryDark,
            color: colors.primaryDark,
          }}
        >
          <div style={{ height: 100 }} />
          <Menu
            style={{ backgroundColor: colors.primaryDark }}
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <Menu.Item
              key="1"
              icon={<HomeOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/home" style={{ color: colors.white }}>
                Home
              </Link>
            </Menu.Item>
            <Menu.Item
              key="1"
              icon={<ProjectOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/projects" style={{ color: colors.white }}>
                Projects
              </Link>
            </Menu.Item>

            <Menu.Item
              key="1"
              icon={<DoubleLeftOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/incoming" style={{ color: colors.white }}>
                Incoming
              </Link>
            </Menu.Item>

            <Menu.Item
              key="1"
              icon={<DoubleRightOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/outgoing" style={{ color: colors.white }}>
                Outgoing
              </Link>
            </Menu.Item>
            <Menu.Item
              key="1"
              icon={<FormOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <a href="http://localhost:1234" style={{ color: colors.white }}>
                Viewer
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header title="Trellis" style={{ background: colors.primaryLight }} />
          <Content>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 100,
                minHeight: 360,
                background: colors.white,
                margin: 50,
              }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}> Trellis, Inc.</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Overlay;
