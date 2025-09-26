import React from "react";

const AboutMeCard = () => {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Sobre mí</h2>
      <p style={styles.text}>
        Soy Román De Las Heras, desarrollador backend especializado en
        JavaScript, Node.js y tecnologías modernas como el framework Express.js,
        el ORM Prisma y la librería de pruebas Jest. Tengo experiencia
        profesional construyendo APIs REST, gestionando bases de datos y
        aplicando pruebas para garantizar la estabilidad de los sistemas.
        <br />
        <br />
        Disfruto diseñando arquitecturas limpias, colaborando estrechamente con
        otros, tanto con miembros del backend como con los del frontend y
        participando en proyectos de principio a fin. Mi objetivo es crear
        soluciones eficientes, mantenibles.
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "500px",
    margin: "0 auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#E6F4EA",
  },
  title: {
    fontSize: "24px",
    marginBottom: "8px",
    color: "#000",
  },
  text: {
    fontSize: "16px",
    color: "#222",
    lineHeight: "1.5",
  },
};

export default AboutMeCard;
