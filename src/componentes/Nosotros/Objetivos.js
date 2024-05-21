import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCheck} from '@fortawesome/free-solid-svg-icons';

const Objetivos = () => {

  useEffect(() => {
    const onscroll = () =>{
      const card_arr = document.querySelectorAll('.nosotros__objetivos-card');
      let scrollTop = Math.round(window.pageYOffset);
      
      for (let i = 0; i < card_arr.length; i++) {
        
        const alturadiv = Math.round(card_arr[i].offsetTop);
        if(alturadiv - 400 < scrollTop){
          const element = card_arr[i];
          element.style.opacity = 1;
          if(i === 0 || i === 2){
            element.classList.add('card__animate-left');
          }else if(i === 1 || i === 3){
            element.classList.add('card__animate-rigth');
          }
        }
      }
    }

    window.addEventListener('scroll', onscroll);
    return() =>{
      window.removeEventListener('scroll', onscroll);
    }
  });

  return ( 
    <section className='nosotros__content-objetivos' id='misionVision'>
      <div className="container">
        <div className="grid-gap-xs grid-auto-xl">
          <div className='nosotros__objetivos-card'>
            <h4 className='nosotros__objetivos-card-titulo'>Misión</h4>
            <p className='nosotros__objetivos-card-descripcion'>Brindamos educación de calidad y excelencia, en la formación de profesionales técnicos, fomentando una convivencia basada en
            valores, ética profesional y conciencia ambiental, de acuerdo a las necesidades del campo laboral, con las nuevas tendencias tecnológicas, orientados al servicio de la sociedad y desarrollo del país.</p>
            <div className='nosotros__objetivos-card-content-icon'>
              <FontAwesomeIcon icon={faGraduationCap} className='nosotros__objetivos-card-icon'/>
            </div>
          </div>
          <div className='nosotros__objetivos-card'>
            <h4 className='nosotros__objetivos-card-titulo'>Visión</h4>
            <p className='nosotros__objetivos-card-descripcion'>Al 2030, ser el Instituto de Educación Superior Privado acreditado y líder a nivel nacional, comprometido con calidad de servicio
            y excelencia académica, acorde con los avances de la tecnología, que contribuya al desarrollo sostenible del país.</p>
            <div className='nosotros__objetivos-card-content-icon'>
              <FontAwesomeIcon icon={faGraduationCap} className='nosotros__objetivos-card-icon'/>
            </div>
          </div>
          <div className='nosotros__objetivos-card'>
            <h4 className='nosotros__objetivos-card-titulo'>Objetivos</h4>
            <p className='nosotros__objetivos-card-descripcion'>Contribuir a la permanente actualización profesional de personal calificado al servicio del país. Promover e impulsar el desarrollo de la ciencia y tecnología, propiciando la investigación tecnológica y la proyección a la comunidad.</p>
            <div className='nosotros__objetivos-card-content-icon'>
              <FontAwesomeIcon icon={faGraduationCap} className='nosotros__objetivos-card-icon'/>
            </div>
          </div>
          <div className='nosotros__objetivos-card'>
            <h4 className='nosotros__objetivos-card-titulo'>Valores</h4>
            <ul className='nosotros__objetivos-card-lista'>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Respeto</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Solidaridad</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Honestidad</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Honradez</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Liderazgo</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Responsabilidad</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Libertad</span>  
              </li>
              <li className='nosotros__objetivos-card-lista-childrem'>
                <span className='nosotros__objetivos-card-lista-text'><FontAwesomeIcon icon={faCheck}/> Innovación</span>  
              </li>
            </ul>
            <div className='nosotros__objetivos-card-content-icon'>
              <FontAwesomeIcon icon={faGraduationCap} className='nosotros__objetivos-card-icon'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Objetivos;