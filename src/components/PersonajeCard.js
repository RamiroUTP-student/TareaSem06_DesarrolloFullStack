const PersonajeCard = ({ personaje }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.2s"
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#f0f0f0",
    marginBottom: "10px"
  };

  const tagStyle = {
    fontSize: "0.8rem",
    background: "#ff5722",
    color: "white",
    padding: "2px 8px",
    borderRadius: "10px",
    display: "inline-block",
    marginBottom: "5px"
  };

  return (
    <div style={cardStyle}>
      <img src={personaje.imagen} alt={personaje.nombre} style={imgStyle} />

      <span style={tagStyle}>{personaje.aldea}</span>

      <h3 style={{ margin: "10px 0 5px" }}>
        {personaje.nombre}
      </h3>

      <p style={{ color: "#666", fontSize: "0.9rem" }}>
        <strong>Clan:</strong> {personaje.clan} <br />
        <strong>Rango:</strong> {personaje.rango} <br />
        <strong>Poder:</strong> {personaje.poder}
      </p>
    </div>
  );
};

export default PersonajeCard;