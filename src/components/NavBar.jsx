import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <div className="content-nav">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#05b4c2" }}>
        <span className="navbar-brand" style={{ marginLeft: "10px", fontSize: "30px" }}><strong>VitalSense</strong></span>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ml-auto" style={{ fontSize: "20px" }}>
            <Link className="nav-item nav-link custom-link" to="/dashboard">Lecturas</Link>
            <Link className="nav-item nav-link custom-link" to="/observations">Observaciones</Link>
            <Link className="nav-item nav-link custom-link" to="/clinicHistory">Historia Clínica</Link>
            <Link className="nav-item nav-link custom-link" to="/">Salir</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
