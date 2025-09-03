import React from "react";
import "./App.css";

function App() {
  const data = {
    titulo: "Objetos para la aventura",
    descripcion:
      "Girad los fotodiscos de las Poképaradas y los Gimnasios para recibir objetos que os ayudarán en vuestro viaje por Pokémon GO, como Poké Balls, Bayas, objetos de evolución y mucho más.",
    imagenes: {
      fondo: "/poke-imagen.png" // asegúrate que coincida el nombre exactamente
    }
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${data.imagenes.fondo})` }}
    >
      <h1>{data.titulo}</h1>
      <p>{data.descripcion}</p>
    </div>
  );
}

export default App;
