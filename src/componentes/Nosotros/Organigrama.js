import React, {useState, useEffect} from 'react';
import Titulo from '../Agentes/Titulo';

const Organigrama = ({codfilial}) => {

  const [ organigrama, setOrganigrama] = useState({});

  useEffect(() =>{
    if(codfilial === '96a3be3cf272e017046d1b2674a52bd3'){
      setOrganigrama({
        url_organigrama : './../assets/img/nosotros/organigrama/c6991505ebf0bc463fe6b55824bbb00e7803c835.jpg'
      })
    }else if(codfilial === 'a2ef406e2c2351e0b9e80029c909242d'){
      setOrganigrama({
        url_organigrama : './../assets/img/nosotros/organigrama/28f8da20ad2e056fa53c0f069452e852f5de8682.jpg'
      })
    }else if(codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce'){
      setOrganigrama({
        url_organigrama : './../assets/img/nosotros/organigrama/5207ea1b942c1420b00b8aafe63a585591aaa62a.jpg'
      })
    }else if(codfilial === '7d0665438e81d8eceb98c1e31fca80c1'){
      setOrganigrama({
        url_organigrama : './../assets/img/nosotros/organigrama/8a9c49a5403b700ba2d43545f4ad422f4686c504.jpg'
      })
    }else if(codfilial === '751d31dd6b56b26b29dac2c0e1839e34'){
      setOrganigrama({
        url_organigrama : './../assets/img/nosotros/organigrama/891da06d3e0f81c50acbf293339b8f6510163bea.png'
      })
    }
  }, [codfilial])

  return ( 
    <>
      <section className='nosotros__organigrama' id='organigrama'>
        <div className="container">
          <div className="grid">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
              {
                (organigrama) && 
                <div className='nosotros__organigrama-content'>
                  <Titulo titulo="Organigrama" /> 
                    <div className='nosotros__organigrama-content-img'>
                      <img src={`${organigrama.url_organigrama}`} className='nosotros__organigrama-img' alt="Organigrama" />
                    </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
   );
}
 
export default Organigrama;