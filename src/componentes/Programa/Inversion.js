import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';

const Inversion = ({codfilial,keyp,filial}) => {

  const url_base = process.env.REACT_APP_BASEURL;
  const [montoRegular, setMontoRegular] = useState([]);
  const [montoPromocional, setMontoPromocional] = useState([]);
  // const [montoDescuento, setMontoDescuento] = useState([]);
  // const [loading, setLoading] = useState(false);
 
  useEffect(() =>{
    // setLoading(true);

    const controller = new AbortController();

    const getMontosPrograma= async () => {
      try {
        const resp = await axios.get(`${url_base}api/webpro/promon`,
        {
          params:{
            keyf: codfilial,
            keyp: keyp
          }
        },
        {
          signal: controller.signal
        });
        
        if(resp.status === 200){
          // console.log(resp.data)
          setMontoRegular(resp.data[0]);
          setMontoPromocional(resp.data[1]);
          // setMontoDescuento(resp.data[1]);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };
    getMontosPrograma();
    // setTimeout(() =>{
    //   // setLoading(false);
    // },3000)
  },[codfilial,keyp,url_base]); 

  return ( 
    <div className="grid">
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        <div className="programa__inversion programa__descripcion-card">
          <div className='programa__inversion-content-titulo'>
            <h4 className=' programa__descripcion-card-titulo'>Inversión</h4>
          </div>
          <div className='programa__inversion-content-table'>
            {
              (()=>{
                if (codfilial === '96a3be3cf272e017046d1b2674a52bd3' || codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce' || codfilial === '7d0665438e81d8eceb98c1e31fca80c1') {
                  return(
                  <table className='programa__inversion-table'>
                    <tbody className='programa__inversion-table-body'>
                      <tr className='programa__inversion-table-span-titulo'>
                        <td colSpan={3}> Monto regular</td>
                      </tr>
                      <tr className='programa__inversion-table-span-subtitulo'>
                        <td className='programa__inversion-table-td-matricula'>Mátricula</td>
                        <td className='programa__inversion-table-td-matricula'>Cuotas</td>
                        <td>Costo por ciclo</td>
                      </tr>
                      <tr>
                        {
                          montoRegular ?
                          (
                            <>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.mat}</td>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoRegular.nuc} cuotas de ${montoRegular.cou}`}</td>
                              <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.cci}</td>
                            </>
                          )
                          :
                          null
                        }
                      </tr>
                      <tr className='programa__inversion-table-description'>
                        <td colSpan={3}> O puede acceder a nuestra tarifa promocional (previa consulta de disponibilidad).</td>
                      </tr>
                      {
                        (montoPromocional)?
                        (
                          <>
                            <tr className='programa__inversion-table-span-titulo'>
                              <td colSpan={3}> Monto promocional</td>
                            </tr>
                            <tr className='programa__inversion-table-span-subtitulo'>
                              <td className='programa__inversion-table-td-matricula'>Mátricula</td>
                              <td className='programa__inversion-table-td-matricula'>Cuotas</td>
                              <td>Costo por ciclo</td>
                            </tr>
                            <tr>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoPromocional.mat}</td>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoPromocional.nuc} cuotas de ${montoPromocional.cou}`}
                              </td>
                              <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoPromocional.cci}
                              </td>
                            </tr>
                          </>
                        )
                        :
                        null
                      }

                    </tbody>
                  </table>
                  )
                }else if(codfilial === 'a2ef406e2c2351e0b9e80029c909242d'){
                  return(
                  <table className='programa__inversion-table'>
                    <tbody className='programa__inversion-table-body'>
                      {
                        (montoRegular)?
                        (
                          <>
                            <tr className='programa__inversion-table-span-titulo'>
                              <td colSpan={3}> Monto regular : Período 2024-I</td>
                            </tr>
                            {/* <tr>
                              <td className='programa__inversion-table-td-matricula'>Matricula</td>
                              <td className='programa__inversion-table-td-matricula'>I y II Semestre
                              </td>
                              <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/> .110
                              </td>
                            </tr> */}
                            <tr>
                              <td className='programa__inversion-table-td-matricula'>Matricula</td>
                              <td className='programa__inversion-table-td-matricula'>I - VI Semestre
                              </td>
                              <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/> .110
                              </td>
                            </tr>
                            <tr className='programa__inversion-table-span-subtitulo'>
                            
                              <td className='programa__inversion-table-td-matricula'>Costo por ciclo</td>
                              <td colSpan={2}>Cuotas</td>
                            </tr>
                            <tr>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.cci}
                              </td>
                              <td colSpan={2}><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoRegular.nuc} cuotas de ${montoRegular.cou}`}
                              </td>
                            </tr>
                          </>
                        )
                        :
                        null
                      }

                      {/* {
                        (montoDescuento)?
                        (
                          <>
                            <tr className='programa__inversion-table-span-titulo'>
                              <td colSpan={3}> Monto por descuento (15%)</td>
                            </tr>
                            <tr className='programa__inversion-table-span-subtitulo'>
                              <td className='programa__inversion-table-td-matricula'>Cuota</td>
                              <td colSpan={2} style={{borderRight: "0"}}className='programa__inversion-table-td-matricula'>Costo por ciclo</td>
                            </tr>
                            <tr>
                              <td className='programa__inversion-table-td-matricula'>1 solo pago</td>
                              <td colSpan={2} style={{borderRight: "0"}}className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoDescuento.cci}
                              </td>
                            </tr>
                          </>
                        )
                        :
                        null
                      } */}
                    </tbody>
                  </table>
                  )
                }else if(codfilial === '751d31dd6b56b26b29dac2c0e1839e34'){
                  return(
                    <table className='programa__inversion-table'>
                    <tbody className='programa__inversion-table-body'>
                      <tr className='programa__inversion-table-span-titulo'>
                        <td colSpan={3}> Monto regular</td>
                      </tr>
                      <tr className='programa__inversion-table-span-subtitulo'>
                        <td width="25%" className='programa__inversion-table-td-matricula'>Mátricula</td>
                        <td width="25%" className='programa__inversion-table-td-matricula'>Cuota</td>
                        <td>15% de descuento antes de F.v </td>
                      </tr>
                      <tr>
                        {
                          montoRegular ?
                          (
                            <>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.mat}</td>
                              <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoRegular.cou}`}</td>
                              <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.cci}</td>
                            </>
                          )
                          :
                          null
                        }
                      </tr>

                    </tbody>
                  </table>
                  )
                }
              })()
              // (codfilial === '96a3be3cf272e017046d1b2674a52bd3' || codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce' || codfilial === '7d0665438e81d8eceb98c1e31fca80c1' || codfilial === '751d31dd6b56b26b29dac2c0e1839e34')?
              // <table className='programa__inversion-table'>
              //   <tbody className='programa__inversion-table-body'>
              //     <tr className='programa__inversion-table-span-titulo'>
              //       <td colSpan={3}> Monto regular</td>
              //     </tr>
              //     <tr className='programa__inversion-table-span-subtitulo'>
              //       <td className='programa__inversion-table-td-matricula'>Mátricula</td>
              //       <td className='programa__inversion-table-td-matricula'>Cuotas</td>
              //       <td>Costo por ciclo</td>
              //     </tr>
              //     <tr>
              //       {
              //         montoRegular ?
              //         (
              //           <>
              //             <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.mat}</td>
              //             <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoRegular.nuc} cuotas de ${montoRegular.cou}`}</td>
              //             <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.cci}</td>
              //           </>
              //         )
              //         :
              //         null
              //       }
              //     </tr>
              //     <tr className='programa__inversion-table-description'>
              //       <td colSpan={3}> O puede acceder a nuestra tarifa promocional (previa consulta de disponibilidad).</td>
              //     </tr>
              //     {
              //       (montoPromocional)?
              //       (
              //         <>
              //           <tr className='programa__inversion-table-span-titulo'>
              //             <td colSpan={3}> Monto promocional</td>
              //           </tr>
              //           <tr className='programa__inversion-table-span-subtitulo'>
              //             <td className='programa__inversion-table-td-matricula'>Mátricula</td>
              //             <td className='programa__inversion-table-td-matricula'>Cuotas</td>
              //             <td>Costo por ciclo</td>
              //           </tr>
              //           <tr>
              //             <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoPromocional.mat}</td>
              //             <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoPromocional.nuc} cuotas de ${montoPromocional.cou}`}
              //             </td>
              //             <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoPromocional.cci}
              //             </td>
              //           </tr>
              //         </>
              //       )
              //       :
              //       null
              //     }

              //   </tbody>
              // </table>
              // :
              // <table className='programa__inversion-table'>
              //   <tbody className='programa__inversion-table-body'>
              //     {
              //       (montoRegular)?
              //       (
              //         <>
              //           <tr className='programa__inversion-table-span-titulo'>
              //             <td colSpan={3}> Monto regular : Período 2023-I</td>
              //           </tr>
              //           <tr>
              //             <td className='programa__inversion-table-td-matricula'>Matricula</td>
              //             <td className='programa__inversion-table-td-matricula'>I y II Semestre
              //             </td>
              //             <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/> .90
              //             </td>
              //           </tr>
              //           <tr>
              //             <td className='programa__inversion-table-td-matricula'>Matricula</td>
              //             <td className='programa__inversion-table-td-matricula'>III - VI Semestre
              //             </td>
              //             <td><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/> .100
              //             </td>
              //           </tr>
              //           <tr className='programa__inversion-table-span-subtitulo'>
                         
              //             <td className='programa__inversion-table-td-matricula'>Costo por ciclo</td>
              //             <td colSpan={2}>Cuotas</td>
              //           </tr>
              //           <tr>
              //             <td className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoRegular.cci}
              //             </td>
              //             <td colSpan={2}><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{`${montoRegular.nuc} cuotas de ${montoRegular.cou}`}
              //             </td>
              //           </tr>
              //         </>
              //       )
              //       :
              //       null
              //     }

              //     {/* {
              //       (montoDescuento)?
              //       (
              //         <>
              //           <tr className='programa__inversion-table-span-titulo'>
              //             <td colSpan={3}> Monto por descuento (15%)</td>
              //           </tr>
              //           <tr className='programa__inversion-table-span-subtitulo'>
              //             <td className='programa__inversion-table-td-matricula'>Cuota</td>
              //             <td colSpan={2} style={{borderRight: "0"}}className='programa__inversion-table-td-matricula'>Costo por ciclo</td>
              //           </tr>
              //           <tr>
              //             <td className='programa__inversion-table-td-matricula'>1 solo pago</td>
              //             <td colSpan={2} style={{borderRight: "0"}}className='programa__inversion-table-td-matricula'><FontAwesomeIcon icon={faMoneyBill1Wave} style={{fontSize: '15px'}}/>.{montoDescuento.cci}
              //             </td>
              //           </tr>
              //         </>
              //       )
              //       :
              //       null
              //     } */}
              //   </tbody>
              // </table>
            }
          </div>    
        </div>
      </div>
    </div>
  );
}
 
export default Inversion;