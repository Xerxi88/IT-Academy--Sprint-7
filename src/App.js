import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [precioTotal, setPrecioTotal] = useState(0);
  
  let preu=0;


  const modificar = (e) => {
    if (e.target.id === "check1") {
    preu = 500;
  } else if (e.target.id === "check2") {
    preu = 300;
  } else if (e.target.id === "check3") {
    preu = 200;
  }
    setPrecioTotal(e.target.checked ? precioTotal + preu : precioTotal - preu)
    
  };

  return (
    <>
      <p>¿Que vols fer?</p>
      <div>
        <input type={"checkbox"} id="check1" onClick={modificar}></input>
        <label for="check1">Una pàgina web (500 €)</label>
      </div>
      <div>
        <input type={"checkbox"} id="check2" onClick={modificar}></input>
        <label for="check2">Una campanya SEO (300 €)</label>
      </div>
      <div>
        <input type={"checkbox"} id="check3" onClick={modificar}></input>
        <label for="check3">Una campanya de publicitat (200 €)</label>
      </div>

      <p>Preu: {precioTotal} €</p>
    </>
  );
};

export default App;
