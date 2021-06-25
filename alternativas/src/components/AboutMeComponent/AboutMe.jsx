import React, { Component } from "react";
import './styles/AboutMeStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div className="container text-center mt-5 mb-5">
          <h1 className="mb-5" id='aboutme' >Consultorio Odontológico Particular</h1>
        <div className="row">
          <div className="col-md-4 col-lg-4">
            <FontAwesomeIcon icon="question" size="7x" className="p-2" color="orange"/>
            <h3>Experiencia</h3>
            <p>Más de 35 años protegiendo, restaurando y fortaleciendo sonrisas. <br/><br/> Horario de atención:  8:00 a. m. a 10:00 a. m. <br/> De Lunes a Domingo <br/> Medellín - Colombia</p>
          </div>
          <div className="col-md-4 col-lg-4 shadow">
          <FontAwesomeIcon icon="tools" size="7x" className="p-2" color="orange"/>
            <h3>¿Qué hacemos?</h3>
            <p>Brindamos servicio de Odontología y Urgencias Odontológicas las 24 horas, todos los días de la semana, en Medellín. <br/> Cita inmediata, procedimientos y toma de radiografías en un sólo lugar. Sin filas y desplazamientos innecesarios.</p>
          </div>
          <div className="col-md-4 col-lg-4">
          <FontAwesomeIcon icon="chalkboard-teacher" size="7x" className="p-2" color="orange"/>
            <h3>Urgencias</h3>
            <p>En caso de urgencia que implique prótesis: contamos con laboratorio propio. Realizamos procedimientos y toma de Radiografías en un sólo lugar.  <br/> Solo basta una llamada, y en instantes podrá visitarnos</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;