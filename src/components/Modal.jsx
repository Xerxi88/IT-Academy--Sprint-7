import React from "react";
import "../App.css";

const Modal = ({ text, setOpenModal }) => {
  const tancarModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <main className="modal" onClick={tancarModal}>
        <section className="panell">
          <div>
            En aquest component has d'indicar el nombre de {text} que tindrà el
            seu lloc web.
          </div>
        </section>
      </main>
    </>
  );
};

export default Modal;
