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
          <div className="col-md-4 col-lg-4"><br />
            <FontAwesomeIcon icon="question" size="7x" className="p-2" color="orange"/>
            <i className="fa fa-smile-o fa-5x" aria-hidden="true"></i><br /><br />
            <h3>Experiencia de Alternativas Odontológicas</h3>
            <p>Más de 35 años de ejercicio nos dan la experiencia, para un buen servicio. Restaurando y fortaleciendo sonrisas a través de nuestros especialistas. <br/><br/> Horario de atención:  8:00 a. m. a 10:00 p. m. <br/> De Lunes a Domingo <br/> Medellín - Colombia</p>
          </div>
          <div className="col-md-4 col-lg-4 shadow"><br />
          <FontAwesomeIcon icon="tools" size="7x" className="p-2" color="orange"/>
          <i className="fa fa-users fa-5x" aria-hidden="true"></i><br /><br />
            <h3>¿Qué hacemos?</h3>
            <p>Urgencias Odontológicas hasta las 10PM, todos los días de la semana, en Medellín. <br/> Toma de radiografías en un sólo lugar. Sin filas y desplazamientos innecesarios. <br /><br /> Consulte su caso telefónicamente, para ser más objetivo en la solución acorde a su procedimiento.</p>
          </div>
          <div className="col-md-4 col-lg-4"><br />
          <FontAwesomeIcon icon="chalkboard-teacher" size="7x" className="p-2" color="orange"/>
          <i className="fa fa-ambulance fa-5x" aria-hidden="true"></i><br /><br />
            <h3>Urgencias Odontológicas</h3>
            <p>En caso de urgencia que implique prótesis: Contamos con laboratorio propio. Para brindarle lo más inmediato posible una solución tanto estética como funcional. <br/> <br />Solo basta una llamada, y en instantes podrá visitarnos. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;