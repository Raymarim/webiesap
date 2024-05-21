import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import '../../css/sass/Home/_slider.scss';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { IoIosArrowRoundForward } from "react-icons/io";

const SliderBanner = ({codfilial, subdominio, filial}) => {
  // console.log(codfilial)
  const url_base = process.env.REACT_APP_BASEURL;
  const [dataSlider, fcargarSlider] = useState([]);

  
  useEffect(() => {
    const controller = new AbortController();

    const obtenerdata = async () => {
      try {
        const resp = await axios.get(`${url_base}api/webhome/test`,{
          params:{
            keyf : codfilial
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          fcargarSlider(resp.data);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    obtenerdata();
    
    return() => {
      controller.abort();
    }

  }, [url_base, codfilial]);

  const customeSlider  = useRef();

  const beforeChange = (prev, next) =>{
    
    setTimeout(() => {
      let img = document.querySelectorAll('.home__slider-img');
      for (let i = 0; i < img.length; i++) {
        img[i].classList.remove("zoomInImage");
      }

      let titulo = document.querySelectorAll('.home__slider-content-data-titulo');
      for (let i = 0; i < titulo.length; i++) {
        titulo[i].classList.remove("ani_slide_des_titulo");
        titulo[i].style.opacity = 0;
      }

      let des = document.querySelectorAll('.home__slider-content-data-descripcion');
      for (let i = 0; i < des.length; i++) {
        des[i].classList.remove("description_p");
        des[i].style.opacity = 0;
      }

      let btn = document.querySelectorAll('.home__slider-content-data-descripcion-btn');
      for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("ani_slide_des_btn");
        btn[i].style.opacity = 0;
      }
    });
  };

  const afterChange = (index) =>{
    setTimeout(() => {
      let img = document.querySelector('.slick-active .home__slider-img');
      img.classList.add("zoomInImage");

      let titulo = document.querySelector('.slick-active .home__slider-content-data-titulo');
      titulo.classList.add("ani_slide_des_titulo");
      titulo.style.opacity = 1;

      let des = document.querySelector('.slick-active .home__slider-content-data-descripcion');
      des.classList.add("description_p");
      des.style.opacity = 1;

      let btn = document.querySelector('.slick-active .home__slider-content-data-descripcion-btn');
      btn.classList.add("ani_slide_des_btn");
      btn.style.opacity = 1;

    });
  }
  
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 9000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    beforeChange,
    afterChange,
  }

  const previous = () => {
    customeSlider.current.slickPrev();
  }

  const next = () => {
    customeSlider.current.slickNext();
  }

  return ( 
    // <section className='home__slider'>
    //   <div className="container__xl">
    //   <div className='home__slider-content'>
    //     <div className="home__slider-content-group-slider">
    //       <Slider {...settings} ref={customeSlider}>
    //         <div className='home__slider-slide'>
    //           <div className='home__slider-content-img'>
    //             <img src="./assets/img/galeria/Imagen1.jpg" alt='titulo' className='home__slider-img'/>
    //           </div>
    //           <div className="home__slider-description">
    //             <h2 className="home__slider-description-title">Let Enjoy The Rhym Of Fooday Dishes</h2>
    //             <p className="animated top-title">Welcome to Shareat restaurant</p>
    //             <button className="home__slider-description-btnincripcion">Inscribéte</button>
    //           </div>
    //         </div>
    //         <div className='home__slider-slide'>
    //           <div className='home__slider-content-img'>
    //             <img src="./assets/img/galeria/Imagen2.jpg" alt='titulo' className='home__slider-img'/>
    //           </div>
    //           <div className="home__slider-description">
    //             <div className="home__slider-headings">
    //               <p className="animated top-title" data-animation-in="fadeInUp" data-delay-in="0.3">Welcome to Shareat restaurant</p>
    //               <h2 className="animated title" data-animation-in="fadeInUp">HOLAS</h2>
    //               <button className="btn-light btn button-custom animated" data-animation-in="fadeInUp">Our menu</button>
    //             </div>
    //           </div>
    //         </div>
    //       </Slider>
    //     </div>
    //     <div className='home__slider-content-move'>
    //       <div className="home__slider-content-previous">
    //         <button onClick={previous} className='home__slider-content-previous-botton'>
    //           <span><FontAwesomeIcon icon={faChevronLeft} className="home__slider-content-previous-icon"/></span>
    //         </button>
    //       </div>
    //       <div className="home__slider-content-next">
    //         <button onClick={next} className='home__slider-content-previous-botton'>
    //           <span><FontAwesomeIcon icon={faChevronRight} className="home__slider-content-previous-icon"/></span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   </div>    
    // </section>
    
    <section className='home_slider'>
      <div className='container__xl'>
        <div className='grid'>
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-lg-12 grid-res-md-12 grid-res-xl-12'>
            <div className='home_slider-content'>
              {/* lenth */}
              <Slider {...settings} ref={customeSlider} className="home_slider-group-img">

              {
              dataSlider.map((slide,i) => {

                const typeSlide = parseInt(slide.type);

                return <div key={slide.keysl} className='home__slider-slide'>
                  <div className='home__slider-content-img'>
                    <picture>
                      <source media="(max-width: 767.98px)" srcSet={`${url_base}package/web_iesap/img/programas/small/${slide.picture_small}`} sizes="" />
                      <img src={`${url_base}package/web_iesap/img/slider/${slide.picture}`} alt='titulo' className='home__slider-img'/>
                    </picture>
                  </div>
                  <div className="home__slider-content-data">
                    {
                      (codfilial === 'a2ef406e2c2351e0b9e80029c909242d')?
                      <>
                        <h2 className="home__slider-content-data-titulo"> <span className='home__slider-content-data-titulo-mencion'></span></h2>
                        <p className="home__slider-content-data-descripcion" style={{marginBottom: '135px'}}></p>
                      </>
                      :
                      <>
                        <h2 className="home__slider-content-data-titulo">{slide.name_reduce1} <span className='home__slider-content-data-titulo-mencion'>{slide.name_reduce2}</span></h2>
                        <p className="home__slider-content-data-descripcion">{slide.descs}</p>
                      </>
                    }
                      
                    {
                      (typeSlide === 1) ?
                      <div className='home__slider-content-data-enlace'>
                        <Link to={`${subdominio}/${filial}/programa/${slide.keyp}/${slide.hostp}`}>
                          <button className="home__slider-content-data-descripcion-btn">Mas información <IoIosArrowRoundForward className='home__slider-content-data-descripcion-icon'/> </button>
                        </Link>
                      </div>
                      :
                      <div className='home__slider-content-data-enlace'>
                        <Link to={`${subdominio}/${filial}/programa/${slide.keyp}/${slide.hostp}`}>
                          <button style={{visibility: 'hidden'}}className="home__slider-content-data-descripcion-btn"></button>
                        </Link>
                      </div>
                    }
                  </div>
                </div>
              })}
                
                {/* <div className='home__slider-slide'>
                  <div className='home__slider-content-img'>
                    <img src="./assets/img/galeria/Imagen5.jpg" alt='titulo' className='home__slider-img'/>
                  </div>
                  <div className="home__slider-content-data">
                    <h2 className="home__slider-content-data-titulo">Bienvenido a iesap cede central</h2>
                    <p className="home__slider-content-data-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, culpa!</p>
                    <div className='home__slider-content-data-enlace'>
                      <a href='#' target="_black">
                        <button className="home__slider-content-data-descripcion-btn">Inscribéte</button>
                      </a>
                    </div>
                 </div>
                </div> */}
              </Slider>
              <div className="home__slider-content-previous">
                <button onClick={previous} className='home__slider-content-previous-next-botton'>
                  <span><FontAwesomeIcon icon={faChevronLeft} className="home__slider-content-previous-next-icon"/></span>
                </button>
              </div>
              <div className="home__slider-content-next">
                <button onClick={next} className='home__slider-content-previous-next-botton'>
                  <span><FontAwesomeIcon icon={faChevronRight} className="home__slider-content-previous-next-icon"/></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default SliderBanner;