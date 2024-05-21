import React from 'react'

const DetalleNoticiaImagen = ({ url_base, picture }) => {
  // console.log(picture);

  return ( 
    <>
      <div className='detalle__noticia-container'>
        <div className='detalle__noticia-content-img'>
          <img src={`${url_base}package/web_iesap/img/actualidad/noticias/detail/${picture}`} alt="" className='detalle__noticia-img'/>
        </div>
      </div>
    </>
   );
}
 
export default DetalleNoticiaImagen;