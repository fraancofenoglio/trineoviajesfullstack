import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FooterSection from "../components/FooterSection";
import LoaderBTN from "../components/LoaderBTN";
import Modal from "../components/Modal";
import { modalTitles} from "../firebase/firebaseUtils";
import axios from 'axios';


function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [title, setTitle] = useState();
    const [fn, setFn] = useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            setLoading(true)
            const registerUser = await axios.post("http://localhost:3000/register", {
                email,
                password
            })

            setTitle(modalTitles.congrats);
            setMessage(registerUser.data.message);
            setOpen(true);
            setFn(true);

        } catch (error) {
            if (error.response.status === 404 || error.response.status === 500) {
                
                setTitle(modalTitles.ups);
                setMessage(error.response.data.message);
                setOpen(true);

            }
        } finally {
            setLoading(false)
        }
    }

  return (
    <>
        <div className="main-account">
            <section className="register-inputs">
                <h2>¿Sos nuev@?</h2>

                <form onSubmit={handleSubmit}>

                    <div className="register-container">

                        <div className="row1">

                            <div>

                                <label htmlFor="email-input-register"> Email:</label>

                                <input required
                                type="email" id="email-input-register" placeholder="Ingrese su email" 
                                value={email} onChange={e => setEmail(e.target.value)}
                                />

                            </div>

                        </div>

                        <div className="row2">

                            <div>

                                <label htmlFor="password-input-register"> Cree una contraseña:</label>

                                <input required
                                type="password" id="password-input-register" placeholder="Contraseña" 
                                value={password} onChange={ e => setPassword(e.target.value)}
                                />

                            </div>
                        </div>

                    </div>

                    <button type="submit">{ loading ? <LoaderBTN/> : "Registrarse"}</button>

                </form>

                <div>
                    <p>O inicia sesión en tu cuenta:</p>
                    <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
                </div>

            </section>
        </div>

        <Modal open={open} setOpen={setOpen} login={fn}>
            <h3>{title}</h3>
            <p>{message}</p>
        </Modal>

        <FooterSection></FooterSection>
    </>
  )
}

export default Register