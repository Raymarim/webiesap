import React, {useState, useRef} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toast';
import Esqueleton from '../Esqueleton/Esqueleton';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../../css/sass/Admision/_formulario.scss';

const Formulario = ({dataProgramas, keyfe, whua}) => {
  
  const url_base = process.env.REACT_APP_BASEURL;
  const [ dataSelect, setDataSelect] = useState('');
  const [ statusSelect, setStatusSelect ] = useState(false);
  const [ isValidt, setIsValidt] = useState(false);
  const [ isloading, setIsLoading ] = useState(false);

  const selectRef = useRef();

  const onchangeSelect = (e) =>{
    setDataSelect(e.value);
    setIsValidt(false);
  }

  return ( 
    <>
      {/* <section className='admision__form'>
        <div className="container">
          <div className="grid grid-gap-xs">
            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-6 grid-res-xl-6'>
              <div className='admision__form-descripcion-container'>
                <h3 className='admision__form-descripcion-informes'>Informes</h3>
                <h2 className='admision__form-descripcion-programas'>Programas de estudio en 03 años</h2>
                <div className='admision__form-descripcion-content-exito'>
                  <p className='admision__form-descripcion-exito'>¡EL ÉXITO NO SE ESPERA, SE CONSIGUE...!</p>
                </div>
              </div>
            </div>

            <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-6 grid-res-xl-6'> */}

              <div className='admision__form-container'>
                <ToastContainer position='top-center' delay={5000}/>
                <div className='admision__form-info'>
                  <h3 className='admision__form-info-title'>Ingresa tus datos</h3>
                  <p className='admision__form-info-des'>Para recibir la información que necesitas</p>
                </div>
                <Formik
                  initialValues={{
                    txt_adm_name : '',
                    txt_adm_ape : '',
                    txt_adm_phone : '',
                    txt_adm_email: ''
                  }}

                  validate={(valores) =>{
                    let errores = {};

                    if(!valores.txt_adm_name){
                      errores.txt_adm_name = '* Por favor ingresa un nombre';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,70}$/.test(valores.txt_adm_name)){
                      errores.txt_adm_name = '* El nombre solo puede contener letras y numeros';
                    }

                    if(!valores.txt_adm_ape){
                      errores.txt_adm_ape = '* Por favor ingresa sus apellidos';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,70}$/.test(valores.txt_adm_ape)){
                      errores.txt_adm_ape = '* Los apellidos solo pueden contener letras y numeros.';
                    }

                    if(!valores.txt_adm_phone){
                      errores.txt_adm_phone = '* Por favor ingresa numero de celular';
                    }else if(!/^[0-9]{1,12}\b$/.test(valores.txt_adm_phone)){
                      errores.txt_adm_phone = '* Los datos ingresados deben ser solo numeros.';
                    }

                    if(!valores.txt_adm_email){
                      errores.txt_adm_email = '* Por favor ingrese correo electronico';
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.txt_adm_email)){
                      errores.txt_adm_email = '* Los datos ingresados deben ser un correo electronico.';
                    }

                    return errores;
                  }}

                  onSubmit={(valores, {resetForm}) =>{
                    // console.log(props);
                    setIsLoading(true);

                    if(dataSelect.length ===4){
                      setStatusSelect(true);
                    }
                    const SenAdmInforme = async() => {
                      try {
                        const response = await fetch(`${url_base}api/webadm/adddatos`,{
                          method: 'POST',
                          body: new URLSearchParams(
                          {
                            field_name: valores.txt_adm_name, 
                            field_surnames: valores.txt_adm_ape,
                            fiel_phone: valores.txt_adm_phone,
                            fiel_email: valores.txt_adm_email,
                            slt_adm_programan: dataSelect,
                            keyfe : keyfe  
                          })
                        })
                        if(response.status === 200){
                          const data = await response.json();
                          if (data.status) {
                            setIsLoading(false);
                            toast.success(data.msg);
                            setTimeout(() => {
                              if(data.email.statusEmail){
                                toast.info(data.email.msgEmail);
                              }else{
                                toast.error(data.email.msgEmail);
                              }
                              
                            }, 4000);
                          }  
                        }
                      } catch (error) {
                        console.log(`error: `, error)
                      }
                    }

                    if(dataSelect){
                      SenAdmInforme();
                      resetForm();
                    }else{
                      setIsValidt(true);
                    }
                  }}
                >
                  {({errors, onBlur, touched}) => (

                    <Form className="admision__form-send" autoComplete="off">
                      
                      <div className='admision__form-send-group'>
                        <label htmlFor="txt_adm_name" className='admision__form-send-group-label'> Nombres</label>
                        <Field 
                          type="text" 
                          name="txt_adm_name" 
                          className='admision__form-send-group-input admision__form-input-uppercase' 
                          placeholder='Ingresa tus datos...' 
                        />

                        <ErrorMessage name='txt_adm_name' component={() =>(
                          <div className='admision__form-send-group-error'>{errors.txt_adm_name}</div>
                        )}/>
                        
                      </div>

                      <div className='admision__form-send-group'>
                        <label htmlFor="txt_adm_ape" className='admision__form-send-group-label '>Apellidos</label>
                        <Field 
                          type="text" 
                          name="txt_adm_ape" 
                          className='admision__form-send-group-input admision__form-input-uppercase' 
                          placeholder='Ingresa tus datos...'
                        />
                        <ErrorMessage name='txt_adm_ape' component={() =>(
                          <div className='admision__form-send-group-error'>{errors.txt_adm_ape}</div>
                        )}/>
                      </div>

                      <div className='admision__form-send-group'>
                        <label htmlFor="txt_adm_phone" className='admision__form-send-group-label'>Numero de celular</label>
                        <Field 
                          type="text" 
                          name="txt_adm_phone" 
                          className='admision__form-send-group-input' 
                          placeholder='Ingresa tus datos...'
                        />
                        <ErrorMessage name='txt_adm_phone' component={() =>(
                          <div className='admision__form-send-group-error'>{errors.txt_adm_phone}</div>
                        )}/>
                      </div>
                      
                      <div className='admision__form-send-group'>
                        <label htmlFor="txt_adm_email" className='admision__form-send-group-label'>Coreo electrónico</label>
                        <Field 
                          type="text" 
                          name="txt_adm_email" 
                          className='admision__form-send-group-input' 
                          placeholder='Ingresa tus datos...'
                        />
                        <ErrorMessage name='txt_adm_email' component={() =>(
                          <div className='admision__form-send-group-error'>{errors.txt_adm_email}</div>
                        )}/>
                      </div>
                      
                      <div className='admision__form-send-group'>
                        <label htmlFor="slt_adm_programan" className='admision__form-send-group-label'>Programa de estudios</label>

                        <Select 
                          ref={selectRef}
                          name="slt_adm_programan" 
                          options={dataProgramas?.map((data, index) => ({
                            value: data.keyp,
                            label: data.namesmall,
                            id: index
                            }))}
                          isSearchable={false}
                          isClearable={false}
                          onChange={onchangeSelect}
                          placeholder="Selecciona un programa"
                          menuPlacement="top"
                          onBlur={onBlur}
                        /> 
                        {isValidt && <div className='admision__form-send-group-error'>* Debes seleccionar un programa de estudios.</div>}
                      </div>

                      <div className='admision__form-send-container-btn'>
                        <button type="submit" className='admision__form-send-btn'>
                          { 
                          Object.keys(errors).length === 0 && statusSelect && isloading && <Esqueleton type={4} />}
                          Enviar
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>

                <div className='admision__form-container-whatsap'>
                  <a href={`https://api.whatsapp.com/send?phone=51${whua}&text=Escribenos%20para%20recibir%20informacion.`} target="_black">
                    <div className='admision__form-whatsap'>
                      <FontAwesomeIcon icon={faWhatsapp} className='admision__form-whatsap-icon' />
                    </div>
                  </a>
                </div>
              </div>

            {/* </div>
          </div>
        </div>
      </section> */}
    </>
   );
}
 
export default Formulario;