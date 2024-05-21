import React, {useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Esqueleton from '../Esqueleton/Esqueleton';
import Titulo from './../../componentes/Agentes/Titulo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Convenios = ({codfilial}) => {
  // console.log(codfilial)
  const url_base = process.env.REACT_APP_BASEURL;
  const [dataConvenios, cargarDataConvenios] = useState([]);
  const [isloading, setisloading] = useState(true);
  let [numSlider, setNumSlider] = useState('');
  
  useEffect(() => {
    const obtenerConvenios = async () => {
      try {
        const resp = await axios.get(`${url_base}api/webhome/conv_web`, {
          params:{
            keyfl: codfilial
          }
        });
        if (resp.status === 200) {
          setTimeout(() => {
            cargarDataConvenios(resp.data);
            setisloading(false);
          }, 200);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    obtenerConvenios();
  }, [codfilial, url_base]);

  useEffect(() => {
    // let numSlider;
    if (codfilial === "96a3be3cf272e017046d1b2674a52bd3") {
      setNumSlider(3);
    }else if(codfilial === "a2ef406e2c2351e0b9e80029c909242d"){
      setNumSlider(5);
    }
  }, [codfilial]);

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 700,
    slidesToShow: numSlider,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: numSlider,
          slidesToScroll: numSlider,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  const customeSlider  = useRef();

  const previous = () => {
    customeSlider.current.slickPrev();
  }

  const next = () => {
    customeSlider.current.slickNext();
  }

  // console.log(isloading)
  return ( 
    <>
      {
        (isloading === true)?
          <Esqueleton type={1} heigth={250} color="dark"/>
        :
        (dataConvenios.length > 1) && 
        <section className="home__convenios">
          <div className="container">
            <div className="grid">
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <Titulo titulo="Convenios" />
              </div>
            </div>
            <div className="grid">
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                <div className="home__convenios-sliders">
                  <Slider {...settings} ref={customeSlider} className="home__convenios-slider-content">
                    {
                      dataConvenios.map((convenio, i) => {
                        return <div key={i}className='home__convenios-slider'>
                          <img src={`${url_base}package/web_iesap/img/home/convenios/${convenio.porta}`} className='home__convenios-slider-img' alt="" />
                        </div>
                      })
                    }
                  </Slider>
                  <div className='home__convenios-sliders-previus'>
                    <button onClick={previous} className='home__convenios-sliders-previus-btn'>
                      <FontAwesomeIcon icon={faChevronLeft} className='home__convenios-sliders-previus-icon'/>
                    </button>
                  </div>
                  <div className='home__convenios-sliders-next'>
                    <button onClick={next} className='home__convenios-sliders-previus-btn'>
                      <FontAwesomeIcon icon={faChevronRight} className='home__convenios-sliders-previus-icon'/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
}
 
export default Convenios;