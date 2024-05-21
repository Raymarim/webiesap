import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Esqueleton from "../../../Esqueleton/Esqueleton";
import { FaGraduationCap } from "react-icons/fa";

const Albun = ( {subdominio, codfilial, filial, url_base } ) =>{

  const [ albumData, setAlbumData ] = useState([]);
  const [ isloading, setIsLoading ] = useState(true);

  useEffect(() => {
    const getDataAlbum = async () => {
      try {
        const resp = await axios.get(`${url_base}api/act/webal/alb/`,
        {
          params : {
            keya: codfilial
          }
        });
        if (resp.status === 200) {
          setTimeout(() => {
            setAlbumData(resp.data);
            setIsLoading(false);
          }, 2000)
        }
      } catch (error) {
        console.log(`${error}`)
      }
    }

    getDataAlbum();

  }, [ codfilial, url_base ])

  // console.log(albumData)

  return(
    <>
      <section className="galery__albun">
        <div className="container">
          {
          (albumData)?
            <div className="grid grid-gap-xs">
              {
                (isloading)?
                  <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
                    <Esqueleton type={1} heigth={450} color="dark"/>
                  </div>
                :
                  <>
                    {
                      albumData.map((album)=>{
                        return <div key={album.keya} className="grid-res-xs-12 grid-res-sm-12 grid-res-md-6 grid-res-lg-6 grid-res-xl-6">
                        <div className="galery__albun_cards">
                          <Link to={`${subdominio}/${filial}/galeria/${album.hosta}/${album.keya}`}>
                            <div className="galery__albun_card">
                              <div className="galery__albun_card_content_picture">
                                <img src={`${url_base}package/web_iesap/img/actualidad/album/${album.picture}`} alt="" className="galery__albun_card_picture"/>
                              </div>
                              <div className="galery__albun_card_content_title">
                                <FaGraduationCap className="galery__albun_card_icon"/>
                                <h3 className="galery__albun_card_title">{album.namea}</h3>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      })
                    }
                  </>
              }
            </div>
            :
            <div className="grid grid-gap-xs">
              <div className="grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12">
                <div className="galery__albun-result">
                  <img src="/assets/img/galeria/guard-not-protect-1456897.svg" alt="" />
                  <h5 className="galery__albun-result-title">No se encontraron resultados!!!</h5>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default Albun