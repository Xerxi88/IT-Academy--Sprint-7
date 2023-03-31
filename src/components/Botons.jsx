import React from "react";
import '../App.css'

const Botons = ({ onChange, estado, modificacion}) => {
  
  const suma=()=>{
    modificacion(e=>Number(e)+1)
  }

  const resta=()=>{
    if(estado>0){
      modificacion(e=>Number(e)-1)
      }
  }
  return (
    <div>
      <button onClick={suma} className="dades">+</button>
      <input type="number" value={estado} onChange={onChange}/>
      <button onClick={resta} className="dades">-</button>
    </div>
  );
};

export default Botons;
