import React, {useEffect, useState} from 'react';

const Horarios = ({codfilial}) => {

  const [horasTurno, setHorasTurno] = useState({});
 
  useEffect(() =>{
    if(codfilial === '96a3be3cf272e017046d1b2674a52bd3'){
      setHorasTurno(
        {
          horasDiurno : '08:00 hrs. a 12:45 hrs',
          horasNocturno : '18:00 hrs. a 21:45 hrs'
        }
      );
    }else if(codfilial === 'a2ef406e2c2351e0b9e80029c909242d' || codfilial === '751d31dd6b56b26b29dac2c0e1839e34'){
      setHorasTurno(
        {
          horasDiurno : '07:30 am a 12:00 pm',
          horasTarde : '12:15 pm a 16:45 pm',
          horasNocturno : '17:00 pm a 21:30 pm'
        }
      );
    }else if(codfilial === '7d0665438e81d8eceb98c1e31fca80c1'){
      setHorasTurno(
        {
          horasDiurno : '08:00 am a 12:45 pm',
          horasNocturno : '13:00 pm a 17:45 pm'
        }
      );
    }else if(codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce'){
      setHorasTurno(
        {
          horasDiurno : '07:00 am a 12:00 am',
          horasTarde : '13:30 pm a 17:15 pm',
          horasNocturno : '17:15 pm a 21:00 pm'
        }
      );
    }
  },[codfilial]); 
  
  return ( 
    <div className="grid">
      <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
        <div className="programa__horarios programa__descripcion-card">
          <div className='programa__horarios-content-titulo'>
            <h4 className=' programa__descripcion-card-titulo'>Horarios</h4>
          </div>
          <div className='programa__horarios-content-table'>
            <table className='programa__horarios-table'>
              {
                (horasTurno) &&
                <tbody className='programa__horarios-table-body'>
                  <tr className='programa__horarios-table-body-head'>
                    <td className='programa__horarios-table-body-col'>Turno</td>
                    <td className='programa__horarios-table-body-col'>Días</td>
                    <td>Horas</td>
                  </tr>
                  <tr>
                    <td className='programa__horarios-table-body-col'>Diurno</td>
                    <td className='programa__horarios-table-body-col'>Lunes a Viernes</td>
                    <td>{horasTurno.horasDiurno}</td>
                  </tr>
                  {
                    (horasTurno.horasTarde) &&
                    <tr>
                      <td className='programa__horarios-table-body-col'>Tarde</td>
                      <td className='programa__horarios-table-body-col'>Lunes a Viernes</td>
                      <td>{horasTurno.horasTarde}</td>
                    </tr>
                  }
                  <tr>
                    <td className='programa__horarios-table-body-col'>Nocturno</td>
                    <td className='programa__horarios-table-body-col'>Lunes a Viernes</td>
                    <td>{horasTurno.horasNocturno}</td>
                  </tr>
                </tbody>  
              }
              
            </table>
          </div>    
        </div>
      </div>
    </div>
  );
}
 
export default Horarios;