import React, {useState} from 'react';

const ModuloMallaCurricular = ({keym, modulo, index}) => {
  const [checked, setchecked] = useState(false);
  const fonchange = (e) =>{
    // console.log(e.target)
    setchecked(!checked);
  }

  return ( 
    <>
      {
        (index === 1)?
          <>
            <input key={keym} type="radio" className="tab tab-selector" name="tab" id={`tab-${index}`} defaultChecked={true} onChange={fonchange} />
            <label htmlFor={`tab-${index}`} className='tab tab-primary'>{modulo}</label>
          </>
        :
        <>
            <input key={keym} type="radio" className="tab tab-selector" name="tab" id={`tab-${index}`} onChange={fonchange} />
            <label htmlFor={`tab-${index}`} className='tab tab-primary'>{modulo}</label>
        </>
      }
    </>
   );
}
 
export default ModuloMallaCurricular;