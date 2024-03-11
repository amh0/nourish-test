import React, { useEffect, useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo_64.png";
const NavBar = () => {
  const [menu, setMenu] = useState("inicio");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>NourishNet</p>
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("inicio");
          }}
        >
          Inicio{menu === "inicio" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("nosotros");
          }}
        >
          Nosotros{menu === "nosotros" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contacto");
          }}
        >
          Contacto{menu === "contacto" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("preguntas");
          }}
        >
          Preguntas frecuentes{menu === "preguntas" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login">
        <button>Iniciar Sesion</button>
        <button>Registro</button>
      </div>
    </div>
  );
};

export default NavBar;
