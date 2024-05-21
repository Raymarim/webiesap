import React, {useEffect} from 'react';

const ListEgresados = () => {

  useEffect(() => {

    const onscrollegresados = () => {

      const arr_card_egresados = document.querySelectorAll('.list__egresados-card');

      let window_heigth = Math.round(window.pageYOffset);
      // console.log(window_heigth)
      const pares = [0,2,4,6,8,10];

      for (let car = 0; car < arr_card_egresados.length; car++) {
        const element = arr_card_egresados[car];
        
        const heigth_element = Math.round(element.offsetTop);
        
        if (heigth_element - 300 < window_heigth) {
          element.style.opacity = 1;

          if (pares.indexOf(car) === -1) {
            element.classList.add('card__animate-left');
          }else{
            element.classList.add('card__animate-rigth');
          }

        }
      }
    }

    window.addEventListener('scroll', onscrollegresados);

    return() =>{
      window.removeEventListener('scroll', onscrollegresados)
    }
    
  });

  return ( 
    <section className='list__egresados'>
      <div className="container">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <div className='list__egresados-cards'>
              
            <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Nunura Silva Deysi Aime</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Docente de Contabilidad - UTP</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresada del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Contabilidad</span>, actualmente labora en la Universidad Tecnológica del Perú - UTP, desempeñándose como docente de Contabilidad. Además, fue parte de la plana docente del Instituto Hermanos Carcamo - Paita (02 años). 
                        </p>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/75e5a65c1f4ebf06d25065970b0ef23156c3ef7e.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>

                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/e4822337f8d96ec032fa831f3ee89d356bfa67d9.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Pacherre Ruiz Junior Smith</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Supervisor de Servicios Financieros - Caja Piura</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresado del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Administración de Empresas</span> actualmente se desempeña como supervisor de Servicios Financieros en Caja Piura con más de dos años ejerciendo el cargo. </p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Alexander Sandoval Sandoval</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Jefe del Área de Informática</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresado del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Computación e Informática</span> , actualmente labora en la empresa CESER Piura - SRL, desempeñando el cargo de jefe del Área de Informática. Además, se desempeña como administrador en la empresa Tecsupport Perú SRL. </p>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/705c7bc9db11be8ce14db9ef72c0e4c953b08c0b.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/325111e6a9bf0e5c468f094efe9232fa81d3454f.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Miguel Vasquez Chuquihuanga</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Resp. de Soporte Técnico IESTP - Canchaque</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresado del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Computación e Informática</span> además concluyo sus estudios de Ingeniería de Sistemas en la UAP. Actualmente, se desempeña como docente en el IESTP - Canchaque tiempo completo, teniendo a cargo "Bienestar del estudiante"  y  " Soporte Técnico".  </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Cynthia Yarleque Herrera</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Tesorería - IESAP</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresada del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Secretariado Ejecutivo</span> actualmente, labora en nuestra institución IESAP por más de 10 años desempeñándose en el área de tesorería.  </p>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/a3321626dbb4b4b5e0ed15fb4cecfad488096b2a.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/3382c52a236b017a3fe6e59cb794b1bba9a16cba.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Joel Ygnacio Coronado Pulache</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Administrador de Soporte Técnico - Piura</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresado del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Computación e Informática</span> logro formar su propia empresa dedicada al mantenimiento y reparación de equipos de cómputo, además de la venta de repuestos y accesorios. Felicitaciones por este emprendimiento. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Gloria Lizbeth Correa Campos</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>Secretaria en - Laos Aguilar Limas y Asociados</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresada del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Secretariado ejecutivo</span> actualmente trabaja en "Laos Aguilar Limas y Asociados - Piura" desempeñando el cargo de Secretaria con un aproximado de tres años. </p>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/023e3f8b1ca3f6bc540f959c68570bcd757d3fec.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className='list__egresados-card'>
                <div className='container__xl'>
                  <div className='grid'>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
                      <div className='list__egresados-card-left'>
                        <div className='list__egresados-card-left-img-content'>
                          <img src="./../assets/img/egresados/testimonios/1b1852c21d3820c9f502a78cb83f71bd5ade7d99.jpg" alt="" className='list__egresados-card-left-img'/>
                        </div>
                      </div>
                    </div>
                    <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                      <div className='list__egresados-card-rigth'>
                        <h3 className='list__egresados-card-rigth-egresado'>Palacios Arronategui Yairo</h3>
                        <h5 className='list__egresados-card-rigth-cargo'>RR.HH - Cementos Pacasmayo - Piura</h5>
                        <p className='list__egresados-card-rigth-experiencia'>Egresado del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>Administración de Empresas</span>, actualmente, se desempeña en el área de Recursos Humanos (03 años).</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default ListEgresados;