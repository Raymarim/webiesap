import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AgenteBannerBlack from '../../../Agentes/AgenteBannerBlack';
import ImageGallery from 'react-image-gallery';
import { AiOutlinePicture } from "react-icons/ai";
import Esqueleton from "../../../Esqueleton/Esqueleton";
import Resultados from "../../../Agentes/Resultados";
import Seo from "../../../Seo";

const Fotos = ({subdominio, filial, url_base, tabName}) => {

  const { keyal } = useParams();
  const [ fotosData, setFotosData ] = useState([]);
  const [ isloading, setIsLoading ] = useState(true);
  const [ namealbum, setNameAlbum ] = useState('');

  // const slug = slugp.replaceAll('-', ' ');
  // const first_Letter = slug.charAt(0).toUpperCase();
  // const album = `${first_Letter}${slug.slice(1)}`

  const data = {
    url_Img : './../../../assets/img/galeria/8ad7fc65655cd21624dc773efe26b35e.jpg',
    title_Img : 'Galería Iesap',
    title : 'Galería'
  }

  useEffect(() => {
    const getpictures = async () =>{
      try { 
        const resp = await axios.get(`${url_base}/api/act/webal/pictures/`,
        {
          params: {
            keyal : keyal
          }
        })
        if (resp.status === 200) {
          setTimeout(() => {
            setFotosData(resp.data);
            setIsLoading(false);
            setNameAlbum(resp.data[0].nameal);
          }, 200)
        }
      } catch (error) {
        console.log(`${error}`);
      }
    } 
    getpictures();

  }, [keyal, url_base])

  // console.log(namealbum)
  return(
    <>
      <Seo 
        title={`Galeria | ${namealbum} |Iesap - ${tabName}`} 
        description="Instituto de educación superior privado Alas peruanas, cursos, academico filial piura filial arequipa filial ica filial chiclayo"
        name="Instituto alas peruanas"
        type="article"
      />

      <AgenteBannerBlack databanner={data} />
      <section className="galery__pictures">
        <div className="container">
          <div className="grid">
            <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
              <div className="galery__pictures-content-nav">
                <ul className="galery__pictures-nav">
                  <Link to={`${subdominio}/${filial}/`} className="galery__pictures-nav-lnk">
                    <li className="galery__pictures-nav-item">
                      <span className="galery__pictures-nav-item-name">Inicio</span>
                    </li>
                  </Link>
                  <Link to={`${subdominio}/${filial}/galeria`} className="galery__pictures-nav-lnk">
                    <li className="galery__pictures-nav-item">
                      <span className="galery__pictures-nav-item-name">Galeria</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          {
            (fotosData)?
            <>
              {
              (isloading)?
                <div className="grid">
                  <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
                    <Esqueleton type={1} heigth={450} color="dark"/>
                  </div>
                </div>
              :
              <>
                <div className="grid">
                  <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
                    <div className="galery__pictures-content-title">
                      <AiOutlinePicture className="galery__pictures-title-icon"/>
                      <h2 className="galery__pictures-title">{namealbum}</h2>
                    </div>
                  </div>
                </div>
                <div className="grid">
                  <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
                    <div className="galery__pictures-group">
                      <ImageGallery 
                        items={
                          fotosData.map((item) => (
                            {
                              original: `${url_base}package/web_iesap/img/actualidad/album/picture/${item.picture}`,
                              thumbnail: `${url_base}package/web_iesap/img/actualidad/album/picture/${item.picture}`
                            }
                          ))
                        } 
                        showThumbnails={false} 
                        // showIndex={true}
                        showBullets={true}
                      />
                    </div>
                  </div>
                </div>
              </>
              }
            </>
            :
            <Resultados descripcion="No se encontraron fotos de  la galeria que buscas!!!" />
          }
        </div>
      </section>
    </>
  )
}

export default Fotos