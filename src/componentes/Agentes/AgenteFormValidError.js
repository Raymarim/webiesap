import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";

export default function AgenteFormValidError( {msgValidacion} ){
  return(
    <>
      <FormValidation className="form__error">
        <AiOutlineInfoCircle className="form__icon" />
        <p className="form__desp">{msgValidacion}</p>
      </FormValidation>
    </>
  )
}

const FormValidation = styled.div`
  width: 100%;
  display: flex;
  gap: 0.3125rem;
  color: var(--danger);
  font-size: 0.8125rem;
`;