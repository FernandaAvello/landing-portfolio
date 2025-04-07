import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const { Title, Link } = Typography;

const Footer = () => {
  return (
    <div style={{ padding: "40px 150px", background: "var(--color-primary)", color: "var(--color-light)" }}>
      <Row gutter={[32, 32]} justify="space-between">
        {/* Columna 1: Navegación */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Navegación
          </Title>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link href="#about" style={{ color: "var(--color-light)" }}>
                About me
              </Link>
            </li>
            <li>
              <Link href="#skills" style={{ color: "var(--color-light)" }}>
                Skills & Tools
              </Link>
            </li>
            <li>
              <Link href="#projects" style={{ color: "var(--color-light)" }}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#education" style={{ color: "var(--color-light)" }}>
                Education & Certifications
              </Link>
            </li>
            <li>
              <Link href="#contact" style={{ color: "var(--color-light)" }}>
                Contact
              </Link>
            </li>
          </ul>
        </Col>

        {/* Columna 2: Redes Sociales */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Sígueme
          </Title>
          <Row gutter={[16, 16]} justify="start">
            <Col>
              <a href="https://x.com/Effesita" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined style={{ fontSize: "32px", color: "var(--color-accent)" }} />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/fernanda-avello-rocha-a35754124/" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined style={{ fontSize: "32px", color: "var(--color-accent)" }} />
              </a>
            </Col>
            <Col>
              <a href="https://github.com/FernandaAvello" target="_blank" rel="noopener noreferrer">
                <GithubOutlined style={{ fontSize: "32px", color: "var(--color-accent)" }} />
              </a>
            </Col>
          </Row>
        </Col>

        {/* Columna 3: Derechos reservados */}
        <Col xs={24} md={8}>
          <Title level={4} style={{ color: "var(--color-light)" }}>
            © 2025 Mi Portafolio
          </Title>
          <p style={{ color: "var(--color-light)", marginTop: "10px" }}>
            Todos los derechos reservados.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
