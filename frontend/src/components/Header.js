import React from 'react';
import { Fragment } from 'react';
import '../App.css';

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-md navbar-light  header-app">
        <div className="container-fluid">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-body-emphasis text-decoration-none">
            <span className="fs-4">TecolRadio S.A.S</span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Inicio</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Planes y Servicios</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contáctenos</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Nosotros</a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
