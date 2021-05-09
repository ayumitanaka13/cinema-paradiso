import React from "react";

const Modal = ({ display, onClick }) => {
  return (
    <div className={`${display} Modal`} onClick={onClick}>
      <div className="text-center">
        <h1>Thank you!</h1>
        <p className="mt-16">You nominated 5 lovely movies!</p>
      </div>
    </div>
  );
};

export default Modal;
