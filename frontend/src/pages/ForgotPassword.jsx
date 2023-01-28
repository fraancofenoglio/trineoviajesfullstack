import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import Modal from "../components/Modal";
import { modalTitles } from "../firebase/firebaseUtils";
import axios from 'axios';


function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [title, setTitle] = useState();

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resetPassword = await axios.patch("http://localhost:3000/forgot-password", {
                email,
                password
            })
            setTitle(modalTitles.ok);
            setMessage(resetPassword.data.message);
            setOpen(true);
            
        } catch (error) {
 
            if (error.response.status === 404 || error.response.status === 500) {
                setTitle(error.response.data.title);
                setMessage(error.response.data.message);
                setOpen(true);
            }
        }
    }

  return (
    <>
        <div className="main-account">
            <form className="login-inputs" onSubmit={handleSubmit}>
                <label htmlFor="email">Ingrese Email:</label>
                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Ingrese su nueva contraseña:</label>
                <input type="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <Button text={"Cambiar Contraseña"} action={handleSubmit}></Button>
            </form>

        </div>
        <Modal open={open} setOpen={setOpen} fn={ () => {
            if (title === modalTitles.ok) {
                navigate("/login");
            }
        }}>
            <h3>{title}</h3>
            <p>{message}</p>
        </Modal>
    </>
  )
}

export default ForgotPassword