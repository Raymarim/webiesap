import React, {useEffect} from 'react';
// import './../css/Navegacion.scss';

const Grilla = () => {

  useEffect( () =>{
    //conexion a un api
    
  }, []);

  return ( 

    <section className='container'>
      {/* <div className='grid'>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">1</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">2</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">3</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">4</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">5</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">6</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">7</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">8</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">9</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">10</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">11</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-6 grid-res-xl-1">12</div>
      </div>

      <h2>Grilla</h2>
      <div className='grid grid-gap-xs'>
        <div className="column grid-res-xs-12 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">size col-6</div>
        <div className="column grid-res-xs-12 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">size col-6</div>
      </div>

      <h2>Grilla</h2>
      <div className='grid grid-gap-xs'>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-4 grid-res-lg-4 grid-res-xl-4">size col-4</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-4 grid-res-lg-4 grid-res-xl-4">size col-4</div>
        <div className="column grid-res-xs-12 grid-res-sm-4 grid-res-md-4 grid-res-lg-4 grid-res-xl-4">size col-4</div>
      </div>

      <h2>Grilla</h2>
      <div className='grid grid-gap-xs'>
        <div className="column grid-res-xs-12 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">size col-6</div>
        <div className="column grid-res-xs-12 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">size col-6</div>
      </div>

      <h2>Grilla</h2>
      <div className='grid grid-gap-xs'>
        <div className="column grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12"><p>size col-12</p></div>
      </div> */}

      <h2>Grilla auto-fit</h2>
      <div className='grid-gap-xl grid-auto-xs'>
        <div className="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt.</div>
        <div className="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt.</div>
        <div className="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt.</div>
        <div className="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt.</div>
        <div className="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt.</div>
        <div className="column">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, incidunt.</div>
      </div>
      
    </section>
   );
}
 
export default Grilla;