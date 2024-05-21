import React, {useRef} from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight, faGraduationCap} from '@fortawesome/free-solid-svg-icons';

const Testimonios = () => {
  const customeSlider = useRef();
  const settings = {
    infinite: true,
    // autoplay: true,
    speed: 19000,
    autoplayspeed: 90000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const previous = () =>{
    customeSlider.current.slickPrev();
  }

  const next = () => {
    customeSlider.current.slickNext();
  }
  return ( 
    <section className="home__testimonios">
      <div className="container__xll">

        <div className='home__testimonios-content'>
          <div className='grid'>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-4 grid-res-xl-4'>
              <div className="home__testimonios-descripcion">
                <h3 className='home__testimonios-descripcion-h3'>Casos de éxito</h3>
                <p className='home__testimonios-descripcion-p'>La mejor manera de conocer la experiencia formativa del <span style={{'fontWeight': '500'}}>Instituto de Educación Superior Privado "Alas Peruanas"</span> es a través de quienes la han vivido como estudiantes y hoy en día nos representan laborando en diferentes empresas por todo nuestro Perú.</p>
                <div className='home__testimonios-descripcion-content-icon'>
                  <FontAwesomeIcon icon={faGraduationCap} className='home__testimonios-descripcion-icon' />
                </div>
              </div>
            </div>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-8 grid-res-xl-8'>
              <div className="home__testimonios-sliders">
              <Slider {...settings} ref={customeSlider}>
                <div className='home__testimonios-slider'>
                  <p className='home__testimonios-slider-descripcion'>Egresada del programa de: <span className='home__testimonios-slider-descripcion-programa'>Secretariado ejecutivo</span> Actualmente labora en nuestra institución IESAP por mas de 10 años desempeñandose en el area de caja.  </p>
                  <h3 className='home__testimonios-slider-alumn'>Cynthia Yarleque Herrera</h3>
                  <h5 className='home__testimonios-slider-cargo'>Area de caja - Iesap</h5>
                  <div className="home__testimonios-slider-content-img">
                    <img src="./../assets/img/home/testimonios/cynthi321456987.jpg" alt="" className="home__testimonios-slider-img"/>
                  </div>
                </div>
                <div className='home__testimonios-slider'>
                  <p className='home__testimonios-slider-descripcion'>Egresado del programa de: <span className='home__testimonios-slider-descripcion-programa'>Computación e informática</span> Actualmente labora en la empresa ceser piura srl desempeñando el cargo de jefe del área de informática. Además se desempeña como administrador en la empresa Tecsupport Perú srl.</p>
                  <h3 className='home__testimonios-slider-alumn'>Alexander Sandoval Sandoval</h3>
                  <h5 className='home__testimonios-slider-cargo'>Jefe del área de informática</h5>
                  <div className="home__testimonios-slider-content-img">
                    <img src="./../assets/img/home/testimonios/alex548565214.jpg" alt="" className="home__testimonios-slider-img"/>
                  </div>
                </div>
                <div className='home__testimonios-slider'>
                  <p className='home__testimonios-slider-descripcion'>Egresado del programa de: <span className='home__testimonios-slider-descripcion-programa'>Computación e informática</span> formo su propia empresa dedicada al mantenimiento y reparación de equipos de computo ademas de la venta de repuestos y accesorios .</p>
                  <h3 className='home__testimonios-slider-alumn'>Joel Ygnacio Coronado Pulache</h3>
                  <h5 className='home__testimonios-slider-cargo'>Administrador de soporte técnico Piura</h5>
                  <div className="home__testimonios-slider-content-img">
                    <img src="./../assets/img/home/testimonios/joel14526428.jpg" alt="" className="home__testimonios-slider-img"/>
                  </div>
                </div>
                <div className='home__testimonios-slider'>
                  <p className='home__testimonios-slider-descripcion'>Egresada del programa de: <span className='home__testimonios-slider-descripcion-programa'>Secretariado ejecutivo</span> actualmente trabaja en "Laos Aguilar Limas y Asociados - Piura" desempeñando el cargo de secretaria con un aproximado de tres años.</p>
                  <h3 className='home__testimonios-slider-alumn'>Gloria Lizbeth Correa Campos</h3>
                  <h5 className='home__testimonios-slider-cargo'>Secretaria en - Laos Aguilar Limas y Asociados</h5>
                  <div className="home__testimonios-slider-content-img">
                    <img src="./../assets/img/home/testimonios/liz536214785.jpg" alt="" className="home__testimonios-slider-img"/>
                  </div>
                </div>
                <div className='home__testimonios-slider'>
                  <p className='home__testimonios-slider-descripcion'>Egresado del programa de: <span className='home__testimonios-slider-descripcion-programa'>Computación e Informática</span> ademas concluyo sus estudios de Ingenieria de sistemas en la UAP. Actualmente se desempeña como docente en el IESTP - Canchaque tiempo completo teniendo a cargo "Bienestar del estudiante" y "Soporte Técnico". </p>
                  <h3 className='home__testimonios-slider-alumn'>Miguel Vasquez Chuquihuanga</h3>
                  <h5 className='home__testimonios-slider-cargo'>Resp. de Soporte Técnico IESTP - Canchaque</h5>
                  <div className="home__testimonios-slider-content-img">
                    <img src="./../assets/img/home/testimonios/miguel25463251.jpg" alt="" className="home__testimonios-slider-img"/>
                  </div>
                </div>
                <div className='home__testimonios-slider'>
                  <p className='home__testimonios-slider-descripcion'>Egresado del programa de: <span className='home__testimonios-slider-descripcion-programa'>Administración de empresas</span> actualmente se desempeña como supervisor de serviscios financieros en "Caja Piura" con mas de dos años ejerciendo el cargo. </p>
                  <h3 className='home__testimonios-slider-alumn'>Pacherre Ruiz Junior Smith</h3>
                  <h5 className='home__testimonios-slider-cargo'>Supervisor de servicios financieros - Caja Piura</h5>
                  <div className="home__testimonios-slider-content-img">
                    <img src="./../assets/img/home/testimonios/junior457562142.jpg" alt="" className="home__testimonios-slider-img"/>
                  </div>
                </div>
              </Slider>
              </div>
              
            </div>
          </div>
          <div className="grid">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-4 grid-res-lg-4 grid-res-xl-4'>
            
            </div>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-8 grid-res-lg-8 grid-res-xl-8'>
              <div className='home__testimonios-sliders-move'>
                <div className='home__testimonios-sliders-previus'>
                  <button onClick={previous} className='home__testimonios-sliders-previus-btn'>
                    <FontAwesomeIcon icon={faChevronLeft} className='home__testimonios-sliders-previus-icon'/>
                  </button>
                </div>
                <div className='home__testimonios-sliders-next'>
                  <button onClick={next} className='home__testimonios-sliders-previus-btn'>
                    <FontAwesomeIcon icon={faChevronRight} className='home__testimonios-sliders-previus-icon'/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Testimonios;