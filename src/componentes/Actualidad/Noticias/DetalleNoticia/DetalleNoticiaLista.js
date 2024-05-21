import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { GiCheckMark } from "react-icons/gi";

const DetalleNoticiaLista = ({coddetalle}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [listaDetalleNoticia, setListaDetalleNoticia] = useState([]);

  useEffect(() => {
    const getDetalleNoticiaLista = async () => {
      try {
        const resp = await axios.get(`${url_base}api/act/webnot/not_det_lis`,
        {
          params:{
            keyd: coddetalle
          }
        });
        if(resp.status === 200){
          setListaDetalleNoticia(resp.data);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getDetalleNoticiaLista();
  }, [url_base, coddetalle]);

  return ( 
    <>
      {
        (listaDetalleNoticia) && 
        <>
          <div className='detalle__noticia-content-lista'>
            <ul className='detalle__noticia-lista'>
              {
                listaDetalleNoticia.map((item) => {
                  return <li key={item.keynd} className='detalle__noticia-lista-item'><GiCheckMark/> {item.item}</li>
                })
              }
            </ul>
          </div>
        </>
      }
    </>
   );
}
 
export default DetalleNoticiaLista;