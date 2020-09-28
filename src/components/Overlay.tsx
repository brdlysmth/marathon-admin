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
              icon={<FormOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/purchase" style={{ color: colors.white }}>
                Purchase
              </Link>
            </Menu.Item>
            <Menu.Item
              key="1"
              icon={<FormOutlined />}
              style={{
                background: colors.primaryLight,
              }}
            >
              <Link to="/orders" style={{ color: colors.white }}>
                Orders
              </Link>
            </Menu.Item>

            <SubMenu
              key="submenu"
              icon={<UserOutlined />}
              style={{
                backgroundColor: colors.primaryDark,
                color: colors.white,
              }}
              title="Hardware"
            >
              <Menu.Item
                key="1"
                icon={<FormOutlined />}
                style={{
                  background: colors.primaryLight,
                }}
              >
                <Link to="/hardware/assigned" style={{ color: colors.white }}>
                  {" "}
                  Assigned{" "}
                </Link>
              </Menu.Item>
              <Menu.Item
                key="1"
                icon={<FormOutlined />}
                style={{
                  background: colors.primaryLight,
                }}
              >
                <Link to="/hardware/unassigned" style={{ color: colors.white }}>
                  {" "}
                  Unassigned{" "}
                </Link>
              </Menu.Item>
              <Menu.Item
                key="1"
                icon={<FormOutlined />}
                style={{
                  background: colors.primaryLight,
                }}
              >
                <Link to="/hardware/unbound" style={{ color: colors.white }}>
                  {" "}
                  Unbound{" "}
                </Link>
              </Menu.Item>
            </SubMenu>
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
