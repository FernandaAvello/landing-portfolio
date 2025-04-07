import React from "react";
import { Card, Row, Col, Typography, Tag, Button } from "antd";

const { Title } = Typography;

const projects = [
  {
    title: "Clínica de Salud de la Mujer App",
    description:
      "Una aplicación web que simula una clínica de salud para la atención de las mujeres.",
      image: "./../public/images/clinical.png",
    tags: ["React", "Ant Design", "CSS", "Vite","React Router DOM", "indexedDB", "Service Worker"],
    github: "https://github.com",
    preview: "https://github.com",
  },
  {
    title: "Gamer's Opinion App",
    description:
      "Una aplicación web para compartir opiniones sobre videojuegos.",
    image: "./../public/images/Gamer.png",
    tags: ["Vue", "Vuetify", "SASS", "Vuex", "Vue-Router", "API REST"],
    github: "https://github.com/FernandaAvello/GAMES-OPINION",
    preview: "https://fernandaavello.github.io/GAMES_OPINION_PROD/#/",
  },
  {
    title: "Coding App",
    description: "Plataforma para comprar cursos de programación web.",
    image: "./../public/images/coding.png",
    tags: ["Vue", "Vuetify", "SASS", "Vuex", "Vue-Router"],
    github: "https://github.com/FernandaAvello/CODING",
    preview: "https://fernandaavello.github.io/CODING_PROD/#/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      style={{ padding: "60px 150px", background: "var(--color-primary)" }}
    >
      <Title
        level={2}
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "var(--color-light)",
        }}
      >
        Mis Proyectos
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={{
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              }
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                background: "var(--color-secondary)",
                color: "var(--color-light)",
                minWidth: "300px", // Ancho mínimo
                minHeight: "420px", // Altura mínima
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Title
                  level={4}
                  style={{ marginBottom: "10px", color: "var(--color-light)" }}
                >
                  {project.title}
                </Title>
                <p
                  style={{
                    marginBottom: "10px",
                    color: "var(--color-light)",
                    fontSize: "14px",
                  }}
                >
                  {project.description}
                </p>
                <div style={{ marginBottom: "15px" }}>
                  {project.tags.map((tag, tagIndex) => (
                    <Tag
                      key={tagIndex}
                      color="var(--color-accent)"
                      style={{
                        marginBottom: "5px",
                        border: "1px solid var(--color-accent)",
                        backgroundColor: "transparent",
                        color: "var(--color-accent)",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
              <Button
                type="primary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                  fontWeight: "bold",
                  color: "var(--color-light)",
                }}
              >
                Ver en GitHub
              </Button>
              <Button
                type="link"
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                  fontWeight: "bold",
                  color: "var(--color-light)",
                  marginLeft: "20px",
                }}
              >
                Ver Preview
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
