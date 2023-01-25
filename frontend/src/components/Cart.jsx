import CartButton from "./buttons/CartButton";
import CartTable from "./CartTable";
import {remove_all_from_cart} from "../actions/cartActions"

function Cart({toggle, setOpen, setHamb, hamb}) {
  return (
    <div
    onClick={(e) => e.preventDefault()}
    id="cart" 
    className={toggle ? "open-cart" : "cart"}
    >
        <CartTable/>

        <div className="cart-buttons">

            <CartButton setHamb={setHamb} hamb={hamb} setOpen={setOpen} action={remove_all_from_cart} id={"empty-cart"} text={"Vaciar Carrito"}></CartButton>
                            
            <CartButton setHamb={setHamb} hamb={hamb} setOpen={setOpen} id={"buy-cart"} action={remove_all_from_cart} text="Comprar"></CartButton>
        </div>

    </div>
  )
}

export default Cart