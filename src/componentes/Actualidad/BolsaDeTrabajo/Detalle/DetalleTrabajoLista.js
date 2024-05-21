import React, {useState,useEffect} from "react";
import { AiOutlineCheck } from "react-icons/ai";
import axios from "axios";

export default function DetalleTrabajoLista({url_base, keydetEmp}){

  const [ dataDetalleListaEmp, setdataDetalleListaEmp ] = useState([]);

  useEffect(() => {
    const getDataDetaLisEmp = async () => {
      try {
        const resp = await axios.get(`${url_base}api/webempleo/detEmpList`,
        {
          params : {
            keydem: keydetEmp
          }
        });
        if (resp.status === 200) {
          setTimeout(() => {
            setdataDetalleListaEmp(resp.data);
          }, 2000)
        }
      } catch (error) {
        console.log(`${error}`)
      }
    }

    getDataDetaLisEmp();

  }, [ keydetEmp, url_base ])

  return(
    <>
      <ul className="trabajoDetail__description_body_beneficios_list">
        {
          (dataDetalleListaEmp) &&
          dataDetalleListaEmp.map((item)=> {
            return(
              <li key={item.keyditem}className="trabajoDetail__description_body_beneficios_list_item">
                <AiOutlineCheck className="trabajoDetail__description_body_beneficios_list_item_icon"/>
                <span className="trabajoDetail__description_body_beneficios_list_item_text">{item.item}</span>  
              </li>
            )
          })
        }
      </ul>
    </>
  )
}