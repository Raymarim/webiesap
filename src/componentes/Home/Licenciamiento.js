import React from 'react';

import "./../../css/sass/Home/_licenciamiento.scss"

const Licenciamiento = ({ codfilial }) => {

  return ( 
    <>
      <div className='home__licenciamiento'>
        <div className='container__xl'>
          <div className='grid'>
            <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>

              <div className='home__licenciamiento_bandel_text'>
                <h3 className='home__licenciamiento_text'>LICENCIADOS POR</h3>
                <h3 className='home__licenciamiento_text'>MINEDU</h3>
                <h3 className='home__licenciamiento_text'>RM N° 102-2024</h3>
              </div>

            </div>

            <div className='grid-res-xs-6 grid-res-sm-6 grid-res-md-6 grid-res-lg-6 grid-res-xl-6'>

              <div className='home__licenciamiento_bandel_picture'>
                <a href="https://drive.google.com/file/d/1L8-kyuJG0QK_1m48ACxR3olrIJOgj0A0/view" target='_black' className='home__licenciamiento_bandel_picture_lnk'>
                  Resolución Ministerial
                </a>

                <a href="https://drive.google.com/file/d/1J8Pw2EYHbViAptWoIAwOakPm_g7tuSUT/view" target='_black' className='home__licenciamiento_bandel_picture_lnk'>
                 Oficio Minedu
                </a>

              </div>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}
 
export default Licenciamiento;