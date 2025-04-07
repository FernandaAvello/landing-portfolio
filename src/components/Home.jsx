import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { LinkedinOutlined } from "@ant-design/icons"; // Importa el ícono de LinkedIn

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <div
      id="about"
      style={{
        background: "var(--color-primary)",
        padding: "200px 150px",
        color: "var(--color-light)",
        minHeight: "100vh",
      }}
    >
      <Row justify="center" align="middle" gutter={[32, 32]}>
        {/* Columna de texto */}
        <Col xs={24} md={12}>
          <Title
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "var(--color-light)",
            }}
          >
            Hola, soy Fernanda Avello
          </Title>
          <Paragraph
            style={{
              fontSize: "18px",
              marginTop: "20px",
              lineHeight: "1.8",
              color: "var(--color-light)",
            }}
          >
            Soy una desarrolladora Frontend apasionada por crear experiencias
            web modernas, funcionales y atractivas. Mi objetivo es combinar
            diseño y tecnología para ofrecer soluciones innovadoras.
          </Paragraph>
          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <Button
              type="primary"
              size="large"
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "var(--color-accent)",
                borderColor: "var(--color-accent)",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              href="./../public/files/CV_Fernanda_Avello.pdf" // Cambia la ruta al archivo de tu CV
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Descarga mi CV
            </Button>
            <Button
              type="default"
              size="large"
              style={{
                padding: "15px 30px",
                fontSize: "18px",
                backgroundColor: "var(--color-light)",
                borderColor: "var(--color-light)",
                color: "var(--color-primary)",
                fontWeight: "bold",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              href="https://www.linkedin.com/in/fernanda-avello-rocha-a35754124/" // Cambia este enlace a tu perfil de LinkedIn
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined style={{ fontSize: "20px" }} />
              LinkedIn
            </Button>
          </div>
        </Col>

        {/* Columna de imagen */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <img
            src="./../public/images/profile1.JPG"
            alt="Foto de Fernanda Avello"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "50%",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;