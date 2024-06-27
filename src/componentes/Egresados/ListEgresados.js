import React, {useState, useEffect} from 'react';

const ListEgresados = () => {
  const [dataEgresados, setDataEgresado] = useState([]);

  const isImpar = (num) => num % 2 !== 0;
  
  useEffect(() => {
    setDataEgresado([
      {
        id: 1,
        egresado: 'Nunura Silva Deysi Aime',
        cargo: 'Docente de Contabilidad - UTP',
        prograEst: 'Contabilidad',
        descripcion: 'actualmente labora en la Universidad Tecnológica del Perú - UTP, desempeñándose como docente de Contabilidad. Además, fue parte de la plana docente del Instituto Hermanos Carcamo - Paita (02 años).',
        picture: '75e5a65c1f4ebf06d25065970b0ef23156c3ef7e.jpg'
      },
      {
        id: 2,
        egresado: 'Adanaque Guerrero Harold Alonso',
        cargo: 'Representante Financiero Digital - Interbank',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente, se desempeña como Representante Financiero Digital en el Banco Interbank - Piura con un aproximado de 08 meses ejerciendo el cargo.',
        picture: '736764abdd3284242b3babf8d289e4a6c749f342.jpg'
      },
      {
        id: 3,
        egresado: 'Paredes Armas Joysi Patricia',
        cargo: 'Asesor de Servicios - Banco BBVA',
        prograEst: 'Administración de Empresas',
        descripcion: 'se desempeña como Asesor de Servicios en el Banco BBVA - Piura (07 meses).',
        picture: '6ed4bef56e079f52cc541a88b916d622d20aaa46.jpg'
      },
      {
        id: 4,
        egresado: 'Pacherre Ruiz Junior Smith',
        cargo: 'Supervisor de Servicios Financieros - Caja Piura',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente se desempeña como supervisor de Servicios Financieros en Caja Piura con más de dos años ejerciendo el cargo.',
        picture: 'e4822337f8d96ec032fa831f3ee89d356bfa67d9.jpg'
      },
      {
        id: 5,
        egresado: 'Alexander Sandoval Sandoval',
        cargo: 'Jefe del Área de Informática',
        prograEst: 'Computación e Informática',
        descripcion: 'actualmente labora en la empresa CESER Piura - SRL, desempeñando el cargo de jefe del Área de Informática. Además, se desempeña como administrador en la empresa Tecsupport Perú SRL.',
        picture: '705c7bc9db11be8ce14db9ef72c0e4c953b08c0b.jpg'
      },
      {
        id: 6,
        egresado: 'Cynthia Yarleque Herrera',
        cargo: 'Tesorería - IESAP',
        prograEst: 'Secretariado Ejecutivo',
        descripcion: 'actualmente, labora en nuestra institución IESAP por más de 10 años desempeñándose en el área de tesorería.',
        picture: 'a3321626dbb4b4b5e0ed15fb4cecfad488096b2a.jpg'
      },
      {
        id: 7,
        egresado: 'Joel Ygnacio Coronado Pulache',
        cargo: 'Administrador de Soporte Técnico - Piura',
        prograEst: 'Computación e Informática',
        descripcion: 'logro formar su propia empresa dedicada al mantenimiento y reparación de equipos de cómputo, además de la venta de repuestos y accesorios. Felicitaciones por este emprendimiento.',
        picture: '3382c52a236b017a3fe6e59cb794b1bba9a16cba.jpg'
      },
      {
        id: 8,
        egresado: 'Gloria Lizbeth Correa Campos',
        cargo: 'Secretaria en - Laos Aguilar Limas y Asociados',
        prograEst: 'Secretariado ejecutivo',
        descripcion: 'actualmente trabaja en "Laos Aguilar Limas y Asociados - Piura" desempeñando el cargo de Secretaria con un aproximado de tres años.',
        picture: '023e3f8b1ca3f6bc540f959c68570bcd757d3fec.jpg'
      },
      {
        id: 9,
        egresado: 'Palacios Arrunategui Yairo',
        cargo: 'RR.HH - Cementos Pacasmayo - Piura',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente, se desempeña en el área de Recursos Humanos (03 años).',
        picture: '1b1852c21d3820c9f502a78cb83f71bd5ade7d99.jpg'
      },
      {
        id: 10,
        egresado: 'Guevara Garcia Erika',
        cargo: 'Estudio Jurídico Asesores Davalos y Abogados',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente trabaja en "Estudio Jurídico Asesores Davalos y Abogados", desempeñando el cargo de Administradora con un aproximado de 03 años.',
        picture: '9b292ddb5e5c125d04d8dc804326a8b765a018e8.jpg'
      },
      {
        id: 11,
        egresado: 'Acosta Dedios Fatima Doris',
        cargo: 'Subgerencia de Catastro Y AAHH - Área Administrativa',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente, trabajando en la Municipalidad Provincial de Sechura.',
        picture: 'dd1b0f69191c2f77650766c8c8925fb32af855fe.jpg'
      },
      {
        id: 12,
        egresado: 'Cunya Villegas Bryan Alexander',
        cargo: 'Área administrativa de Tottus App - Tottus Piura',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente trabaja en el Área administrativa (Tottus - Piura), con un aproximado de 01 año desempeñándose en el cargo.',
        picture: 'db46799d9a98b7e855d157f70f06932452b5b3ab.jpg'
      },
      {
        id: 13,
        egresado: 'Salazar Bayona Sheila Del Carmen',
        cargo: 'Universidad Nacional De Piura De La Facultad Industrial - Área Administrativa',
        prograEst: 'Administración de Empresas',
        descripcion: 'actualmente, trabajando en la Universidad Nacional De Piura.',
        picture: 'e5c0a69bbb3ca14514e9109b1c1ce334f2923546.jpg'
      },
      {
        id: 14,
        egresado: 'Chapilliquen Fernandez Mariela',
        cargo: 'Operador - Banco Central del Perú (BCP)',
        prograEst: 'Contabilidad',
        descripcion: 'actualmente trabaja en el Área de Operador del Banco Central del Perú (BCP), con un aproximado de 01 año desempeñándose en el cargo.',
        picture: 'e4822337f8d96ec032fa831f3ee89d356bfa67d3.jpg'
      },
      {
        id: 15,
        egresado: 'Rivas Berru Sandy Fabiola',
        cargo: 'Asistente Contable - SM Contadores',
        prograEst: 'Contabilidad',
        descripcion: 'actualmente, trabajando en "SM Contadores", con un aproximado de 03 meses.',
        picture: '736764abdd3284242b3babf8d289e4a6c749f345.jpg'
      },
      {
        id: 16,
        egresado: 'Huaman Cruz Marlene',
        cargo: 'Admisión, prepacion y Toma de muestra - Laboratorio Clínico Bermanlab',
        prograEst: 'Enfermería Técnica',
        descripcion: 'actualmente, trabajando en "Laboratorio Clínico Bermanlab", con un aproximado de un año y medio laborando.',
        picture: '325111e6a9bf0e5c468f094efe9232fa81d3454f.jpg'
      },
      {
        id: 17,
        egresado: 'Farfan Curay Diana Azucena',
        cargo: 'Asistente Contable - Consultoria Empresarial ICR',
        prograEst: 'Contabilidad',
        descripcion: 'actualmente, trabajando en "Consultoria Empresarial ICR", con un aproximado de un año y 04 meses laborando.',
        picture: 'e4822337f8d96ec032fa831f3ee89d356bfa67d2.jpg'
      },
    ])
  }, []);

  useEffect(() => {
    const onscrollegresados = () => {

      const arr_card_egresados = document.querySelectorAll('.list__egresados-card');

      let window_heigth = Math.round(window.pageYOffset);
      // console.log(window_heigth)
      const pares = [0,2,4,6,8,10,12,14,16,18,20,22];

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


  const EgresadosPicture = ( { picture } ) => {
    return( 
      <>
        <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-3 grid-res-lg-3 grid-res-xl-3'>
          <div className='list__egresados-card-left'>
            <div className='list__egresados-card-left-img-content'>
              <img src={`./../assets/img/egresados/testimonios/${picture}`} alt="" className='list__egresados-card-left-img'/>
            </div>
          </div>
        </div>
      </>
    )
  }

  return ( 
    <section className='list__egresados'>
      <div className="container">
        <div className="grid">
          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-12 grid-res-lg-12 grid-res-xl-12'>
            <div className='list__egresados-cards'>
              
              {
                (dataEgresados)?
                  dataEgresados.map((item)=>{
                    const keyEgre = item.id;

                    const mostrarLeft = isImpar(keyEgre);

                    return <article key={item.id} className='list__egresados-card'>
                      <div className='container__xl'>
                        <div className='grid'>

                          {
                            mostrarLeft && ( <EgresadosPicture picture={item.picture} /> )
                          }

                          <div className='grid-res-xs-12 grid-res-sm-12 grid-res-md-9 grid-res-lg-9 grid-res-xl-9'>
                            <div className='list__egresados-card-rigth'>
                              <h3 className='list__egresados-card-rigth-egresado'>{item.egresado}</h3>
                              <h5 className='list__egresados-card-rigth-cargo'>{item.cargo}</h5>
                              <p className='list__egresados-card-rigth-experiencia'>Egresado(a) del programa de: <span className='list__egresados-card-rigth-experiencia-programa'>{item.prograEst}</span>, {item.descripcion}
                              </p>
                            </div>
                          </div>

                          {
                            !mostrarLeft && ( <EgresadosPicture picture={item.picture} /> )
                          }

                        </div>
                      </div>
                    </article>;
                  })
                :
                <h3>No se encontraron resultados</h3>
              }

            </div>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default ListEgresados;