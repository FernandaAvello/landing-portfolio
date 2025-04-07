import React from "react";
import { Typography, Timeline } from "antd";

const { Title } = Typography;

const Education = () => {
  return (
    <div id="education" style={{ padding: "60px 150px", background: "var(--color-primary)", color: "var(--color-light)" }}>
      <Title style={{ textAlign: "center", marginBottom: "40px", color: "var(--color-light)" }}>
        Educación & Certificaciones
      </Title>
      <Timeline
        mode="alternate"
        style={{ maxWidth: "800px", margin: "0 auto"}}
      >
        <Timeline.Item
          label="OCT 2024 - ABR 2025"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Especialización en Desarrollo Frontend con React
          </Title>
          <p style={{ color: "var(--color-light)" }}>Aspacia Chile - Programa de especialización Laboral en Tecnologías de la Información 2024 Beca CORFO</p>
          {/* <a href="/certifications/frontend-react.pdf" style={{ color: "var(--color-light)" }} download>Descargar Certificación</a> */}
        </Timeline.Item>
        <Timeline.Item
          label="MAY 2024 - SEP 2024"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Programa de Mentorías 2024 para las mujeres- Talento Digital
          </Title>
          <p style={{ color: "var(--color-light)" }}>Participación como Mentee</p>
        </Timeline.Item>
        <Timeline.Item
          label="AGO 2024"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Speaking and Writing Test
          </Title>
          <p style={{ color: "var(--color-light)" }}>TOEIC - ETS</p>
          <a href="./../public/files/toeic.pdf" style={{ color: "var(--color-accent)" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="MAR 2023 - AGO 2023"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Bootcamp de Desarrollo de Aplicaciones Web con VueJS
          </Title>
          <p style={{ color: "var(--color-light)" }}>OTEC Eductecno - Programa de Becas de Talento Digital</p>
          <a href="https://www.acreditta.com/credential/f571016a-a864-46b3-8ed6-90a470c3fa14?utm_source=linkedin_profile&resource_type=badge&resource=f571016a-a864-46b3-8ed6-90a470c3fa14" target="_blank" style={{ color: "var(--color-accent)" }} >Insignia Digital</a>
          <a href="./../public/files/bootcamp.pdf" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="AGO 2023"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            English for Developers Course
          </Title>
          <p style={{ color: "var(--color-light)" }}>E-camp - Edutecno</p>
          <a href="./../public/files/english.png" style={{ color: "var(--color-accent)", marginLeft: "30px" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="DIC 2022"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Curso de gestión ágil de proyectos con SCRUM
          </Title>
          <p style={{ color: "var(--color-light)" }}>Plataforma de Formación Online Udemy</p>
          <a href="./../public/files/scrum.jpg" style={{ color: "var(--color-accent)" }} download>Descargar Certificación</a>
        </Timeline.Item>
        <Timeline.Item
          label="FEB 2023 - ABR 2023"
          style={{ color: "var(--color-light)" }}
        >
          <Title level={4} style={{ color: "var(--color-light)" }}>
            Curso de Diseño Web y JavaScript
          </Title>
          <p style={{ color: "var(--color-light)" }}>Instituto AIEP</p>
          <a href="./../public/files/aiep.pdf" style={{ color: "var(--color-accent)" }} download>Descargar Certificación</a>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;