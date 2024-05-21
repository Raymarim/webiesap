import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BannerPrograma from './BannerPrograma';
import Seo from '../Seo';
import AcercaDe from './AcercaDe';
import Servicio from './Servicio';
import Beneficios from './Beneficios';
import Requisitos from './Requisitos';
import Inversion from './Inversion';
import Horarios from './Horarios';
import LugarTrabajo from './LugarTrabajo';
import MallaCurricular from './MallaCurricular';
import styled from 'styled-components';
import './../../css/sass/programa/_programa.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';

const Programa = ({codfilial,filial, tabName}) => {
  const{keyp} = useParams();
  
  const[nombrePrograma, cargarNombrePrograma] = useState('');
  const url_base = process.env.REACT_APP_BASEURL;
  
  useEffect(() => {

    const getNombrePrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/prodetail`,
        {
          params:{
            keyf: codfilial,
            keyp: keyp
          }
        });
        if(resp.status === 200){
          setTimeout(() => {
            cargarNombrePrograma(resp.data);
          }, 200);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getNombrePrograma();

    
  }, [codfilial, url_base, keyp]);

  useEffect(() => {
    const onscrollPrograma = () => {
      let arr_card_programa = document.querySelectorAll('.programa__descripcion-card');

      let height_window = Math.round(window.pageYOffset);

      for (let i = 0; i < arr_card_programa.length; i++) {
        const heig_element = Math.round(arr_card_programa[i].offsetTop);
        if(heig_element - 400 < height_window){
          let element = arr_card_programa[i];
          element.style.opacity = 1;
          element.classList.add('card__animate-top');
        }
        
      }
    }

    window.addEventListener('scroll', onscrollPrograma);

    return() =>{
      window.removeEventListener('scroll', onscrollPrograma);
    }
  })

  return ( 
    <>
      {
        (nombrePrograma.namep) &&
        <Seo 
          title={`${nombrePrograma.namep} - Iesap - ${tabName}`} 
          description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
          name="Instituto alas peruanas"
          type="article"
        />
      }
      <BannerPrograma codfilial={codfilial} filial={filial} keyp={keyp}/>

      <section className='programa__descripcion'>
        <div className="container">
          <div className="grid">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-8 grid-res-lg-8 grid-res-xl-8'>
              <div className='grid'>
                <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-5 grid-res-lg-5 grid-res-xl-5'>
                  <Enlace href='https://erp.iesap.edu.pe/pre-inscripcion' target="_blank">
                    <div className='programa__descripcion-matriculate'>
                      <h4 className='programa__descripcion-titulo'><FontAwesomeIcon icon={faHandPointRight}/> Matricúlate ahora </h4>
                    </div>
                  </Enlace>
                </div>
              </div>
              
              <AcercaDe codfilial={codfilial} filial={filial} keyp={keyp}/>
              <Servicio codfilial={codfilial} filial={filial} keyp={keyp}/>
              <Beneficios codfilial={codfilial} filial={filial} keyp={keyp}/>
              <Requisitos codfilial={codfilial} filial={filial} keyp={keyp}/>
              <Inversion codfilial={codfilial} filial={filial} keyp={keyp}/>
              <LugarTrabajo codfilial={codfilial} filial={filial} keyp={keyp}/>
              <Horarios codfilial={codfilial} filial={filial} keyp={keyp}/>
              
            </div>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-4 grid-res-lg-4 grid-res-xl-4'>
              {/* <h1>formulario</h1> */}
            </div>
          </div>
          <div className='grid'>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
              <MallaCurricular keyp={keyp}/>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

const Enlace = styled.a`
  max-width: 250px;
`;

export default Programa;