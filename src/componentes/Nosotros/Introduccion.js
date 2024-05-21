import React, {useState, useEffect} from 'react';
import { FaUniversity } from "react-icons/fa";

const Introduccion = ({codfilial}) => {
  let [dataNosotros, setDataNosotros] = useState({});

  useEffect(() => {
    if (codfilial === '96a3be3cf272e017046d1b2674a52bd3' || codfilial === 'a2ef406e2c2351e0b9e80029c909242d' || codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce' || codfilial === '7d0665438e81d8eceb98c1e31fca80c1' || codfilial === '751d31dd6b56b26b29dac2c0e1839e34') {
      setDataNosotros(
        {
          p1: 'El Instituto de Educación Superior Privado "Alas Peruanas" es una institución educativa de nivel superior, cuya misión es formar profesionales técnicos en seis semestres académicos en el marco de la excelencia educativa. Cuenta con catedráticos de probada experiencia en el proceso de enseñanza y hace uso de la tecnología como herramienta complementaria a la formación profesional.',
          p2 : 'IESAP se licenció con Resolución Ministerial(RM) | N°039-2019 - Minedu, la sede principal se encuentra en la ciudad de Lima, y las filiales en Piura, Arequipa, Ica y Chiclayo.',
          p3: 'Somos una institución privada orientada a las ciencias, las humanidades y la tecnología, para formar profesionales técnicos de alta calidad, capaces de competir eficaz y eficientemente en el mercado laboral.',
          picture: ''
        }
      )
    }
  }, [codfilial]);

  return ( 
    <section className='nosotros__introduccion' id='introduccion'>
      <div className="container">
        <div className="grid grid-gap-xl">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <div className='nosotros__introduccion-content'>
              <div className='nosotros__introduccion-content-left'>
                <div className='nosotros__introduccion-content-icon' style={{border: '2px solid var(--blue)'}}>
                  <FaUniversity className='nosotros__introduccion-icon'/>
                </div>
              </div>

              <div className='nosotros__introduccion-card-data' style={{borderLeft: '4px solid var(--blue)'}}>
                <p className='nosotros__introduccion-data'>{dataNosotros.p1}</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-gap-xl">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <div className='nosotros__introduccion-content'>
              <div className='nosotros__introduccion-content-left'>
                <div className='nosotros__introduccion-content-icon' style={{border: '2px solid var(--success)'}}>
                  <IoMdRibbon className='nosotros__introduccion-icon'/>
                </div>
              </div>

              <div className='nosotros__introduccion-card-data' style={{borderLeft: '4px solid var(--success)'}}>
                <p className='nosotros__introduccion-data'>{dataNosotros.p2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-gap-xl">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <div className='nosotros__introduccion-content'>
              <div className='nosotros__introduccion-content-left'>
                <div className='nosotros__introduccion-content-icon' style={{border: '2px solid var(--pink)'}}>
                  <IoIosSchool className='nosotros__introduccion-icon'/>
                </div>
              </div>

              <div className='nosotros__introduccion-card-data' style={{borderLeft: '4px solid var(--pink)'}}>
                <p className='nosotros__introduccion-data'>{dataNosotros.p3}</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
 
export default Introduccion;