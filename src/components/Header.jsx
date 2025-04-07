import React from "react";
import { Layout, Menu } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "var(--color-primary)", // Fondo con color primario
      }}
    >
      {/* Logotipo */}
      <div style={{ color: "var(--color-light)", fontWeight: "bold", fontSize: "20px" }}>
        Fernanda Avello Portfolio
      </div>

      {/* Menú de navegación */}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          flex: 1,
          justifyContent: "center",
          background: "var(--color-primary)", // Fondo del menú con color primario
        }}
      >
        <Menu.Item key="1">
          <a href="#about" style={{ color: "var(--color-light)" }}>
            About me
          </a>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#skills" style={{ color: "var(--color-light)" }}>
            Skills & Tools
          </a>
        </Menu.Item>
        <Menu.Item key="3">
          <a href="#projects" style={{ color: "var(--color-light)" }}>
            Projects
          </a>
        </Menu.Item>
        <Menu.Item key="5">
          <a href="#education" style={{ color: "var(--color-light)" }}>
            Education & Certifications
          </a>
        </Menu.Item>
        <Menu.Item key="4">
          <a href="#contact" style={{ color: "var(--color-light)" }}>
            Contact
          </a>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;