import React from "react";
import { Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

const Contact = () => {
  return (
    <div id="contact" style={{ padding: "80px 150px", textAlign: "center", background: "var(--color-primary)", color: "var(--color-light)" }}>
      <Title style={{ color: "var(--color-light)", marginBottom: "20px" }}>
        ¡Contáctame!
      </Title>
      <Paragraph style={{ fontSize: "18px", color: "var(--color-light)", marginBottom: "30px" }}>
        Estoy emocionada de saber de ti. Si tienes alguna pregunta, propuesta o simplemente quieres saludar, no dudes en escribirme.
      </Paragraph>
      <Paragraph
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "var(--color-accent)",
          marginBottom: "30px",
        }}
      >
        fernandaavellorocha@gmail.com
      </Paragraph>
      <Button
        type="primary"
        size="large"
        style={{
          backgroundColor: "var(--color-accent)",
          borderColor: "var(--color-accent)",
          fontWeight: "bold",
          borderRadius: "8px",
          padding: "10px 20px",
        }}
        href="mailto:fernandaavellorocha@gmail.com"
      >
        Escríbeme
      </Button>
    </div>
  );
};

export default Contact;