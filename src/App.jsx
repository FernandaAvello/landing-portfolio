import React from "react";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./assets/styles/global.css"; // Importa el CSS del separador

const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header />
      <Content style={{ marginTop: 64 }}>
        {/* Sección de contenido con separadores */}
        <div className="section">
          <Home />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Work />
        </div>
        <div className="section">
          <Education />
        </div>
        <div className="section">
          <Contact />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;