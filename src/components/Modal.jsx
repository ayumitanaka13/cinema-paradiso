import React from "react";

const Modal = ({ display, onClick }) => {
  return (
    <div className={`${display} Modal`} onClick={onClick}>
      <div className="text-center">
        <h1>Thank you!</h1>
        <p className="mt-16 mb-6">You nominated 5 lovely movies!</p>
        <small>
          2021 ©︎ Your Cinema Paradiso by{" "}
          <a
            href="https://ayumitanaka.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Ayumi Tanaka
          </a>
          <br />
          <a
            href="https://github.com/ayumitanaka13/cinema-paradiso"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Check source code on Github
          </a>
        </small>
      </div>
    </div>
  );
};

export default Modal;
