import React from "react";

const AboutMeCard = () => {
  return (
    <div style={styles.card}>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://res.cloudinary.com/dkjrqu5dt/image/upload/v1758915083/20220419_190636_gzyewr.webp"
              alt="Román De Las Heras"
              style={{
                maxWidth: "170px",
                maxHeight: "170px",
                borderRadius: "50%",
                marginBottom: "12px",
                border: "4px solid #ccc",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
          <p style={styles.quote}>
            "Sobre lo que programes hoy, trabajarás mañana."
          </p>
          <p style={styles.quote}> - Román De Las Heras</p>
        </div>
      </div>
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

  quote: {
    fontStyle: "italic",
    marginTop: "12px",
    color: "#444",
  },
};

export default AboutMeCard;
