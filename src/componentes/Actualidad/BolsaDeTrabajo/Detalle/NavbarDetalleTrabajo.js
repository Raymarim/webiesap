import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { BsChevronRight } from "react-icons/bs";
import './../../../../css/sass/Actualidad/BolsaDeTrabajo/Detalle/NavbarDetalleTrabajo.scss';

export default function NavbarDetalleTrabajo({ subdominio, filial }){
  return(
    <>
      <div className="trabajoDetail__nav">
        <nav className="trabajoDetail__nav_list">
          <Link to={`${subdominio}/${filial}/`} className="trabajoDetail__nav_list_item">
            <IoHomeOutline className="trabajoDetail__nav_list_item_icon"/>
            <span className="trabajoDetail__nav_list_item_text">Inicio</span>
          </Link>
          <BsChevronRight className="trabajoDetail__nav_list_icon_rigth"/>
          <Link to={`${subdominio}/${filial}/bolsa-laboral`} className="trabajoDetail__nav_list_item">
            <span className="trabajoDetail__nav_list_item_text"> Bolsa Laboral</span>
          </Link>
        </nav>
      </div>
    </>
  )
}