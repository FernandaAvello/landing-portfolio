import React from "react";
import { Typography, Row, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faVuejs,
  faReact,
  faGithub,
  faFigma,
  faBitbucket,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faToolbox } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;

const Skills = () => {
  const skills = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faHtml5}
          style={{ fontSize: "48px", color: "#e34c26" }}
        />
      ),
      title: "HTML5",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCss3Alt}
          style={{ fontSize: "48px", color: "#1572b6" }}
        />
      ),
      title: "CSS3",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faJsSquare}
          style={{ fontSize: "48px", color: "#f7df1e" }}
        />
      ),
      title: "JavaScript",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faVuejs}
          style={{ fontSize: "48px", color: "#41b883" }}
        />
      ),
      title: "VueJS",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faReact}
          style={{ fontSize: "48px", color: "#61dafb" }}
        />
      ),
      title: "React",
    },
  ];

  const tools = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faGithub}
          style={{ fontSize: "48px", color: "#333" }}
        />
      ),
      title: "GitHub",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faFigma}
          style={{ fontSize: "48px", color: "#f24e1e" }}
        />
      ),
      title: "Figma",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faCode}
          style={{ fontSize: "48px", color: "#0078d7" }}
        />
      ),
      title: "VS Code",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faToolbox}
          style={{ fontSize: "48px", color: "#4caf50" }}
        />
      ),
      title: "Vite",
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faBitbucket}
          style={{ fontSize: "48px", color: "#2684FF" }}
        />
      ),
      title: "Bitbucket",
    },
  ];

  const softSkills = [
    { title: "Comunicación efectiva" },
    { title: "Trabajo en equipo" },
    { title: "Adaptabilidad" },
    { title: "Resolución de problemas" },
  ];

  return (
    <div
      id="skills"
      style={{
        padding: "60px 150px",
        background: "var(--color-primary)",
        color: "var(--color-light)",
      }}
    >
      <Title
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "var(--color-light)",
        }}
      >
        Skills & Tools
      </Title>

      {/* Lenguajes de Programación */}
      <div style={{ marginBottom: "60px" }}>
        <Title
          level={3}
          style={{
            color: "var(--color-light)",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Lenguajes de Programación
        </Title>
        <Row
          gutter={[16, 16]}
          justify="center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {skills.map((skill, index) => (
            <Card
              key={index}
              hoverable
              style={{
                textAlign: "center",
                background: "var(--color-light)",
                border: "1px solid var(--color-secondary)",
                borderRadius: "8px",
                color: "var(--color-primary)",
                width: "200px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                body: { padding: "20px" },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {skill.icon}
              <Title
                level={4}
                style={{ marginTop: "10px", color: "var(--color-primary)" }}
              >
                {skill.title}
              </Title>
            </Card>
          ))}
        </Row>
      </div>

      {/* Herramientas y Tecnologías */}
      <div style={{ marginBottom: "60px" }}>
        <Title
          level={3}
          style={{
            color: "var(--color-light)",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Herramientas y Tecnologías
        </Title>
        <Row
          gutter={[16, 16]}
          justify="center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {tools.map((tool, index) => (
            <Card
              key={index}
              hoverable
              style={{
                textAlign: "center",
                background: "var(--color-light)",
                border: "1px solid var(--color-secondary)",
                borderRadius: "8px",
                color: "var(--color-primary)",
                width: "200px", // Ancho fijo
                height: "150px", // Altura fija
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                body: { padding: "20px" },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {tool.icon}
              <Title
                level={4}
                style={{ marginTop: "10px", color: "var(--color-primary)" }}
              >
                {tool.title}
              </Title>
            </Card>
          ))}
        </Row>
      </div>

      {/* Soft Skills */}
      <div>
        <Title
          level={3}
          style={{
            color: "var(--color-light)",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Habilidades blandas
        </Title>
        <Row
          gutter={[16, 16]}
          justify="center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {softSkills.map((skill, index) => (
            <Card
              key={index}
              hoverable
              style={{
                textAlign: "center",
                background: "var(--color-light)",
                border: "1px solid var(--color-secondary)",
                borderRadius: "8px",
                color: "var(--color-primary)",
                width: "200px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                body: { padding: "20px" },
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Title
                level={4}
                style={{ marginTop: "10px", color: "var(--color-primary)" }}
              >
                {skill.title}
              </Title>
            </Card>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Skills;
