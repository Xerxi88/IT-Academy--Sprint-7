import React, { useState, useEffect } from "react";
import StylePanell from "./style-component";
import Botons from "./Botons";


const Panell = ({ setPreu }) => {

  const [pagines, setPagines] = useState(Number(window.localStorage.getItem("pagines")))
  const [idiomes, setIdiomes] = useState(Number(window.localStorage.getItem("idiomes")))

  window.localStorage.setItem("pagines",pagines);
  window.localStorage.setItem("idiomes",idiomes);
  
  useEffect(()=>{
    calcular();
  },[pagines,idiomes]);

  const calcular=()=>{
    setPreu((pagines+idiomes)*30);
  }

  const asignarPagines = (e) => {
    if (e.target.value <= 0) {
      setPagines(0);
    } else {
      setPagines(e.target.value);
    }
  };
  const asignarIdiomes = (e) => {
    if (e.target.value <= 0) {
      setIdiomes(0);
    } else {
      setIdiomes(e.target.value);
    }
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
