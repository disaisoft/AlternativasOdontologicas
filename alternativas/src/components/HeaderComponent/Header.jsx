import React, { Component } from "react";
import './styles/HeaderStyle.css';
import Logo from '../img/logo_alternativas_odontológicas-removebg.png';

class Header extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark text-uppercase">
        <div className="container">
          <a className="m-0 p-0 w-25" href="/"><img src={Logo} alt="" className="w-50 logo-home"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample07"
            aria-controls="navbarsExample07"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample07">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#aboutme">
                  Inicio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="/"
                  id="dropdown07"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Servicios Odontologicos
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <a className="dropdown-item" href="#frontend">
                    front-end
                  </a>
                  <a className="dropdown-item" href="#backend">
                    backend
                  </a>
                  <a className="dropdown-item" href="#videojuegos">
                    video juegos
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#requisitos">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" target="_blanck" href="http://nodoka.co">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" target="_blanck" href="https://www.tecnologiaparaelsectorsocial.org">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          </div>
      </nav>
      <div className="bg-color-home">
        <div className="position-relative overflow-hidden p-3 p-md-5 bg-home text-white">
          <div className="col-md-5 p-lg-5 my-5 bg-color-home">
            <h1 className="display-4 font-weight-normal title-home">
            Urgencias Odontológicas 24 horas con cita previa
            </h1>
            <p className="lead font-weight-normal" />
            <a
              className="btn btn-primary btn-lg btn-block bg-boton font-weight-bold mb-2 boton-letter mt-4"
              href="#requisitos"
            >
              Llamar Ahora
            </a><br/>
            {/* <a
              className="btn btn-primary btn-lg bg-boton font-weight-bold boton-letter py-1"
              href="https://wa.me/0573232933565"
            >
              Contáctanos
            </a> */}
          </div>
        </div>
      </div>
    </React.Fragment>
    );
  }
}

export default Header;