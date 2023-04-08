import React, { useState, useEffect } from "react";
import StylePanell from "./style-component";
import Botons from "./Botons";


const Panell = ({ setPrecioTotal,total }) => {
  const [pagines, setPagines] = useState(window.localStorage.getItem("pagines"));
  const [idiomes, setIdiomes] = useState(window.localStorage.getItem("idiomes"));

  window.localStorage.setItem("pagines",pagines);
  window.localStorage.setItem("idiomes",idiomes);
  
  

  const asignarPagines = (e) => {//Evita que se pueda escribir numeros en negativo en el input
    if (e.target.value <= 0) {
      setPagines("");
    } else {
      setPagines(e.target.value);
    }
  };
  const asignarIdiomes = (e) => {//Evita que se pueda escribir numeros en negativo en el input
    if (e.target.value <= 0) {
      setIdiomes("");
    } else {
      setIdiomes(e.target.value);
    }
  };

  useEffect(() => {
    calcularTotal();
  }, [pagines, idiomes]);

  const calcularTotal = () => {
    setPrecioTotal((Number(pagines) + Number(idiomes)) * 30 + 500);
  };

  return (
    <>
      <StylePanell>
        <div style={{ display: "flex" }}>
          <label>Número de pàgines </label>
          <Botons
            onChange={asignarPagines}
            estado={pagines}
            modificacion={setPagines}
          />
        </div>
        <div style={{ display: "flex" }}>
          <label>Número de idiomes </label>
          <Botons
            onChange={asignarIdiomes}
            estado={idiomes}
            modificacion={setIdiomes}
          />
        </div>
      </StylePanell>
    </>
  );
};

export default Panell;
