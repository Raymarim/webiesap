import React from 'react';
import { IoMdSchool } from 'react-icons/io';
import { IoRefreshCircle, IoStarHalf, IoPersonAdd } from "react-icons/io5";

const Estadistica = () => {
  return ( 
    <section className='home__estadistica'>
      <div className="container__lg">
        <div className='home__estadistica-items'> 
          <div className="grid">
            <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-3 grid-res-xl-3'>
              <div className='home__estadistica-item'>
                <div className='home__estadistica-item-content-icon'>
                  <IoRefreshCircle className='home__estadistica-item-icon'/>
                </div>
                <h4 className='home__estadistica-item-numero'>10,000+</h4>
                <p className='home__estadistica-item-title'>Estudiantes egresados</p>
              </div>
            </div>
            <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-3 grid-res-xl-3'>
              <div className='home__estadistica-item'>
                <div className='home__estadistica-item-content-icon'>
                  <IoStarHalf className='home__estadistica-item-icon'/>
                </div>
                <h4 className='home__estadistica-item-numero'>300+</h4>
                <p className='home__estadistica-item-title'>Egresados laborando</p>
              </div>
            </div>
            <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-3 grid-res-xl-3'>
              <div className='home__estadistica-item'>
                <div className='home__estadistica-item-content-icon'>
                  <IoPersonAdd className='home__estadistica-item-icon'/>
                </div>
                <h4 className='home__estadistica-item-numero'>1500+</h4>
                <p className='home__estadistica-item-title'>Matrículas activas</p>
              </div>
            </div>
            <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-3 grid-res-xl-3'>
              <div className='home__estadistica-item'>
                <div className='home__estadistica-item-content-icon'>
                  <IoMdSchool className='home__estadistica-item-icon'/>
                </div>
                <h4 className='home__estadistica-item-numero'>900+</h4>
                <p className='home__estadistica-item-title'>Profesionales titulados</p>
              </div>
            </div>

            </div>
            {/* <div className="home__estadistica-content">
              <h4 className='home__estadistica-content-egresados'>Más de 5000 alumnos egresados...</h4>
              <h5 className='home__estadistica-content-titulados'> <FontAwesomeIcon icon={faCertificate} style={{'fontSize' : '30px'}}/> Más de 3000 alumnos titulados...</h5>
              <h5 className='home__estadistica-content-laborando'><FontAwesomeIcon icon={faUserGraduate} style={{'fontSize' : '25px'}}/> Mas de 500 alumnos laborando...</h5>
              <p className='home__estadistica-content-descripcion'>Que esperas, <FcAcceptDatabase/> se parte de éxito!!!</p>
              <div className='home__estadistica-content-matriculate'>
                <a href="https://erp.iesap.edu.pe/pre-inscripcion" className='home__estadistica-content-enlace' target='_black'><FontAwesomeIcon icon={faHandPointRight}/> Matricúlate</a>
              </div>
            </div> */}
         
        </div>
      </div>
    </section>
  );
}
 
export default Estadistica;