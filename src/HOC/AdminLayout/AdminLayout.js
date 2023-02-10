import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  GlobalOutlined,
  HomeOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLayout.css";

const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }) => {
  let navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (key) => {
    switch (key) {
      case "1":
        navigate("/admin/user");
        break;
      case "2":
        navigate("/admin/location");
        break;
      case "3":
        navigate("/admin/house");
        break;
      case "4":
        navigate("/admin/booking");
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">Admin Dashboard</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => handleMenuClick(key)}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Người dùng",
            },
            {
              key: "2",
              icon: <GlobalOutlined />,
              label: "Vị trí",
            },
            {
              key: "3",
              icon: <HomeOutlined />,
              label: "Phòng thuê",
            },
            {
              key: "4",
              icon: <CreditCardOutlined />,
              label: "Đặt phòng",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex flex-row justify-between"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="mr-4" onClick={() => navigate("/")}>
            <button className="bg-blue-500 rounded-lg px-3 font-bold text-white">
              Về website chính
            </button>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
