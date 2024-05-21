import styled from "styled-components"
import { BsCheckCircleFill, BsExclamationCircle } from "react-icons/bs";

export default function AgenteFormResponseEnvio({statusResponse, msgResponse}){
  return(
    <>
      <Response statusResponse={statusResponse} className="formPostulante__content_response">
        {
          (statusResponse)? <BsCheckCircleFill className="formPostulante__response_icon" /> : <BsExclamationCircle className="formPostulante__response_icon" />
        }
        <p className="formPostulante__response_desc">
          {`${msgResponse}`}
        </p>
      </Response>
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
  justify-content: flex-start;
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