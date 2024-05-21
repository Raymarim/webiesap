import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import {useAnimate} from './../../Hooks/useAnimate';
// import {Animate} from '../Animate.js';
import Titulo from "./../Agentes/Titulo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward} from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { useInView } from 'react-intersection-observer';

const Directivos = ({codfilial}) => {
  const url_base = process.env.REACT_APP_BASEURL;
  const[dataDirectivos, cargarDataDirectivos] = useState([]);
  // const [isloading, cambiarisloading] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0,
  });


  useEffect(() => {
    const controller = new AbortController();
    
    const obtenerdata = async () =>{
      try {
        const resp = await axios.get(`${url_base}api/webus/dir`,
        {
          params:{
            keyus: codfilial
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          cargarDataDirectivos(resp.data);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }

    if (inView) {
      obtenerdata();
    }

    return() => {
      controller.abort();
    }
  }, [codfilial, url_base, inView]);    

  useEffect(() => {
    const onscroll = () =>{
      const card_arr = document.querySelectorAll('.nosotros__directivos-card');
      let scrollTop = Math.round(window.pageYOffset);
      
      for (let i = 0; i < card_arr.length; i++) {
        const alturadiv = Math.round(card_arr[i].offsetTop);
        if(alturadiv - 300 < scrollTop){
          const element = card_arr[i];
          element.style.opacity = 1;
          element.classList.add('card__animate-top');
        }
      }
    }

    // Animate('nosotros__directivos-card',400,'card__animate-top');

    window.addEventListener('scroll', onscroll);
    return() =>{
      window.removeEventListener('scroll', onscroll);
    }
  });

  return ( 
    <section className='nosotros__directivos' id='directivos' ref={ref}>
      <div className="container">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <Titulo titulo="Personal Académico, Administrativo y de apoyo" />
          </div>
        </div>
      </div>
      {
        (dataDirectivos) &&
          <div className="container">
            <div className='grid grid-gap-xs'>
                {
                  dataDirectivos.map((dire,i)=>{
                    return <article key={i}className="nosotros__directivos-card grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-4 grid-res-xl-4">
                      <div className='nosotros__directivos-card-content-img'>
                        <img loading="lazy" src={`${url_base}package/web_iesap/img/nosotros/directivos/${dire.picture}`} alt="" className='nosotros__directivos-card-img'/>
                      </div>
                      <div className='nosotros__directivos-card-descripcion'>
                        <h4 className='nosotros__directivos-card-datos'><FontAwesomeIcon icon={faUserCircle}/> {dire.dir}</h4>
                        <p className='nosotros__directivos-card-cargo'><FontAwesomeIcon icon={faAward}/> {dire.car}</p>
                      </div>
                    </article>
                  })
                }
            </div>
          </div>
      }
    </section>
   );
}
 
export default Directivos;