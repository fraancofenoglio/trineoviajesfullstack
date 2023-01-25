import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../actions/cartActions";

function CartButton({text, id, action, setHamb, hamb, setOpen}) {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const state = useSelector(state => state.cart.cartItems);
  const navigate = useNavigate();

  const handleClick = (e) => {
    
    e.preventDefault();
    dispatch(toggleCart())
    setHamb(!hamb)


    if (id === "empty-cart" && state.length) {
      
      action && dispatch(action());
      return
    }

    if (currentUser !== null && state.length && id === "buy-cart") {
      navigate("/checkout");

    } else if(!state.length ) {

      setOpen(true)

    } else {
      navigate("/login");
      setOpen(true);
    }

  }
  
  return (
    <a onClick={handleClick} href="#cart" id={id}>
        {text}
    </a>
  )
}

export default CartButton