import React, { useState } from "react";
import { Avatar, Button, Dropdown, Input, Layout, Menu } from "antd";
import {
  MenuOutlined,
  SearchOutlined,
  PlusOutlined,
  BellOutlined,
  MailOutlined,
  LogoutOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Content, Header } from "antd/lib/layout/layout";
import "../Common/Styles/Layout.css";
import logo from "../Common//Image/Logo.png";
import image2 from "../Common/Image/image 2.png";
import image4 from "../Common/Image/image 4.png";
import Vector from "../Common/Image/Vector.png";
import image5 from "../Common/Image/image 5.png";
import image6 from "../Common/Image/image 6.png";
import image7 from "../Common/Image/image 7.png";
import image8 from "../Common/Image/image 8.png";
import image9 from "../Common/Image/image 9.png";
import Checkout from "../Common/Image/Checkout.png";
import styles from "../Common/Styles/Layout.module.css";
const { Sider } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
function LayoutAdmin() {
  const [state, setState] = useState(false);
  const onClick = (e) => {};

  const menu = (
    <Menu className={styles.dropdown}>
      <div className="menu_chi">
        <div className={styles.logo_user}>
          <Avatar
            size={44}
            src={
              "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"
            }
          />
        </div>
        <div className={styles.view_tt}>
          <div className="tt">NewYork Mỹ</div>
          <div>+998766546778 </div> <div> Adomitosws</div>
          <Button
            icon={<UserSwitchOutlined />}
            type="text"
            style={{
              border: "1px solid rgb(226, 226, 226)",
            }}
          >
            Thông tin
          </Button>
          <Button
            icon={<LogoutOutlined />}
            type="text"
            style={{
              border: "1px solid rgb(226, 226, 226)",
              marginLeft: 10,
            }}
          >
            Đăng xuất
          </Button>
        </div>
      </div>
    </Menu>
  );
  const items = [
    getItem(
      "Tổng Quan",
      "sub1",
      <img style={{ width: "10%" }} src={image2} alt="" />,
      [getItem("Option 1", "1"), getItem("Option 1", "10")]
    ),
    getItem(
      "Sản Phẩm",
      "sub2",
      <img style={{ width: "10%" }} src={image4} alt="" />,
      [getItem("Option 2", "2"), getItem("Option 2", "11")]
    ),
    getItem(
      "Thể Loại",
      "sub3",
      <img style={{ width: "10%" }} src={Vector} alt="" />,
      [getItem("Option 3", "3"), getItem("Option 3", "12")]
    ),
    getItem(
      "Bán Hàng",
      "sub4",
      <img style={{ width: "10%" }} src={Checkout} alt="" />,
      [getItem("Option 4", "4"), getItem("Option 6", "13")]
    ),
    getItem(
      "Hoá đơn",
      "sub5",
      <img style={{ width: "10%" }} src={image5} alt="" />,
      [getItem("Option 5", "5"), getItem("Option 6", "14")]
    ),
    getItem(
      "Lợi Nhuận",
      "sub6",
      <img style={{ width: "10%" }} src={image6} alt="" />,
      [getItem("Option 6", "6"), getItem("Option 6", "15")]
    ),
    getItem(
      "Mọi Người",
      "sub7",
      <img style={{ width: "10%" }} src={image7} alt="" />,
      [getItem("Option 7", "7"), getItem("Option 6", "16")]
    ),
    getItem(
      "Phản Hồi",
      "sub8",
      <img style={{ width: "10%" }} src={image8} alt="" />,
      [getItem("Option 8", "8"), getItem("Option 6", "17")]
    ),
    getItem(
      "Khác",
      "sub9",
      <img style={{ width: "10%" }} src={image9} alt="" />,
      [getItem("Option 9", "9"), getItem("Option 6", "18")]
    ),
  ];
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={state}>
        <div className={styles.logo}>
          {state == false && (
            <div className="logo" style={{ width: "50%" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={logo}
                alt=""
              />
            </div>
          )}

          <MenuOutlined
            onClick={() => setState(!state)}
            style={
              state == false
                ? {
                    width: "50%",
                    fontSize: 20,
                    textAlign: "right",
                    marginRight: 10,
                  }
                : {
                    width: "100%",
                    fontSize: 20,
                    textAlign: "center",
                    margin: "20px 0",
                  }
            }
          />
        </div>
        <Menu onClick={onClick} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className={styles.site_layout_background}>
          <div className="left">
            <Input
              size="middle"
              placeholder="Tìm kiếm"
              prefix={<SearchOutlined />}
            />
          </div>
          <div className="right">
            <Button
              type="primary"
              style={{ background: "#fff", color: "black" }}
              icon={<PlusOutlined />}
            >
              Thêm mới
            </Button>
            <BellOutlined style={{ fontSize: 20, margin: "0 10px" }} />
            <MailOutlined style={{ fontSize: 20, marginRight: 20 }} />
            <Dropdown overlay={menu} arrow>
              <Avatar
                size={44}
                src={
                  "https://cdn.nguyenkimmall.com/images/detailed/555/may-anh-cho-nguoi-moi.jpg"
                }
              />
            </Dropdown>
          </div>
        </Header>
        <Content
          className="site-layout-background"
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
  );
}

export default LayoutAdmin;
