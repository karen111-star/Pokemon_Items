import React from "react";
import "./App.css";

function App() {
  const data = {
    titulo: "Items for Your Adventure",
    descripcion:
      "Spin Photo Discs at PokéStops and Gyms to receive items that will help you on your Pokémon GO journey, including Poké Balls, Berries, Evolution items, and more.",
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
