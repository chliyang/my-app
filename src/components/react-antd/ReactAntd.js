import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import styles from "./ReactAntd.module.scss";
import "antd/dist/antd.css";
import React, { useState } from "react";

const { Header, Content, Sider } = Layout;

const ReactAntd = () => {
  const [collapsed, setCollapsed] = useState();

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className={styles.container}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.layout}>
          <Header className={styles.background} style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.trigger,
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className={styles.background}
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default ReactAntd;
