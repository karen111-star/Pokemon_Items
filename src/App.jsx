import React from "react";
import "./App.css";

function App() {
  // Objeto con la información
  const data = {
    titulo: "Objetos para la aventura",
    descripcion:
      "Girad los fotodiscos de las Poképaradas y los Gimnasios para recibir objetos que os ayudarán en vuestro viaje por Pokémon GO, como Poké Balls, Bayas, objetos de evolución y mucho más.",
    imagenes: {
      fondo: "/imagen_pk.PNG" // Guarda la imagen que subiste como fondo.jpg en public/
    }
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${data.imagenes.fondo})` }}
    >
      <div className="overlay">
        <h1>{data.titulo}</h1>
        <p>{data.descripcion}</p>

      </div>
    </div>
  );
}

export default App;
