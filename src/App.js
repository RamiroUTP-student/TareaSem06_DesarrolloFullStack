import { useEffect, useState } from "react";
import PersonajeCard from "./components/PersonajeCard.js";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        const res = await fetch("/personajes.json");
        const data = await res.json();
        setPersonajes(data);
      } catch (error) {
        console.error("Error cargando el JSON:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonajes();
  }, []);

  const containerStyle = {
    padding: "40px",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  };

  const gridStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
    justifyContent: "center"
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>
        Personajes de Naruto Shippuden
      </h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando ninjas...</p>
      ) : (
        <div style={gridStyle}>
          {personajes.map((p) => (
            <PersonajeCard key={p.id} personaje={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;