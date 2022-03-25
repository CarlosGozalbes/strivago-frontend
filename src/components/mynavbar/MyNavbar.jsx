import React from 'react'
import { Container } from 'react-bootstrap'
import './style.css'
import { FaBed, FaCar, FaPlane, FaSuitcase } from "react-icons/fa";
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <nav className="d-flex justify-content-between navbar">
      <div className="d-flex first-navMenu">
        <div className="p-3 navbar-manu-option">
          <FaBed className="mr-2 mb-1" />
          Alojamientos
        </div>
        <div className="p-3 navbar-manu-option">
          <FaCar className="mr-2 mb-1" />
          Coches
        </div>
        <div className="p-3 navbar-manu-option">
          <FaPlane className="mr-2 mb-1" />
          Vuelos
        </div>
        <div className="p-3 navbar-manu-option">
          <FaSuitcase className="mr-2 mb-1" />
          Paquetes
        </div>
      </div>
      <div className="d-flex mr-4">
        <Link to="/login" className='text-decoration-none'>
          <div className="p-3 navbar-manu-option">  Iniciar sesión</div>
        </Link>
        <div className="p-3">Menú</div>
        <div className="p-3">Menú</div>
        <div className="p-3">EN</div>
      </div>
    </nav>
  );
}

export default MyNavbar