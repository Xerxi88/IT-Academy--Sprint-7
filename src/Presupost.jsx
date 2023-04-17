import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Panell from "./components/Panell";
import Modal from "./components/Modal";

const Presupost = () => {
  const [precioTotal, setPrecioTotal] = useState(0);
  const [openPanell, setOpenPanell] = useState(false);
  const [preu, setPreu] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

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
    setPreu(!e.target.cheked && indice === 0 ? 0 : preu);

    setOpenPanell(indice === 0 ? !openPanell : openPanell);
  };

  return (
    <>
      {openModal && (
        <Modal
          text="pàgines"
          setOpenModal={setOpenModal}
        />
      )}
      {openModal2 && (
        <Modal
          text="idiomes"
          setOpenModal={setOpenModal2}
        />
      )}

      <p>¿Que vols fer?</p>

      {valores.map((servicio, indice) => (
        <div key={servicio.id}>
          <input
            type={"checkbox"}
            id={servicio.id}
            onClick={(e) => modificar(e, indice)}
          ></input>
          <label htmlFor={servicio.id}>{servicio.texto}</label>
          {openPanell && indice === 0 ? (
            <Panell
              setPreu={setPreu}
              setOpenModal={setOpenModal}
              setOpenModal2={setOpenModal2}
            />
          ) : null}
        </div>
      ))}

      <p>Preu: {precioTotal + preu} €</p>
    </>
  );
};

export default Presupost;
