import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Panell from "./components/Panell";

const Presupost = () => {
  const [precioTotal, setPrecioTotal] = useState(0);
  const [openPanell, setOpenPanell] = useState(false);
  const [preu, setPreu] = useState(0);

  console.log(preu);

  const valores = [
    {
      id: 1,
      texto: "Una pàgina web(500€)",
      precio: 500,
    },
    {
      id: 2,
      texto: "Una campanya SEO (300€)",
      precio: 300,
    },
    {
      id: 3,
      texto: "Una campanya de publicitat(200€)",
      precio: 200,
    },
  ];

  const modificar = (e, indice) => {
   
    setPrecioTotal(
      e.target.checked
        ? precioTotal + valores[indice].precio 
        : precioTotal - valores[indice].precio
    );

    setOpenPanell(indice === 0 ? !openPanell : openPanell);
  };


  return (
    <>
      <p>¿Que vols fer?</p>

      {valores.map((servicio, indice) => (
        <div key={servicio.id}>
          <input
            type={"checkbox"}
            id={servicio.id}
            onClick={(e) => modificar(e, indice)}
          ></input>
          <label htmlFor={servicio.id}>{servicio.texto}</label>
          {openPanell && indice === 0 ? <Panell setPreu={setPreu} /> : null}
        </div>
      ))}

      <p>Preu: {precioTotal} €</p>
      <p>Precio por las paginas (por implementar): {preu} €</p>
    </>
  );
};

export default Presupost;
