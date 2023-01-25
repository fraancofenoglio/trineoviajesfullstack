import { useDispatch } from "react-redux";
import {add_to_cart} from "../actions/cartActions";
import { modalMessages } from '../firebase/firebaseUtils';

function TripCard({travel, setOpen, setMessage, setTitle}) {
    let {title, city, img, days, nights, price, icons, quantity, id} = travel;

    const dispatch = useDispatch();
    
  return (
    <>
        <div className="card" data-id="0" id="0" stock="2" price="40000">
            <h2 city={city}>{title}</h2>
            <img src={img} alt=''/>
            <div className="info">
                <div className="divDays">
                    <h4>{days}</h4>
                    <img src={icons.sun} style={{width: "30px", height: "30px"}} alt=''/>

                </div>
                <div className="divDays">
                    <h4>{nights}</h4>
                    <img src={icons.moon} style={{width: "20px", height: "20px"}} alt=''/>

                </div>
                <img src={icons.transport} style={{width: "28px", height: "28px"}} alt=''/>
            </div>
            <h3>${price}</h3>
            <button onClick={() => {
                // setSelectedCity(city);
                setTitle(city);
                setMessage(modalMessages.lorem)
                setOpen(true);
            }} className="infoButton">+ info</button>

            <button onClick={() => dispatch(add_to_cart({city, img, price, quantity, id}))} className="cartButton">Agregar al carrito</button>
        </div>
    </>
  )
}

export default TripCard