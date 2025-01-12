import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import S from "./Header.module.css";
import logotipo from "../../assets/imgCadastro/Logo2.svg";
import user from "../../assets/iconheader/user1.png";
import seta from "../../assets/iconheader/seta.png";
import logout from "../../assets/iconheader/log-out.png";
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
  const { id } = useParams();
  return (
    <div className={S.container}>
      <div className={S.contLogo}>
        <img className={S.logotipo} src={logotipo} alt="logotipo" />
      </div>

      <ul className={S.containerLista}>
        <Link className={S.li} to={`/films/${id}`}>
          <li className={S.li}>FILMES</li>
        </Link>
        <Link  className={S.li} to={`/series/${id}`}>
          <li className={S.li}>SÉRIES</li>
        </Link>
        {/* <li>ANIMAÇÕES</li> */}
      </ul>
      <div class={S.buscarFilme}>
        <form>
          <p> Buscar </p>
          <input type="text" placeholder="" className={S.inputBuscar} />
          <button type="sumbit" className={S.buttonBuscar}>
            {" "}
            <BiSearchAlt />{" "}
          </button>
        </form>
      </div>

      <div className={S.containerUser}>
        <div className={S.containerimg}>
          <img className={S.user} src={user} alt="" />
        </div>

        <div className={S.contCirAndImg}>
          <NavItem>
            <DropDownMenu></DropDownMenu>
          </NavItem>
        </div>
      </div>
    </div>
  );
};

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={S.circulo}>
      <img
        className={S.seta}
        src={seta}
        alt=""
        onClick={() => setOpen(!open)}
      />
      {open && props.children}
    </div>
  );
};

const DropDownMenu = () => {
  const { id } = useParams();

  const DropdownItem = (props) => {
    return (
      <a href="#" className={S.menuItem}>
        <span className={S.iconButton}>{props.leftIcon}</span>
        {props.children}
        <span className={S.iconRight}>{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className={S.dropdown}>
      <div className={S.menu}>
        <Link to={`/clientArea/${id}`}>
          <DropdownItem>
            <div className={S.circuloItem}>
              <img className={S.iconeMenu} src={user} alt="" />
            </div>
            <h3 className={S.textMenu}>Minha conta</h3>
          </DropdownItem>
        </Link>

        <Link to={"/"}>
          <DropdownItem>
            <div className={S.circuloItem}>
              <img className={S.iconeMenu} src={logout} alt="" />
            </div>
            <h3 className={S.textMenu}>Sair</h3>
          </DropdownItem>
        </Link>
      </div>
    </div>
  );
};
export default Header;
