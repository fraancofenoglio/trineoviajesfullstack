import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../actions/user-actions";
import Button from "../components/buttons/Button";
import FooterSection from "../components/FooterSection"
import Orders from "../components/Orders";
import { signOutUser } from "../firebase/firebaseUtils";


function Account() {

    const currentUser =  useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOutUser();
            dispatch(setUser(null));
            navigate("/login");

        } catch (error) {
            console.log(error.code);
        }
    }

  return (

    <>  

        <div className="user-display">

            <h1>¡Bienvenid@,  {currentUser?.displayName || currentUser?.email}!</h1>
            <img style={{borderRadius: "50%"}} src={currentUser?.photoURL || "./assets/user-circle-regular-36.png"} alt="user"/>
            <Button text={"Cerrar Sesión"} action={handleLogout}></Button>

        </div>

        <Orders></Orders>
        
        <FooterSection></FooterSection>
    </>
  )
}

export default Account