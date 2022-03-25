import React from 'react'
import './style.css'
import { Image, Container } from 'react-bootstrap';
import trivago_logo from "../../assets/Trivago-logo.png";
function Header() {
  return (
    <header>
      <Container className="d-flex header-container">
        <Image src={trivago_logo} height={70} className="mr-3"></Image>
        <div className="headers-info">
          <p className="header-title">Deals from your favorite booking sites</p>
          <p className="header-catch">
            Try searching for a city, a specific hotel, or even a landmark!
          </p>
        </div>
      </Container>
    </header>
  );
}

export default Header