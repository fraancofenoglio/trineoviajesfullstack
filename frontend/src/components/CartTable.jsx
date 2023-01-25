import {useSelector, useDispatch} from "react-redux"
import {remove_from_cart} from "../actions/cartActions"


function CartTable() {

  const state = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();
  const quant = state.reduce((acc, cart) => {
    return acc + (cart.price * cart.quantity)
  }, 0)


    
  return (
    <>
    <table id="cart-list">
            <thead>
                <tr>
                    <th></th>
                    <th>Viaje</th>
                    <th>Precio</th>
                    <th>Pasaj.</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
              {state.map((trip, i) => (
                
                <tr key={i}>
                  <td>
                    <img style={{width: "50px", height: "50px"}} src={trip.img} alt={trip.city}/>
                  </td>

                  <td>{trip.city}</td>

                  <td>${(trip.price) * trip.quantity}</td>

                  <td>{trip.quantity}</td>

                  <td>
                     <a onClick={(e) => {
                      e.preventDefault();
                      dispatch(remove_from_cart(trip.id))
                     }} className="delete-element" href=".">X</a>
                    </td>

                </tr>
                   
              ))}
            </tbody>
        </table>
        <div>
          <h2> Subtotal: $ {quant}</h2>
        </div>
      </>
  )
}

export default CartTable