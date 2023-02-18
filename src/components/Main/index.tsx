import React from "react";
import { MailOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Layout, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;
type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Main: React.FC<ContainerProps> = (props:ContainerProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Header
            style={{
              color: "white",
              width: "100%",
              paddingLeft: 35,
              paddingRight: 35,
              position: "relative",
              top: 0,
            }}
          >
            <Row align="middle">
              <Col flex={2}><Link href="/posts">GochiBlog</Link></Col>
            </Row>
          </Header>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            minHeight: "100vh",
            background: colorBgContainer,
            height: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              padding: "10px 10px",
              textAlign: "center",
              overflow: "auto",
            }}
          >
            {props?.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          GochiLab ©2023 Created by Yuri O. Gochi
        </Footer>
      </Layout>
    </Layout>
  )
};

export default Main;
