import React, {useEffect, useState} from 'react';
import Seo from '../Seo';
import AgenteBanner from '../Agentes/AgenteBanner';
// import Banner from './Banner';
import Introduccion from './Introduccion';
import Historia from './Historia';
import Objetivos from './Objetivos';
import Directivos from './Directivos';
import Organigrama from './Organigrama';
import '../../css/sass/Nosotros/_nosotros.scss'

const Nosotros = ({codfilial, filial, tabName}) => {
  
  const [databanner, setDataBanner] = useState({});

  useEffect(() => {

    if(codfilial === '96a3be3cf272e017046d1b2674a52bd3'){
      setDataBanner({
        url_Img : './../assets/img/nosotros/portada/061c26ab506672c54b0080e4a2f05f1f12b0b5d2.jpg',
        title_Img: 'Nosotros',
        title : 'Nosotros'
      })
    }else if(codfilial === 'a2ef406e2c2351e0b9e80029c909242d'){
      setDataBanner({
        url_Img : './../assets/img/nosotros/portada/308057994_5688772404523779_1492527901438878682_n.jpg',
        title_Img: 'Nosotros',
        title : 'Nosotros'
      })
    }else if(codfilial === '7d0665438e81d8eceb98c1e31fca80c1'){
      setDataBanner({
        url_Img : './../assets/img/nosotros/portada/96cec55a62c3b30184585ff617ae8ed4b5d4c49a.jpg',
        title_Img: 'Nosotros Iesap Chiclayo',
        title : 'Nosotros'
      })
    }else if(codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce'){
      setDataBanner({
        url_Img : './../assets/img/nosotros/portada/685060e69c7da1cbb9e1e99074a39332a1a8aa38.jpg',
        title_Img: 'Nosotros Iesap Arequipa',
        title : 'Nosotros'
      })
    }else if(codfilial === '751d31dd6b56b26b29dac2c0e1839e34'){
      setDataBanner({
        url_Img : './../assets/img/nosotros/portada/910d930b3449809867606825a7343cac4246c6c3.jpg',
        title_Img: 'Nosotros Iesap Ica',
        title : 'Nosotros'
      })
    }

  }, [codfilial])

  useEffect(() => {

    const onscrollnosotros = () => {

      const arr_card_nosotros = document.querySelectorAll('.nosotros__card-animate');

      const heigth_window = Math.round(window.pageYOffset);
  
      for (let card = 0; card < arr_card_nosotros.length; card++) {
        const element = arr_card_nosotros[card];
  
        const heigth_element = Math.round(element.offsetTop);

        if (heigth_element - 300 < heigth_window) {
          element.style.opacity = 1;
          element.classList.add('card__animate-rigth');
        }
      }
    }

    window.addEventListener('scroll', onscrollnosotros);

    return() =>{
      window.removeEventListener('scroll', onscrollnosotros);
    }
  }, [codfilial])

  return ( 
    <>
      <Seo 
        title={`Nosotros | Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />
      <AgenteBanner databanner={databanner}/>
      {/* <Banner codfilial={codfilial}/> */}
      <Introduccion codfilial={codfilial}/> 
      <Historia codfilial={codfilial}/>
      <Objetivos/>
      <Directivos codfilial={codfilial}/>
      <Organigrama codfilial={codfilial}/>
    </>
   );
}
 
export default Nosotros;