import React from 'react';
import { FcLibrary } from "react-icons/fc";
import ReactPlayer from 'react-player/youtube';

const Video = ({url_vid}) => {
  
  return ( 
    <>
      {
        (url_vid) && 
        <section className='home__video'>
          <div className='container__lg'>
            <div className='grid grid-gap-xs'>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-4 grid-res-lg-4 grid-res-xl-4'>
                <div className='home__video-left'>
                  <FcLibrary className='home__video-left-icon'/>
                  <h3 className='home__video-left-title'>¡Bienvenido al <span className='home__video-left-title-exito'>éxito!</span></h3>
                  <p className='home__video-left-desc'>Sé parte del cambio y únete a la comunidad <span className='home__video-left-desc-iesap'>IESAP</span>.</p>
                </div>
              </div>
              <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-8 grid-res-lg-8 grid-res-xl-8'>
                <div className='home__video-rigth'>
                  <ReactPlayer
                    url={url_vid}
                    playing={true}
                    light={true}
                    // controls={true}
                    // previewTabIndex={0}
                    volume={1}
                    width="100%"
                    height="100%"
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 }
                      }
                    }}
                  className="home__video-rigth-player"/> 
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </>
   );
}
 
export default Video;