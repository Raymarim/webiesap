import React, { useState } from "react";
import './../../../../css/sass/Actualidad/BolsaDeTrabajo/FormularioPostulante/FormPostulante.scss'
import { useForm } from "react-hook-form";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { BsCheckCircleFill, BsExclamationCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Esqueleton from "../../../Esqueleton/Esqueleton";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormPostulante( {url_base, subdominio, filial} ){
  
  const [ statusResponse, setStatusResponse ] = useState(null);
  const [ msgResponsePost, setmsgResponsePost ] = useState('');
  const [ isLoadingFormSendPost, setIsLoadingFormSendPost ] = useState(false);

  const [dni, setDni] = useState('');

  const navigate = useNavigate();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {

    setIsLoadingFormSendPost(!isLoadingFormSendPost);

    const sendData = async() =>{
      try {
        const formData =  new FormData();
        formData.append("txtcrPostDni", data.txtcrPostDni);
        formData.append("txtcrPostApellidos", data.txtcrPostApellidos);
        formData.append("txtcrPostNombres", data.txtcrPostNombres);
        formData.append("sltcrPostTipoAlumno", data.sltcrPostTipoAlumno);
        formData.append("txtcrPostEmailInsti", data.txtcrPostEmailInsti);
        formData.append("txtcrPostEmailPers", data.txtcrPostEmailPers);
        formData.append("txtcrPostFile", data.txtcrPostFile[0]);

        const response = await fetch(`${url_base}api/webempleo/addpostu`,{
          method: 'POST',
          body : formData,
          // new URLSearchParams(
          //   {
          //     txtcrPostDni : data.txtcrPostDni,
          //     txtcrPostApellidos : data.txtcrPostApellidos,
          //     txtcrPostNombres : data.txtcrPostNombres,
          //     sltcrPostTipoAlumno : data.sltcrPostTipoAlumno,
          //     txtcrPostEmailInsti : data.txtcrPostEmailInsti,
          //     txtcrPostEmailPers : data.txtcrPostEmailPers,
          //     txtcrPostFile : data.txtcrPostFile
          //   }
          // )
        })
        if (response.status === 200) {
            const data = await response.json();
            const { status, msg } = data;
            if (status) {
              console.log(data)
              setIsLoadingFormSendPost(false);
              setStatusResponse(true);
              setmsgResponsePost(msg);
                setTimeout(()=>{
                  navigate(`${subdominio}/${filial}/bolsa-laboral`);
                }, 5000)
            }else{
              setIsLoadingFormSendPost(false);
              setStatusResponse(false);
              setmsgResponsePost(msg);
            }
        }
      } catch (error) {
        setmsgResponsePost(error);
      }
    }
    sendData();
  }

  const onClickSearchDni = () => {
    if (dni.length === 8) {
      const getDataDni = async () => {
        try {
          const resp = await axios.get(`${url_base}api/webempleo/datdni`, {
            params: {
              keydni : dni
            }
          });

          if (resp.status === 200) {
            setValue('txtcrPostApellidos', resp.data.apellidos);
            setValue('txtcrPostNombres', resp.data.nombres);

            if (!resp.data.apellidos && !resp.data.nombres) {
              toast.warning("El alumno(a) no esta esta resgistrado(a) !!!");
            }
          }
        } catch (error) {
          console.log(`${error}`)
        }
      }
      getDataDni();

    } else if (dni === null || dni === "") {
      setValue('txtcrPostApellidos', "");
      setValue('txtcrPostNombres', "");
      
      toast.warning("Debes ingresar el numero de dni !!");
    } else {
      setValue('txtcrPostApellidos', "");
      setValue('txtcrPostNombres', "");

      toast.warning("Debes ingresar 8 numeros !!");
    }
  }

  const onChangeDni = (e) => {
    const dni = e.target.value;
    setDni(dni)
  }

  return(
    <>
      {
        (isLoadingFormSendPost)?
          <div style={{width: "auto"}}> 
            <Esqueleton type={1} heigth={550} color="dark" />
          </div>
        :
          <form onSubmit={handleSubmit(onSubmit)} className='formPostulante__content'>
            <div className="container" style={{ display: "flex", flexDirection: "column", gap: "9px"}}>

              <div className="grid grid-gap-xs">
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">

                  <div className="formPostulante__bandel_input">
                    <div className="formPostulante__group_input">
                      <label htmlFor="txtcrPostDni" className="formPostulante__group_lbl">Dni</label>
                      <input type="text" id="txtcrPostDni" className="formPostulante__group_txb" 
                        {...register("txtcrPostDni", {
                            required : 'Dni requerido',
                            pattern : {
                              value : /^[0-9]+$/,
                              message: 'Solo debes ingresar números',
                            },
                            minLength: {
                              value : 8,
                              message : 'El DNI debe tener minimo 8 números'
                            },
                            maxLength: {
                              value : 8,
                              message : 'El DNI debe tener un maximo de 8 números'
                            },
                          }
                        )}
                        onChange={onChangeDni}
                      />
                    </div>

                    {errors.txtcrPostDni && (
                      <div className="formPostulante__content_error">
                        <AiOutlineInfoCircle className="formPostulante__content_icon" />
                        <p className="formPostulante__content_desp">{errors.txtcrPostDni.message}</p>
                      </div>
                    )}
                  </div>

                </div>
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                  <div className="formPostulante__bandel_search">
                    <button type="button" className="formPostulante__bandel_search_btn" onClick={onClickSearchDni}>
                      Buscar datos
                      <span className="formPostulante__bandel_search_btn_det">Ingresa DNI | Buscar Apellidos Y Nombres</span>
                    </button>

                    <ToastContainer
                      position="bottom-right"
                    />  
                  </div>
                </div>
              </div>

              <div className="grid grid-gap-xs">
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">

                  <div className="formPostulante__bandel_input">
                    <div className="formPostulante__group_input">
                      <label htmlFor="txtcrPostApellidos" className="formPostulante__group_lbl">Apellidos</label>
                      <input type="text" id="txtcrPostApellidos" className="formPostulante__group_txb" 
                        {...register("txtcrPostApellidos", {
                            required : 'Apellidos requerido',
                            pattern : {
                              value : /^[a-zA-Z ]+$/,
                              message: 'Solo debes ingresar letras',
                            },
                          }
                        )}
                      />
                    </div>

                    {errors.txtcrPostApellidos && (
                      <div className="formPostulante__content_error">
                        <AiOutlineInfoCircle className="formPostulante__content_icon" />
                        <p className="formPostulante__content_desp">{errors.txtcrPostApellidos.message}</p>
                      </div>
                    )}
                  </div>
                  
                </div>
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                  
                  <div className="formPostulante__bandel_input">
                    <div className="formPostulante__group_input">
                      <label htmlFor="txtcrPostNombres" className="formPostulante__group_lbl">Nombres</label>
                      <input type="text" id="txtcrPostNombres" className="formPostulante__group_txb" 
                        {...register("txtcrPostNombres", {
                            required : 'Nombres requerido',
                            pattern : {
                              value : /^[a-zA-Z ]+$/,
                              message: 'Solo debes ingresar letras',
                            },
                          }
                        )}
                        // onChange={(e) => setNombres(e.target.value)}
                      />
                    </div>

                    {errors.txtcrPostNombres && (
                      <div className="formPostulante__content_error">
                        <AiOutlineInfoCircle className="formPostulante__content_icon" />
                        <p className="formPostulante__content_desp">{errors.txtcrPostNombres.message}</p>
                      </div>
                    )}
                  </div>  

                </div>
              </div>

              <div className="grid grid-gap-xs">
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                  
                <div className="formPostulante__bandel_input">
                  <div className="formPostulante__group_input">
                    <label htmlFor="txtcrPostEmailInsti" className="formPostulante__group_lbl">Email Institucional</label>
                      <input type="text" id="txtcrPostEmailInsti"
                        className="formPostulante__group_txb" 
                      {...register("txtcrPostEmailInsti", {
                        required : 'Email Personal institucional',
                        pattern : {
                          value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Debes ingresar un email valido',
                        },
                        }
                      )}
                    />
                  </div>

                  {errors.txtcrPostEmailInsti && (
                    <div className="formPostulante__content_error">
                      <AiOutlineInfoCircle className="formPostulante__content_icon" />
                      <p className="formPostulante__content_desp">{errors.txtcrPostEmailInsti.message}</p>
                    </div>
                  )}
                </div>     

                </div>
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                  
                <div className="formPostulante__bandel_input">
                  <div className="formPostulante__group_input">
                    <label htmlFor="txtcrPostEmailPers" className="formPostulante__group_lbl">Email Personal</label>
                    <input type="text" id="txtcrPostEmailPers" className="formPostulante__group_txb" 
                      {...register("txtcrPostEmailPers", {
                          required : 'Email Personal requerido',
                          pattern : {
                            value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Debes ingresar un email valido',
                          },
                        }
                      )}
                    />
                  </div>

                  {errors.txtcrPostEmailPers && (
                    <div className="formPostulante__content_error">
                      <AiOutlineInfoCircle className="formPostulante__content_icon" />
                      <p className="formPostulante__content_desp">{errors.txtcrPostEmailPers.message}</p>
                    </div>
                  )}
                </div>

                </div>
              </div>
              
              <div className="grid grid-gap-xs">
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                  
                <div className="formPostulante__bandel_input">
                  <div className="formPostulante__group_input">
                    <label htmlFor="sltcrPostTipoAlumno" className="formPostulante__group_lbl">Tipo de Alumno</label>
                    <select className="formPostulante__group_txb" 
                    {...register("sltcrPostTipoAlumno",{
                      required: "Tipo de alumno requerido",
                    })} >
                      <option value="">Seleccione Tipo Alumno</option>
                      <option value="MQ--">Regular</option>
                      <option value="Mg--">Egresado</option>
                    </select>
                  </div>

                  {errors.sltcrPostTipoAlumno && (
                    <div className="formPostulante__content_error">
                      <AiOutlineInfoCircle className="formPostulante__content_icon" />
                      <p className="formPostulante__content_desp">{errors.sltcrPostTipoAlumno.message}</p>
                    </div>
                  )}
                </div>

                </div>
                <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                  
                  <div className="formPostulante__bandel_input">
                    <div className="formPostulante__group_input">
                      <label htmlFor="txtcrPostFile" className="formPostulante__group_lbl">Ajuntar CV</label>
                      <input type="file" id="txtcrPostFile" className="formPostulante__group_txb" 
                        {...register("txtcrPostFile", {
                            required : 'Selecciona un archivo',
                          }
                        )}
                      />
                    </div>

                    {errors.txtcrPostFile && (
                      <div className="formPostulante__content_error">
                        <AiOutlineInfoCircle className="formPostulante__content_icon" />
                        <p className="formPostulante__content_desp">{errors.txtcrPostFile.message}</p>
                      </div>
                    )}
                  </div>
                  
                </div>
              </div>

            </div>

            <div className="formPostulante__send">
              <input type="submit" value="Enviar" className="formPostulante__send_btn"/>
            </div>

            { statusResponse !== null && (  
              <Response statusResponse={statusResponse} className="formPostulante__content_response">
                  {
                    (statusResponse)? <BsCheckCircleFill className="formPostulante__response_icon" /> : <BsExclamationCircle className="formPostulante__response_icon" />
                  }
                  <p className="formPostulante__response_desc">
                    {`${msgResponsePost}`}
                  </p>
              </Response>
            )}
          </form>
      }
    </>
  )
}

const Response = styled.div`
  width: 100%;
  height: auto;
  padding: 12px 10px;
  border-radius: 5px;
  background: ${ props => props.statusResponse ? '#D7FEEB' : '#FAD3D3'};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  .formPostulante__response_icon{
    font-size: 14px;
    color: ${ props => props.statusResponse ? '#14B967' : '#F82A2A'};
  }
  .formPostulante__response_desc{
    font-size: 15px;
    color: ${ props => props.statusResponse ? '#14B967' : '#F82A2A'};
    letter-spacing: .2px;
  }
`;