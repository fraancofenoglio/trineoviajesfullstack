import axios from "axios";
import { useEffect, useState } from "react";
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
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
  
    const getData = async () => {
  
      try {
        setLoading(true)
        const res = await axios.get(`http://localhost:3000/account/${currentUser.email}`)
        if(res){

          setData(res.data)
        }
        setLoading(false)
        
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    useEffect(() => {
      getData()
    }, []);

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
            <img style={{borderRadius: "50%"}} src={currentUser?.photoURL || "../assets/user-circle-regular-36.png"} alt="user"/>
            <Button text={"Cerrar Sesión"} action={handleLogout}></Button>

        </div>

        <Orders data={data} loading={loading}></Orders>
        
        <FooterSection></FooterSection>
    </>
  )
}

export default Account