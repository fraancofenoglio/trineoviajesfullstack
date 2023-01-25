import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { toggleCart } from '../actions/cartActions';
import { modalMessages } from '../firebase/firebaseUtils';
import Cart from './Cart';
import Modal from './Modal';

function NavBar({hamb, setHamb}) {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const toggle = useSelector(state => state.cart.cartOpen);
    const state = useSelector(state => state.cart.cartItems);

  return (
    <nav className="nav-desktop">

        <div className="logo">
            <NavLink to="/home">

                <h1>TRINEO</h1>

            </NavLink>

        </div>

        <div className="navigation-desktop-container">

            <div className="navigation-desktop">
                <div className="trip">
                    <HashLink smooth to="/home#show-trip" >
                        VIAJES
                    </HashLink>
                </div>
                
                <div className="login">
                    <NavLink to="/account">
                        MI CUENTA
                    </NavLink>
                </div>
            </div>
            
            <div className="cart-container">
                <button className="showCart" href='.'>

                    <img 
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(toggleCart())
                        setHamb(!hamb);
                    }}

                    style={{width: "25px", height: "25px"}}
                    src="../assets/cart.png" alt=""
                    />

                    <Cart setHamb={setHamb} hamb={hamb} setOpen={setOpen} toggle={toggle}></Cart>
 
                </button>

                <Modal open={open} setOpen={setOpen}>
                    <h3>{!state.length ? modalMessages.emptyCart : modalMessages.loginToContinue}</h3>
                </Modal>

            </div>
        </div>
    </nav>
  )
}

export default NavBar