import React from "react";
import SmartFarming from "../img/urgencias.jpg";
import GonzaloArango from "../img/laboratorio.jpg";
import GeekConference from "../img/24horas1.jpg";
import acadGeek from "../img/estetica-natural.jpg";
import Store from "../img/implante-dental.jpeg";
import MusicApp from "../img/periodoncia.jpg";
import CirugiaOral from "../img/cirugiaoral.jpg";
import Endodoncia from "../img/endodoncia.jpg";
import HigieneOral from "../img/higieneoral.jpg";
import "../ServicesComponent/styles/StylesServices.css";


const Portfolio = () => (
  <section id="Portfolio">
    <hr className="my-4 bg-light" />

    <div className="container mt-4 mb-3 text-center">
      <h1 className="mb-3">Servicios Odontológicos</h1>
      <p className="mb-5">Nuestros servicios son los siguientes:</p>

      <div className="row mt-3 pb-2 ">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={SmartFarming} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Urgencias Odontológicas</h4>
                  <p>
                  Dolor en los dientes, fracturas, sangrado de encías, abscesos, lesiones generadas por traumatismos. 
                  </p>
                  <a className="btn btn-danger " href="tel:+573002161403">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={GonzaloArango} alt="Laboratorio" />
              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Laboratorio</h4>
                  <p>
                  Tenemos disponibilidad para realizar prótesis provisionales inmediatas en caso de urgencias, en el menor tiempo posible.
                  </p>
                  <a className="btn btn-primary " href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={GeekConference} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Disponibilidad 24 Horas</h4>
                  <p>
                  Estamos a su servicio los 365 días del año. Atendemos su emergencia en el momento que usted lo necesita con sólo una llamada previa.
                  </p>
                  <a className="btn btn-primary " href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={acadGeek} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Odontología Estetica Natural</h4>
                  <p>
                  Nuestras técnicas de rehabilitación siempre estarán enfocadas hacia la estética natural.
                  </p>
                  <a className="btn btn-danger " href="tel:+573002161403" target="_blank">
                    Lamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={Store} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Implantes Dentales</h4>
                  <p>
                  Nuestras técnicas de rehabilitación siempre estarán enfocadas hacia la estética natural. 
                  </p>
                  <a className="btn btn-primary" href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={MusicApp} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Periodocia</h4>
                  <p>
                  Es la rehabilitación de todos los tejidos afectados que soportan el diente.  
                  </p>
                  <a className="btn btn-primary" href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={CirugiaOral} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Cirugía Oral</h4>
                  <p>
                  Tratamiento quirúrgico enfocado en atender las enfermedades que se producen en la boca, los maxilares y sus tejidos  
                  </p>
                  <a className="btn btn-primary" href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={Endodoncia} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Endodoncia</h4>
                  <p>
                  Procedimiento que trata los conductos o raíces del diente para eliminar caries profundas y así evitar la pérdida de las piezas dentales afectadas.  
                  </p>
                  <a className="btn btn-primary" href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> 

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={HigieneOral} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Higiene Oral</h4>
                  <p>
                  Aunque tengas una excelente higiene dental es común que con el tiempo tus dientes acumulen placa bacteriana, la cual forma el sarro o los cálculos, que no se pueden eliminar con el cepillado y producen enfermedades dentales.  
                  </p>
                  <a className="btn btn-primary" href="tel:+573002161403" target="_blank">
                    Llamar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
      
      
    </div>

    <hr className="my-4 bg-light" />
  </section>
);

export default Portfolio;
