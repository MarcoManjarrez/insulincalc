import React from "react";
import { Link } from "react-router-dom";
import { Affix, Col } from "antd";
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

function Footer() {
  return (
    <Affix>
      <Col
        style={{
          background:
            "linear-gradient(to bottom,#4270f0, #42708a,#42708a,#42708a, #42708a)",
          width: "100%",
        }}
      >
        <Link>About us</Link>
      </Col>
    </Affix>
  );
}

export default Footer;
