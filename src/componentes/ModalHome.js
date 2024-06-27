import React,{ useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import './../css/sass/_modalHome.scss';
import { AiOutlineCloseCircle, AiOutlineAlignLeft  } from "react-icons/ai";
Modal.setAppElement('#root');

const ModalHome = () => {

    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setModalIsOpen(true);
        // console.log(location);
        getUrlCurrent()
    }, []);

    const onCloseModal = () =>{
        setModalIsOpen(false);
        getUrlCurrent();
    }

    const getUrlCurrent = () => {
      const directorios = window.location.pathname.split('/');

      const filterDirectorios = directorios.filter( dir => {
        return !dir.includes('-') && !dir.includes('_') && !dir.includes('=');
      })

      const countDir = filterDirectorios.length;
      const relativePath  = '../'.repeat(countDir);
      return `${relativePath}assets/files/documentacion/plan_de_cese_de_actividades_educativas.pdf`;
    }


    return ( 
        <>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={onCloseModal}
            contentLabel='Modal de bienvenida'
            style={{
                overlay: {
                    zIndex: 99999999, 
                    backgroundColor: 'rgba(251, 254, 255, 0.7)', 
                },
                content: {
                    width: '75%',
                    height: '90%',
                    boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    top: '55%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden',
                    zIndex: '99999999',
                }
            }}
          >
            <div style={{ width: '100%', height: 'auto', padding: '8px 0', display: 'flex', justifyContent:'space-between', alignContent: 'center'}}>
              <h2 style={{ fontWeight: '500'}}><AiOutlineAlignLeft /> Plan de Cese de Actividades Educativas </h2>
              <span onClick={onCloseModal}> <AiOutlineCloseCircle style={{ color: 'red' }}/></span>
            </div>
            <iframe
              src={`${getUrlCurrent()}`}
              width="100%"
              height="100%"
              title="PDF Document"
            />

          </Modal>
        </>
     );
}
 
export default ModalHome;