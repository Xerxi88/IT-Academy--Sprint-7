import React from "react";
import '../App.css'

const Botons = ({ onChange, estado, modificacion}) => {
  
  const suma=()=>{
    modificacion(e=>e+1)
  }

  const resta=()=>{
    if(estado>1){
      modificacion(e=>e-1)
      }
  }
  return (
    <div>
      <button onClick={suma} className="dades">+</button>
      <input type="number" value={estado} min="1" onChange={onChange}/>
      <button onClick={resta} className="dades">-</button>
    </div>
  );
};

export default Botons;
