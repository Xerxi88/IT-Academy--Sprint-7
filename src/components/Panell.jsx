import React, { useState, useEffect } from "react";
import StylePanell from "./style-component";
import Botons from "./Botons";

const Panell = ({
  setPreu,
  openModal,
  setOpenModal,
  openModal2,
  setOpenModal2,
}) => {
  const [pagines, setPagines] = useState(
    Number(window.localStorage.getItem("pagines"))
  );
  const [idiomes, setIdiomes] = useState(
    Number(window.localStorage.getItem("idiomes"))
  );

  window.localStorage.setItem("pagines", pagines);
  window.localStorage.setItem("idiomes", idiomes);

  useEffect(() => {
    calcular();
  }, [pagines, idiomes]);

  const calcular = () => {
    setPreu((pagines + idiomes) * 30);
  };

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

  const mostrarModal = () => {
    setOpenModal(!openModal);
  };
  const mostrarModal2 = () => {
    setOpenModal2(!openModal2);
  };

  return (
    <>
      <StylePanell>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Número de pàgines </label>
          <Botons
            onChange={asignarPagines}
            estado={pagines}
            modificacion={setPagines}
          />
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-info-circle"
            viewBox="0 0 16 16" className="info" onClick={mostrarModal}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>Número de idiomes </label>
          <Botons
            onChange={asignarIdiomes}
            estado={idiomes}
            modificacion={setIdiomes}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-info-circle"
            viewBox="0 0 16 16" className="info" onClick={mostrarModal2}
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </div>
      </StylePanell>
    </>
  );
};

export default Panell;
