import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {remove_all_from_cart} from "../actions/cartActions";
import FooterSection from "../components/FooterSection";
import Modal from "../components/Modal";
import { useFirestore } from "../hooks/useFirebase";
import {modalMessages, modalTitles} from '../firebase/firebaseUtils'

function Checkout() {

    const [open, setOpen] = useState(false);

    const {addData} = useFirestore();
    const navigate = useNavigate();

    const state = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    const quant = state.reduce((acc, cart) => {
        return acc + (cart.price * cart.quantity);
    }, 0);

    const handleClick = () => {

        if (state.length) {
            
            addData(quant, state);
            dispatch(remove_all_from_cart());
            setOpen(true);
        }
    }

  return (
    <>
        <div className="checkout">
            <div className="checkout-container">
                <h1>Checkout</h1>
                {state.length ? state.map((trip, i) => (
                    <div className="checkout-card" key={i}>
                        <img style={{width: "50px", height: "50px"}} src={trip.img} alt={trip.city} />
                        <h3>{trip.city}</h3>
                        <h3>${trip.price * trip.quantity}</h3>
                        <h3>Pasajeros: {trip.quantity}</h3>
                    </div>
                )) : <h2>No hay artículos</h2>}

                <h2>Total: ${quant}</h2>
                <button className="generic-button" onClick={handleClick}>Comprar</button>
            </div>
        </div>

        <Modal open={open} setOpen={setOpen} fn={() => navigate("/account")}>
            <h3>{modalTitles.congrats}</h3>
            <p>{modalMessages.succesfulPurchase}</p>
        </Modal>

        <FooterSection></FooterSection>
    </>
  )
}

export default Checkout