import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function HamburguerMenu({hamb}) {

    const [menu, setMenu] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClick = (e) => {

        e.preventDefault();
        setMenu(!menu);
        setOpen(!open);
    }

  return (
    <>
        <div className={hamb ? "over" : ""} id="main-container-hamburguer">
        
            <div id="hamburguer">
                <button className={ open ? "open" : ""} onClick={handleClick} id="hb-btn">
                    <span className={ hamb ? "topline span over2" : "topline span"}></span>

                    <span className={hamb ? "middleline span1 over2" : "middleline span1"}></span>
                    
                    <span className={hamb ? "bottomline span2 over2" : "bottomline span2"}></span>

                    <ul className={menu ? "ul-menu mostrarMenu" : "ul-menu"} id="menu">
                        <li className="list-menu">

                            <Link className="link-list-menu" to="/home">
                                INICIO
                            </Link>
   
                        </li>

                        <li className="list-menu">

                            <HashLink smooth className="link-list-menu" to="/home#show-trip">
                                VIAJES
                            </HashLink>

                        </li>

                        <li className="list-menu">

                            <Link className="link-list-menu" to="/account">
                                MI CUENTA
                            </Link>

                        </li>
                    </ul>

                </button>

            </div>

        </div>
    </>
  )
}

export default HamburguerMenu