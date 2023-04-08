import React from "react";
import "./App.css";
import { useState } from "react";
import Panell from "./components/Panell";

const Presupost = () => {
    const [precioTotal, setPrecioTotal] = useState(0);
    const [openPanell, setOpenPanell] = useState(false);
  
  
    let preu = 0;
  
    const modificar = (e) => {
      if (!e.target.checked && e.target.id === "check1") {
        preu = 500;
        setOpenPanell(false);
      } else if (e.target.id === "check1") {
        preu = 0;
        setOpenPanell(true);
      } else if (e.target.id === "check2") {
        preu = 300;
      } else if (e.target.id === "check3") {
        preu = 200;
      }
      setPrecioTotal(
        e.target.checked
          ? precioTotal + preu 
          : precioTotal - preu 
      );
    };
  
    return (
      <>
        <p>¿Que vols fer?</p>
  
        <div>
          <input type={"checkbox"} id="check1" onClick={modificar} ></input>
          <label for="check1">Una pàgina web (500 €)</label>
          {openPanell && <Panell setPrecioTotal={setPrecioTotal} />}
        </div>
        <div>
          <input type={"checkbox"} id="check2" onClick={modificar} ></input>
          <label for="check2">Una campanya SEO (300 €)</label>
        </div>
        <div>
          <input type={"checkbox"} id="check3" onClick={modificar} ></input>
          <label for="check3">Una campanya de publicitat (200 €)</label>
        </div>
  
        <p>Preu: {precioTotal} €</p>
      </>
    );
}

export default Presupost