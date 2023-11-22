import React from "react";
import { Affix, Col, Menu } from "antd";
//import { FileImageOutlined } from "@ant-design/icons";
import logoPath from "../img/Imagen de WhatsApp 2023-09-21 a las 09.18.09.jpg";

const items = [
  {
    key: "logo",
    icon: (
      <img alt="logo" src={logoPath} style={{ height: "80%", width: "30%" }} />
    ),
  },
  {
    label: "Information",
    key: "info",
  },
  {
    label: "Calculator",
    key: "calc",
  },
];

function Navbar() {
  return (
    <Affix>
      <Col
        style={{
          background:
            "linear-gradient(to top, #42708a, #000000,#000000,#000000)",
          width: "100%",
        }}
      >
        <Menu
          items={items}
          mode="horizontal"
          style={{
            background:
              "linear-gradient(to top,#4270f0, #42708a,#42708a,#42708a, #42708a)",
            width: "100%",
          }}
        ></Menu>
      </Col>
    </Affix>
  );
}

export default Navbar;
