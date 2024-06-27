import React, {useEffect, useState} from 'react';
import { HelmetProvider } from 'react-helmet-async';
import axios from 'axios';
// import Modal from 'react-modal';
// import { AiOutlineCloseCircle, AiOutlineAlignLeft  } from "react-icons/ai";

import './componentes/Grilla';
// import Grilla from './componentes/Grilla';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './componentes/Header';
import Inicio from './componentes/Home/Inicio';
import Nosotros from './componentes/Nosotros/Nosotros';
import Admision from './componentes/Admision/Adminision';
import Egresados from './componentes/Egresados/Egresados';
import Programas from './componentes/Programas/Programas';
import Programa from './componentes/Programa/Programa';
import Noticias from './componentes/Actualidad/Noticias/Noticias';
import DetalleNoticia from './componentes/Actualidad/Noticias/DetalleNoticia/DetalleNoticia';
import BolsaDeTrabajo from './componentes/Actualidad/BolsaDeTrabajo/BolsaDeTrabajo';
import DetalleTrabajo from './componentes/Actualidad/BolsaDeTrabajo/Detalle/DetalleTrabajo';
import PageFormPostulante from './componentes/Actualidad/BolsaDeTrabajo/FormularioPostulante/PageFormPostulante';
import Transparencia from './componentes/Institucional/Transparencia/Transparencia';
import Galeria from './componentes/Actualidad/Galeria/Galeria';
import Fotos from './componentes/Actualidad/Galeria/Albun/Fotos';
import Footer from './componentes/Footer';
import Error404 from './componentes/Error404/Error404';
import Social from './componentes/Social';
import UseRedesSociales from './Hooks/useRedesSociales';
// import ModalHome from './componentes/ModalHome';

import moment from 'moment/moment';
import 'moment/locale/es';

import ScrollToTop from './helpers/ScrollToTop';

moment().locale('es');


// Modal.setAppElement('#root');

const App = () => {
  const url_base = process.env.REACT_APP_BASEURL;
  const [dataFilial, setDataFilial] = useState([]);
  const [dataProgramas, fcargarProgramas] = useState([]);

  // const [ modalIsOpen, setModalIsOpen ] = useState(false);

  // useEffect(() => {
  //   setModalIsOpen(true);
  // }, []);

  // const onCloseModal = () =>{
  //   setModalIsOpen(false);
  // }

  const subdominiop = process.env.PUBLIC_URL;
  const res = subdominiop.replace(`${subdominiop}`, '')
  const subdominio = res.trim();

  const url = window.location.pathname;
    let sede = url.split('/');
        sede = sede[1];

    let  codfilial = '',
          filial = '' ;
    if(sede === "piura"){
      filial = sede;
      codfilial = 'a2ef406e2c2351e0b9e80029c909242d';
    }else if(sede === "arequipa"){
      filial = sede;
      codfilial = 'e45ee7ce7e88149af8dd32b27f9512ce';
    }else if(sede === "chiclayo"){
      filial = sede;
      codfilial = '7d0665438e81d8eceb98c1e31fca80c1';
    }
    // console.log(subdominio);

  useEffect(() =>{
    const controller = new AbortController();

    const getDataFalial= async () =>{
      try {
        const resp = await axios.get(`${url_base}api/webhome/data_fil`,{
          params:{
            keyf: codfilial
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          setDataFilial(resp.data);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    getDataFalial();

    return() => {
      controller.abort();
    }
  }, [url_base, codfilial]);

  const [redesSociales] = UseRedesSociales(filial);

  useEffect(() =>{
    const controller = new AbortController();

    const obtenerProgramas= async () =>{
      try {
        const resp = await axios.get(`${url_base}api/webhome/prog_web`,{
          params:{
            keyfl: codfilial
          }
        },
        {
          signal: controller.signal
        });
        if(resp.status === 200){
          fcargarProgramas(resp.data);
        }
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    }
    obtenerProgramas();

    return() => {
      controller.abort();
    }
    
  }, [url_base, codfilial]);

  const {keyfe, whua} = dataFilial;
  
  const firt_letter_filial = filial.charAt(0).toUpperCase();
  const residuo_filial = filial.slice(1);
  const tabName = `${firt_letter_filial}${residuo_filial}`;

  return ( 
    // <Grilla />
    <>
      <BrowserRouter>

        <ScrollToTop />
        <HelmetProvider>
          
          {/*<ModalHome />*/}
          {/* <Modal
            isOpen={modalIsOpen}
            onRequestClose={onCloseModal}
            contentLabel='Modal de bienvenida'
            style={{
              content: {
                width: '50%',
                height: '90%',
                boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                top: '55%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                overflow: 'hidden',
                zIndex: '1000000 !important'
              }
            }}
          >
            <div style={{ width: '100%', height: 'auto', padding: '8px 0', display: 'flex', justifyContent:'space-between', alignContent: 'center'}}>
              <h2 style={{ fontWeight: '500'}}><AiOutlineAlignLeft /> Plan de Cese de Actividades Educativas </h2>
              <span onClick={onCloseModal}> <AiOutlineCloseCircle style={{ color: 'red' }}/></span>
            </div>
            <iframe
              src="../assets/files/documentacion/plan_de_cese_de_actividades_educativas.pdf"
              width="100%"
              height="100%"
              title="PDF Document"
            />

          </Modal> */}

          <div className='container__fluid'>
            <header>
              <Header dataFilial={dataFilial} subdominio={subdominio} codfilial={codfilial} keyfe={keyfe} filial={filial} dataProgramas={dataProgramas}/>
            </header>
            <main className=''>
              <Social dataFilial={dataFilial} keyfe={keyfe} subdominio={subdominio} redesSociales={redesSociales} dataProgramas={dataProgramas} whua={whua}/>
        
              <Routes pathname={`${subdominio}/`}>
                <Route path='*' element={ <Error404/> }/>
                <Route path={`${subdominio}/${filial}/`} element={ 
                  <Inicio subdominio={subdominio} codfilial={codfilial}  filial={filial} dataFilial={dataFilial} tabName={tabName} />}
                />
                <Route path={`${subdominio}/${filial}/nosotros`} element={ 
                  <Nosotros codfilial={codfilial} filial={filial} tabName={tabName} /> }
                />
                <Route path={`${subdominio}/${filial}/admision`} element={ 
                  <Admision codfilial={codfilial} keyfe={keyfe} filial={filial} dataProgramas={dataProgramas} whua={whua} tabName={tabName} /> }
                />
                <Route path={`${subdominio}/${filial}/egresados`} element={ 
                  <Egresados codfilial={codfilial} filial={filial} tabName={tabName} /> }
                />
                <Route path={`${subdominio}/${filial}/programas`} element={ 
                  <Programas subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} /> }
                />
                {/* carreras */}
                <Route path={`${subdominio}/${filial}/programa/:keyp/:url`} 
                  element={ 
                    <Programa subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName}/> 
                  }
                />
        
                {/* Actualidad / => Noticias */}
                <Route path={`${subdominio}/${filial}/noticias`} 
                  element={ 
                    <Noticias subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} /> 
                  }
                />

                <Route path={`${subdominio}/${filial}/noticia/:keyn/:slugn`} 
                  element={ 
                    <DetalleNoticia subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName}/> 
                  }
                />

                {/* Bolsa de Trabajo */}
                <Route path={`${subdominio}/${filial}/bolsa-laboral`} 
                  element={ 
                    <BolsaDeTrabajo subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} url_base={url_base}/> 
                  }
                />

                <Route path={`${subdominio}/${filial}/bolsa-laboral/:keyt/:slug`} 
                  element={ 
                    <DetalleTrabajo subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} url_base={url_base}/> 
                  }
                />

                <Route path={`${subdominio}/${filial}/bolsa-laboral/registrarme`} 
                  element={ 
                    <PageFormPostulante subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} url_base={url_base}/> 
                  }
                />

                <Route path={`${subdominio}/${filial}/galeria`} 
                  element={ 
                    <Galeria subdominio={subdominio} codfilial={codfilial} filial={filial} url_base={url_base} tabName={tabName} /> 
                  }
                />

                <Route path={`${subdominio}/${filial}/galeria/:slugp/:keyal`} 
                  element={ 
                    <Fotos subdominio={subdominio} codfilial={codfilial} filial={filial} url_base={url_base} tabName={tabName} /> 
                  }
                />
        
                {/* Institucional */}
                <Route path={`${subdominio}/${filial}/transparencia`} 
                  element={ 
                    <Transparencia subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} /> 
                  }
                />
                <Route path={`${subdominio}/${filial}/licenciamiento`} 
                  element={ 
                    <Transparencia subdominio={subdominio} codfilial={codfilial} filial={filial} tabName={tabName} /> 
                  }
                />

                <Route path={`${subdominio}/${filial}/intranet`} element={
                  <div>
                    <h2>Pagina 4</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, sint!</p>
                  </div>
                }/>
              </Routes>
              
            </main>
            <footer>
              <Footer subdominio={subdominio} codfilial={codfilial} filial={filial} redesSociales={redesSociales} />
            </footer>
          </div>
        </HelmetProvider>
      </BrowserRouter>
    </>
  );
}
 
export default App;
