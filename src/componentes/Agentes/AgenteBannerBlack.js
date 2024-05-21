import React from 'react';
import './../../css/sass/Agentes/_agenteBannerBlack.scss';

const AgenteBannerBlack = ({databanner}) => {

  return ( 
    <>
      <section className='agente__banner_black'>
      <div className="container_xl">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>

            <div className='agente__banner-content-img'>
              <img src={databanner.url_Img} alt={databanner.title_Img} title={databanner.title_Img} className='agente__banner-img'/>
            </div>

            <div className="nosotros__banner-content">
              <h3 className='nosotros__banner-content-titulo'> {databanner.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
   );
}
 
export default AgenteBannerBlack;