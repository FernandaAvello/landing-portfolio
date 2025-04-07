import React from "react";
import ReactDOM from "react-dom/client"; // Asegúrate de usar 'react-dom/client' para React 18
import App from "./App";
import "antd/dist/reset.css"; // Estilos globales de Ant Design
import "../src/assets/styles/global.css"; // Tus estilos personalizados

ReactDOM.createRoot(document.getElementById("root")).render(<App />);