import React, { useState, useEffect} from "react";
import StylePanell from "./style-component";

const Panell = ({ setPrecioTotal }) => {
  const [pagines, setPagines] = useState(0);
  const [idiomes, setIdiomes] = useState(0);

  const asignarPagines = (e) => {
    setPagines(e.target.value);
  };
  const asignarIdiomes = (e) => {
    setIdiomes(e.target.value);
  };

  useEffect(() => {
    calcularTotal();
  }, [pagines,idiomes]);

  const calcularTotal = () => {
    setPrecioTotal(((Number(pagines) + Number(idiomes)) * 30)+500);
  };

  return (
    <>
      <StylePanell>
        <div>
          <label>Número de pàgines </label>
          <input type="number" min="0" onChange={asignarPagines} />
        </div>
        <div>
          <label>Número de idiomes </label>
          <input type="number" min="0"  onChange={asignarIdiomes} />
        </div>
      </StylePanell>
    </>
  );
};

export default Panell;
