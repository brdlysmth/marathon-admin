import React from "react";
import { Link } from "@reach/router";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  FormOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
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
          }}
        >
          <div className="logo" />
          <Menu
            style={{ backgroundColor: colors.primaryDark }}
            defaultSelectedKeys={["1"]}
            mode="inline"
          >
            <Menu.Item
              key="1"
              icon={<FormOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/orders"> Orders </Link>
            </Menu.Item>
            <Menu.Item
              key="1"
              icon={<FormOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/hardware"> Hardware </Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}

export default Overlay;
