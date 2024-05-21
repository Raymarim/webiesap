import React from 'react';
import Titulo from '../Agentes/Titulo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCheck, faAsterisk} from '@fortawesome/free-solid-svg-icons';

const Historia = ({codfilial}) => {

  return ( 
    <section className='nosotros_historia' id='nuestraHistoria'>
      <div className="container">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <Titulo titulo="Nuestra Historia"/> 
          </div>
        </div>
        {
          (()=> {
            if (codfilial === '96a3be3cf272e017046d1b2674a52bd3') {
              return(
                <div className="grid">
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='nosotros_historia-content'>
                      <ul className="nosotros_historia-tree">
                        <li>
                          <input type="checkbox" id="c1" />
                          <label className="tree_label" htmlFor="c1"><span className='nosotros_historia-tree-titulo'><FontAwesomeIcon icon={faGraduationCap}/> IESAP - Sede Central</span></label>
                          <ul>
                            <li>
                              <input type="checkbox"  id="c2" />
                              <label htmlFor="c2" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faAsterisk}/> El Instituto de Educación Superior Privado “Alas Peruanas” Sede Central – Lima es el resultado de la visión emprendedora de la Cooperativa de Servicios Múltiples Alas Peruanas, allá por el año 1998.</p></label>
                              <ul>
                                <li><span className="tree_label">
                                <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                El IESAP nace con RM Nº 106-94-ED que autoriza su funcionamiento Institucional y las carreras profesionales técnicas de: Administración de Negocios y Mercadotecnia, posteriormente con Oficio Nº 892-DINESST-99 cambia de denominación de Instituto de Educación Superior Particular “PBA Probusiness” – Instituto de Estudios Empresariales, por el de Instituto de Educación Superior Particular “Alas Peruanas” Lima – Instituto de Estudios Empresariales.
                                </p>
                                </span></li>
                                <li>
                                  <span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>Con Resolución Directoral Nº 1400-2001-ED se reconoce a la Universidad Alas Peruanas S.A. como nueva Propietaria del Instituto de Educación Particular “Alas Peruanas – Lima, Instituto de Estudios Empresariales”.
                                  </p>  
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> Con Resolución Directoral Nº 676-99-ED se autoriza a ofertar los Títulos de:</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Profesional Técnico en Computación e Informática.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                  <FontAwesomeIcon icon={faCheck}/>  Profesional Técnico en Contabilidad.
                                  </p></span></li>
                                
                              </ul>
                            </li>
                            <li>
                              <div htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> A través de la Resolución Directoral Nº 033 de fecha 13 de setiembre de 2002, nos autoriza el cambio de Local a la Calle Antequera Nº 110 – Distrito de San Isidro, Provincia y Departamento de Lima, donde viene funcionando actualmente.</p></div>
                            </li>
                            <li>
                              <div htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'>
                              <FontAwesomeIcon icon={faAsterisk}/> Mediante Resolución Ministerial Nº 039-2019-MINEDU, de fecha 01 de febrero de 2019 el Ministerio de Educación otorga el LICENCIAMIENTO institucional que incluye nueve (09) programas de estudios y cinco (05) locales, siendo la Sede Central Lima y sus Filiales ubicadas en las provincias de Arequipa, Chiclayo, Ica y Piura, registrando como Director General al señor Jaime Alfonso Reyes Montoro.</p></div>
                            </li>
                            <li>
                              <div htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'>
                              <FontAwesomeIcon icon={faAsterisk}/> A partir del año 2021, asume como promotora del IESAP, Inversiones Educativas IESCOOP SAC, empresa de la Cooperativa de Servicios Múltiples Alas Peruanas.</p></div>
                            </li>
                          </ul>
                        </li>
                        {/* <li>
                          <label className="tree_label" htmlFor="c1">Level 0 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, esse hic ut praesentium ipsam quidem, commodi sit accusantium fugiat ducimus illo quo atque perferendis nemo accusamus magnam asperiores earum labore?</label>
                          
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }else if (codfilial === 'a2ef406e2c2351e0b9e80029c909242d') {
              return(
                <div className="grid">
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='nosotros_historia-content'>
                      <ul className="nosotros_historia-tree">
                        <li>
                          <input type="checkbox" id="c1" />
                          <label className="tree_label" htmlFor="c1"><span className='nosotros_historia-tree-titulo'><FontAwesomeIcon icon={faGraduationCap}/> IESAP - SEDE PRINCIPAL PIURA</span></label>
                          <ul>
                            <li>
                              <input type="checkbox"  id="c2" />
                              <label htmlFor="c2" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-primary card__animate-rigth'><FontAwesomeIcon icon={faAsterisk}/> Apertura sus actividades académicas en Piura</p></label>
                              <ul>
                                <li><span className="tree_label">
                                <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                Bajo la denominación de Instituto de Educación Superior “CEPEA” se inician las actividades académicas el 02 de Octubre de 1994, en el actual local de Av. Sullana 621, con un número de 120 alumnos distribuidos en las Carreras Tecnológicas de Computación e Informática, Administración de empresas, Contabilidad y Secretariado Ejecutivo.
                                </p>
                                </span></li>
                                <li>
                                  <span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'> La ceremonia de inauguración contó con la presencia de autoridades educativas de la región y personalidades como el Dr. César Paredes Canto, en aquel entonces, Vicepresidente de la República, quien apadrinó la ceremonia. Se hicieron presentes, también, los gestores de este proyecto, Representantes de la Cooperativa Alas Peruanas y el Gerente General de la misma, siendo la Cooperativa Alas Peruanas, Promotora de esta Casa de Estudios. Se contó también, con la presencia del Dr. Manuel Robles Morales y Dr. Wilder Calderón Castro, Promotor y Director de CEPEA Lima, respectivamente. Cabe destacar que en la ceremonia de apertura estuvo presente la plana docente seleccionada entre los destacados profesionales de Piura, algunos de ellos aún brindan sus servicios en esta Casa de Estudios. La Dirección General de Lima, mediante Resolución Directoral, nombra como Director Ejecutivo del Instituto CEPEA de Piura al Lic. Algemiro Ramírez Prado, quien cumplió acertadamente su labor hasta el año 2005.
                                  </p>  
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-primary card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> Reconocimiento a nuestro esfuerzo</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> El 31 de Enero de 1995, mediante Resolución Ministerial 006.ED, se reconoce oficialmente al INSTITUTO DE EDUCACIÓN SUPERIOR “CEPEA” – PIURA, nombre original de esta Organización Educativa, tomado en virtud al convenio entre la Cooperativa “Alas Peruanas” y el Instituto Tecnológico “CEPEA” de Lima.</p>
                                </span></li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-primary card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> Seguimos formando jóvenes de nivel competitivo</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Han transcurrido 29 años de vida institucional y durante este periodo podemos decir que se han tenido logros, se han alcanzado metas y objetivos, e igualmente hemos tenido que afrontar dificultades dada la coyuntura nacional. Sin embargo, gracias al trabajo en equipo en el que se conjugan esfuerzos de la Dirección, el Personal Jerárquico, Docentes y Personal Administrativo, se ha logrado superar estas dificultades y mantener el sitio que hoy ostenta a nivel de educación superior tecnológica en la Región Piura Han egresado, ya 48 promociones con un estimado de 1900 graduados, y un aproximado de más de 1200 titulados; un gran número de ellos vienen prestigiando a esta Casa de Estudios ocupando puestos de trabajo en el competitivo mercado laboral actual.</p>
                                </span></li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-primary card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> Nuestra primera promoción</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> En Octubre de 1997, egresa la primera promoción del Instituto con un total de 72 jóvenes graduandos, formados en Carrera Tecnológicas, muchos de ellos ubicados ya en las diferentes empresas públicas y/o privadas de nuestra región, quienes constituyen nuestra mejor carta de presentación.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                  <FontAwesomeIcon icon={faCheck}/>  Las autoridades de la Cooperativa “Alas Peruanas” fieles al principio cooperativo que propugna la EDUCACIÓN como la llave de oro del cooperativismo, inicia en Octubre de 1997, las gestiones ante el Ministerio de Educación para lograr el cambio de Promotoria y el nombre de “CEPEA” por el de “ALAS PERUANAS”, es así como el 13 de Enero de 1999 y mediante Resolución de la DINESST se autoriza el cambio de nombre de nuestra casa de estudios, constituyéndonos en INSTITUTO SUPERIOR TECNOLOGICO PRIVADO “ALAS PERUANAS”
                                  </p></span></li>

                                  <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                  <FontAwesomeIcon icon={faCheck}/> Después de haber realizado la Revalidación de la Institución y luego la Adecuación, en cumplimiento de las normas emitidas por MINEDU, nuestra Casa de Estudios ha logrado el Licenciamiento Institucional, mediante Resolución Ministerial N°039-2019 – Minedu, la Sede Principal se encuentra en la ciudad de Piura y las filiales en Arequipa y Chiclayo. Actualmente liderado por su Director General, el Magíster Jaime Alfonso Reyes Montoro, quien viene direccionando con mucho acierto el IESAP.
                                  </p></span></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        {/* <li>
                          <label className="tree_label" htmlFor="c1">Level 0 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, esse hic ut praesentium ipsam quidem, commodi sit accusantium fugiat ducimus illo quo atque perferendis nemo accusamus magnam asperiores earum labore?</label>
                          
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }else if (codfilial === 'e45ee7ce7e88149af8dd32b27f9512ce') {
              return(
                <div className="grid">
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='nosotros_historia-content'>
                      <ul className="nosotros_historia-tree">
                        <li>
                          <input type="checkbox" id="c1" />
                          <label className="tree_label" htmlFor="c1"><span className='nosotros_historia-tree-titulo'><FontAwesomeIcon icon={faGraduationCap}/> IESAP - FILIAL AREQUIPA</span></label>
                          <ul>
                            <li>
                              <input type="checkbox"  id="c2" />
                              <label htmlFor="c2" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faAsterisk}/> El Instituto de Educación Superior Privado Alas Peruanas – Filial Arequipa, forma parte del sistema educativo más grande del país; inicia sus actividades académicas en el mes de octubre del año 2000.</p></label>
                              <ul>
                                <li><span className="tree_label">
                                <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                El Instituto de Educación Superior Privado Alas Peruanas IESAP, es una entidad Educativa de Derecho Privado de carácter multisectorial y pluridisciplinar que desarrolla actividades de docencia, investigación y desarrollo científico y tecnológico, autorizado por el Ministerio de Educación, según Resolución Ministerial Nro. 039- 2019-MINEDU cuyo fin es la formación Profesional Técnica para trabajar en instituciones del sistema empresarial.
                                </p>
                                </span></li>
                                <li>
                                  <span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>El Instituto Alas Peruanas tiene presencia en las ciudades de Lima, Ica, Piura, Chiclayo y Arequipa, en donde todos estamos enfocados en liderar un Proyecto Institucional, que lleve a los jóvenes a enfrentar los retos del siglo XXI.
                                  </p>  
                                  </span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }else if (codfilial === '7d0665438e81d8eceb98c1e31fca80c1') {
              return(
                <div className="grid">
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='nosotros_historia-content'>
                      <ul className="nosotros_historia-tree">
                        <li>
                          <input type="checkbox" id="c1" />
                          <label className="tree_label" htmlFor="c1"><span className='nosotros_historia-tree-titulo'><FontAwesomeIcon icon={faGraduationCap}/> IESAP - FILIAL CHICLAYO</span></label>
                          <ul>
                            <li>
                              <input type="checkbox"  id="c2" />
                              <label htmlFor="c2" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faAsterisk}/> El Instituto de Educación Superior Privado Alas Peruanas – Filial Chiclayo, es el resultado de la visión emprendedora de la Cooperativa de Servicios Múltiples “Alas Peruanas” y forma parte del sistema educativo más grande del país; inicia sus actividades académicas en el mes de marzo del año 2009.</p></label>
                              <ul>
                                <li><span className="tree_label">
                                <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                El Instituto de Educación Superior Privado Alas Peruanas (IESAP), es una entidad Educativa de Derecho Privado de carácter multisectorial y pluridisciplinar que desarrolla actividades de docencia, investigación, desarrollo científico y tecnológico, el mismo que se encuentra LICENCIADO POR EL MINISTERIO DE EDUCACION CON R.M. Nº 039-2019-MINEDU de fecha 01 de febrero del 2019.
                                </p>
                                </span></li>
                                <li>
                                  <span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>El Instituto Alas Peruanas tiene presencia en las ciudades de Lima, Arequipa, Chiclayo, Ica, Piura; en donde todos estamos enfocados en liderar un Proyecto Institucional, que lleve a los jóvenes a enfrentar los retos del siglo XXI.
                                  </p>  
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-dark card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> El Instituto De Educación Superior Privado “Alas Peruanas” Filial Chiclayo, inicia su funcionamiento el 06 de marzo del 2009. Mediante la R.M 0055-2009-ED del 06 de marzo del 2009, a su vez se autoriza a ofertar títulos profesionales técnicos en los programas educativos de:</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Computación e Informática.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Enfermería Técnica</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Secretariado Ejecutivo</p>
                                </span></li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-dark card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> Con Oficio Nro. 364-2015 MINEDU/VMGP-DIGESUTPA/DIGEST, de fecha 05 de octubre 2015, se autorizan el funcionamiento de las Carreras Técnicas:</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Administración de Negocios Internacionales</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Fisioterapia y Rehabilitación</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'> El Instituto de Educación Superior Privado “Alas Peruanas” Filial Chiclayo, se encuentra ubicado en la Calle Grau Nro. 624 Urbanización Campodónico – Chiclayo.</p>
                                </span></li>
                              </ul>
                            </li>
                            
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }else if (codfilial === '751d31dd6b56b26b29dac2c0e1839e34') {
              return(
                <div className="grid">
                  <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
                    <div className='nosotros_historia-content'>
                      <ul className="nosotros_historia-tree">
                        <li>
                          <input type="checkbox" id="c1" />
                          <label className="tree_label" htmlFor="c1"><span className='nosotros_historia-tree-titulo'><FontAwesomeIcon icon={faGraduationCap}/> IESAP - Filial Ica</span></label>
                          <ul>
                            <li>
                              <input type="checkbox"  id="c2" />
                              <label htmlFor="c2" className="tree_label"><p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faAsterisk}/> El Instituto de Educación Superior Privado Alas Peruanas – Filial Ica, es el resultado de la visión emprendedora de la Cooperativa de Servicios Múltiples “Alas Peruanas” y forma parte del sistema educativo más grande del país; inicia sus actividades académicas en el mes de abril del año 2003.</p></label>
                              <ul>
                                <li><span className="tree_label">
                                <p className='nosotros_historia-tree-text-p card__animate-rigth'>
                                El Instituto de Educación Superior Privado Alas Peruanas (IESAP), es una entidad Educativa de Derecho Privado de carácter multisectorial y pluridisciplinar que desarrolla actividades de docencia, investigación, desarrollo científico y tecnológico, el mismo que SE ENCUENTRA LICENCIADO POR EL MINISTERIO DE EDUCACION CON R.M. 039-2019-MINEDU de fecha 01 de febrero del 2019.
                                </p>
                                </span></li>
                                <li>
                                  <span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'>El Instituto Alas Peruanas tiene presencia en las ciudades de Lima, Ica, Piura, Chiclayo y Arequipa, en donde todos estamos enfocados en liderar un Proyecto Institucional, que lleve a los jóvenes a enfrentar los retos del siglo XXI.
                                  </p>  
                                  </span>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <input type="checkbox" id="c3" />
                              <label htmlFor="c3" className="tree_label"><p className='nosotros_historia-tree-text-p nosotros_historia-tree-text-title-dark card__animate-rigth'> <FontAwesomeIcon icon={faAsterisk}/> El Instituto De Educación Superior Privado “Alas Peruanas” filial Ica, inicia su funcionamiento el 07 de abril del 2003. Mediante la R.M 447-2002-ED del 11 de Julio del 2002, a su vez se autoriza a ofertar títulos profesionales técnicos en los programas educativos de:</p></label>
                              <ul>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Administración de Negocios Internacionales.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Arquitectura de Plataformas y Servicios de Tecnologías de la Información con mención en Programación Multimedia.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/> Contabilidad con mención en Proceso de Tributación.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'><FontAwesomeIcon icon={faCheck}/>  Enfermería Técnica.</p>
                                </span></li>
                                <li><span className="tree_label">
                                  <p className='nosotros_historia-tree-text-p card__animate-rigth'> El Instituto de Educación Superior Privado “Alas Peruanas” filial Ica se encuentra ubicado en la Av. Jerónimo de Cabrera Nº 550.</p>
                                </span></li>
                              </ul>
                            </li>
                            
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }
          })()
        }
        
      </div>
    </section>
   );
}
 
export default Historia;