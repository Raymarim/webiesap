import React, { useState } from 'react';
import '../css/sass/_social.scss';
import Formulario from './Admision/Formulario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowDown, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp , faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { TbHandClick } from "react-icons/tb";
// import Confetti from 'react-dom-confetti';
// import { Confetti as Confettico} from "@phosphor-icons/react";

const Social = ({dataFilial, subdominio, redesSociales, keyfe, dataProgramas, whua}) => {
  
  // const [isExploding, setIsExploding] = useState(false);

  const handleBtnUp = () => {
    window.scrollTo({
      top: 0,
      behavior : "smooth"
    })
  }

  // const config = {
  //   angle: '280',
  //   spread: '360',
  //   startVelocity: 30,
  //   elementCount: 190,
  //   dragFriction: 0.12,
  //   duration: 40000,
  //   stagger: 3,
  //   width: '12px',
  //   height: '12px',
  //   perspective: '500px',
  //   colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  // }

  return ( 
    <>
      <article className='social_phone' id='social_phone'>
        <span className='social_phone-content-icon'><FontAwesomeIcon icon={faPhone} className='social_phone-icon'/></span><span className='social_phone-phone'> {dataFilial.tel}</span>
      </article>

      <article className='social_whasatpp' id='social_whasatpp'>
        <a href={`https://api.whatsapp.com/send?phone=51${dataFilial.whua}&text=Escribenos%20para%20recibir%20informacion.`} target="_black" className="social_whasatpp-content-icon"><FontAwesomeIcon icon={faWhatsapp} className="social_whasatpp-icon"/></a>
      </article>

      <article className='social_up' id='social_up'>
        <button className='social_up-btn' onClick={handleBtnUp}><FontAwesomeIcon icon={faArrowDown} className='social_up-icon'/></button>
      </article>

      <article className='social_filial' id='social_filial'>
        <div className='social_filial-plus'>
          <span className='social_filial-plus-content-icon'></span><span className='social_filial-plus-filial'></span>
        </div>

        <a href={`${subdominio}/arequipa/`} target="_black" className='social_filial-item'>
          <span className='social_filial-content-icon'><FontAwesomeIcon icon={faGraduationCap} className="social_filial-icon"/></span><span className='social_filial-name'> F. Arequipa</span >
        </a>
        <a href={`${subdominio}/piura/`} target="_black" className='social_filial-item'>
          <span className='social_filial-content-icon'><FontAwesomeIcon icon={faGraduationCap} className="social_filial-icon"/></span><span className='social_filial-name'> Sede Principal Piura</span >
        </a>
        <a href={`${subdominio}/chiclayo/`} target="_black" className='social_filial-item'>
          <span className='social_filial-content-icon'><FontAwesomeIcon icon={faGraduationCap} className="social_filial-icon"/></span><span className='social_filial-name'> F. Chiclayo</span >
        </a>
      </article>

      <article className="social_redes">
        <a href={`${redesSociales.fbk}`} target='_black' className='social_redes-item'>
          <span className='social_redes-item-content-icon'><FontAwesomeIcon icon={faFacebook} className='social_redes-item-icon'/></span><span className='social_redes-item-name'> Facebook</span>
        </a>
        <a href={`${redesSociales.ist}`} target='_black' className='social_redes-item'>
          <span className='social_redes-item-content-icon'><FontAwesomeIcon icon={faInstagram} className='social_redes-item-icon'/></span><span className='social_redes-item-name'> Instagran</span>
        </a>
        <a href={`${redesSociales.tik}`} target='_black' className='social_redes-item'>
          <span className='social_redes-item-content-icon'><FontAwesomeIcon icon={faTiktok} className='social_redes-item-icon'/></span><span className='social_redes-item-name'> Tiktok</span>
        </a>
      </article>

      <article className='social__admision' id='social__admision'>
        
        <div className='social__admision-formulario'>
          <div className='social__admision-content-title'>
            <h4 className='social__admision-title'>Informes aquí</h4>
            <TbHandClick className='social__admision-icon'/>
          </div>
          <Formulario dataProgramas={dataProgramas} keyfe={keyfe} whua={whua} />
        </div>
      </article>

      {/* <article className='social__conffeti' id='social__conffeti'>
        <div className='social__conffeti_btn' onClick={() => setIsExploding(!isExploding)}>
          <Confettico size={32} className='social__conffeti_btn_icon'/>
          <Confetti active={isExploding} config={config}/>
        </div>
      </article> */}

    </>
  );
}

export default Social;