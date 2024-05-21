import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BsFolder2Open, BsFileEarmarkPdf, BsEye } from "react-icons/bs";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdRunningWithErrors } from "react-icons/md";
import Esqueleton from './../../Esqueleton/Esqueleton';

const Documentacion = ({ codfilial }) => {
  const url_base = process.env.REACT_APP_BASEURL;

  const [ documentos, setDocumentos ] = useState([]);
  const [ isloading, setIsLoading] = useState(true);
  const [ docAcademicos, setDocAcademicos ] = useState([]);

  useEffect(() =>{
    const getTransparencia = async () => {
      try {
        const resp = await axios.get(`${url_base}api/inst/webtransp/doc`,
        {
          params:{
            keyf: codfilial,
            keyTip: 'MQ--'
          }
        });
        if(resp.status === 200){
          setTimeout(() => {
            setDocumentos(resp.data);
            setIsLoading(false);
          }, 200);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };

    const getDocInstitucional = async () => {
      try {
        const resp = await axios.get(`${url_base}api/inst/webtransp/doc`,
        {
          params:{
            keyf: codfilial,
            keyTip: 'Mg--'
          }
        });
        if(resp.status === 200){
          setTimeout(() => {
            setDocAcademicos(resp.data);
            setIsLoading(false);
          }, 200);
        }
      } catch (error) {
        console.log(`${error}`);
      }
    };

    getTransparencia();
    getDocInstitucional();
  }, [codfilial, url_base]);
  
  // console.log(documentos);
  return ( 
    <>
      <section className='transparencia__documentacion'>
        <div className='container'>
          <div className='grid'>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
              <div className='transparencia__documentacion-container'>
                <div className='transparencia__documentacion-content-title'>
                  <h4 className='transparencia__documentacion-title'><BsFolder2Open/> Documentos de Gestión Institucional</h4>
                </div>
                {
                  (isloading)?
                    <Esqueleton type={1} heigth={350} color="dark"/>
                  :
                    <div className='transparencia__documentacion-list'>
                      <table className='transparencia__documentacion-list-table'>
                        <tbody>
                          
                          <tr className='transparencia__documentacion-list-table-titulo'>
                            <td width={'70%'}><VscFileSubmodule/> Documento</td>
                            <td width={'30%'}><BsEye/> Visualizar</td>
                          </tr>

                          {
                            (documentos)?
                            documentos.map((doc) =>{
                              return <tr key={doc.keyd}>
                                <td>
                                  <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> {doc.named}
                                </td>
                                <td>
                                  <a href={`${doc.file}`} target="_black" className='transparencia__documentacion-list-table-body-download'><BsEye style={{fontSize: '20px'}}/> Vista previa</a>
                                </td>
                              </tr>
                            })
                            :
                            <>
                              <tr className='transparencia__documentacion-list-table-sinresultados'>
                                <td colSpan={2}><MdRunningWithErrors style={{color : 'red'}}/> No se encontraron resultados...</td>
                              </tr>
                            </>
                          }
                          
                          {/* <tr>
                            <td>
                              <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> Manual de Perfil de Puestos
                            </td>
                            <td>
                              <span className='transparencia__documentacion-list-table-body-download'><BsCloudArrowDown style={{fontSize: '20px'}}/> Descargar</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> Manual de Perfil de Puestos
                            </td>
                            <td>
                              <span className='transparencia__documentacion-list-table-body-download'><BsCloudArrowDown style={{fontSize: '20px'}}/> Descargar</span>
                            </td>
                          </tr> */}

                        </tbody>
                      </table>
                    </div>

                }
              </div>
            </div>
          </div>
          
          {/* // */}

          <div className='grid'>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
              <div className='transparencia__documentacion-container'>
                <div className='transparencia__documentacion-content-title'>
                  <h4 className='transparencia__documentacion-title'><BsFolder2Open/> Documentos de Gestión Académica</h4>
                </div>
                {
                  (isloading)?
                    <Esqueleton type={1} heigth={350} color="dark"/>
                  :
                    <div className='transparencia__documentacion-list'>
                      <table className='transparencia__documentacion-list-table'>
                        <tbody>
                          
                          <tr className='transparencia__documentacion-list-table-titulo'>
                            <td width={'70%'}><VscFileSubmodule/> Documento</td>
                            <td width={'30%'}><BsEye/> Visualizar</td>
                          </tr>

                          {
                            (docAcademicos)?
                            docAcademicos.map((doc) =>{
                              return <tr key={doc.keyd}>
                                <td>
                                  <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> {doc.named}
                                </td>
                                <td>
                                  <a href={`${doc.file}`} target="_black" className='transparencia__documentacion-list-table-body-download'><BsEye style={{fontSize: '20px'}}/> Vista previa</a>
                                </td>
                              </tr>
                            })
                            :
                            <>
                              <tr className='transparencia__documentacion-list-table-sinresultados'>
                                <td colSpan={2}><MdRunningWithErrors style={{color : 'red'}}/> No se encontraron resultados...</td>
                              </tr>
                            </>
                          }
                          
                          {/* <tr>
                            <td>
                              <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> Manual de Perfil de Puestos
                            </td>
                            <td>
                              <span className='transparencia__documentacion-list-table-body-download'><BsCloudArrowDown style={{fontSize: '20px'}}/> Descargar</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> Manual de Perfil de Puestos
                            </td>
                            <td>
                              <span className='transparencia__documentacion-list-table-body-download'><BsCloudArrowDown style={{fontSize: '20px'}}/> Descargar</span>
                            </td>
                          </tr> */}

                        </tbody>
                      </table>
                    </div>

                }
              </div>
            </div>
          </div>
          {/* /// */}


          <div className='grid'>
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
              <div className='transparencia__documentacion-container'>
                <div className='transparencia__documentacion-content-title'>
                  <h4 className='transparencia__documentacion-title'><BsFolder2Open/> Resoluciones Directorales</h4>
                </div>
                <div className='transparencia__documentacion-list'>
                  <table className='transparencia__documentacion-list-table'>
                    <tbody>
                      
                      <tr className='transparencia__documentacion-list-table-titulo'>
                        <td width={'70%'}><VscFileSubmodule/> Documento</td>
                        <td width={'30%'}><BsEye/> Visualizar</td>
                      </tr>

                      {
                        
                        <>
                          <tr className='transparencia__documentacion-list-table-sinresultados'>
                            <td colSpan={2}><MdRunningWithErrors style={{color : 'red'}}/> No se encontraron resultados...</td>
                          </tr>
                        </>
                      }
                      
                      {/* <tr>
                        <td>
                          <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> Manual de Perfil de Puestos
                        </td>
                        <td>
                          <span className='transparencia__documentacion-list-table-body-download'><BsCloudArrowDown style={{fontSize: '20px'}}/> Descargar</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <BsFileEarmarkPdf style={{fontSize: '18px', color: 'red'}}/> Manual de Perfil de Puestos
                        </td>
                        <td>
                          <span className='transparencia__documentacion-list-table-body-download'><BsCloudArrowDown style={{fontSize: '20px'}}/> Descargar</span>
                        </td>
                      </tr> */}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}
 
export default Documentacion;