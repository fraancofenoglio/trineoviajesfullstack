
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../actions/user-actions";
import FooterSection from "../components/FooterSection";
import LoaderBTN from "../components/LoaderBTN";
import Modal from "../components/Modal";
import { loginUser, signInWithGoogle, modalMessages, modalTitles } from "../firebase/firebaseUtils";

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [img, setimg] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [title, setTitle] = useState();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
            setLoading(true)
            const result = await loginUser(email, password);
            dispatch(setUser(result));
            navigate("/account");

        } catch (error) {
            if (error.code === "auth/user-not-found") {

                setTitle(modalTitles.ups);
                setMessage(modalMessages.userNotFound);
                setOpen(true);
            }else if (error.code === "auth/wrong-password"){
                setTitle(modalTitles.ups);
                setMessage(modalMessages.wrongPassword);
                setOpen(true);
            }
        } finally {
            setLoading(false)
        }
    }
     

  return (
    <>
        <div className="main-account">

            <section className="login-inputs">

                    <h2>Iniciar sesión</h2>

                    <form onSubmit={handleSubmit}>
                        <div>

                            <label htmlFor="email-input-login"> Email:</label>

                            <input required
                            type="email" id="email-input-login" placeholder="Ingrese su email" 
                            value={email} onChange={e => setEmail(e.target.value)}
                            />

                        </div>
                        <div>

                            <label htmlFor="email-input-login"> Contraseña:</label>

                            <input required
                            type="password" id="password-input-login" placeholder="Contraseña" 
                            value={password} onChange={e => setPassword(e.target.value)}
                            />
                            <Link to="/forgot-password">¿Olvidaste la contraseña?</Link>

                        </div>

                        <button type="submit">{loading ? <LoaderBTN/> : "Ingresar"}</button>
                        
                    </form>

                    <div className="login-google-button">
                        <p>O inicia sesión con google:</p>
                        <button
                        style={{display: "flex", flexDirection: "row", justifyContent: "center"}}
                        onClick={async () => {
                            const result = await signInWithGoogle();
                            dispatch(setUser(result.user));
                            navigate("/account");
                            
                        }}
                        onMouseEnter={() => setimg(!img)}
                        onMouseLeave={() => setimg(!img)}
                        >
                            <img  src={img ? "../assets/google-logo-24-black.png" : "../assets/google-logo-24.png"} alt="google-logo"/>
                        </button>
                    </div>

                    <div className="register-div-button">
                        <label htmlFor="register">¿No tenés cuenta?</label>
                        <button onClick={() => navigate("/register")}>Registrarse</button>
                    </div>

            </section>
        </div>
        <Modal open={open} setOpen={setOpen}>
            <h3>{title}</h3>
            <p>{message}</p>
        </Modal>

        <FooterSection></FooterSection>
    </>
  )
}

export default Login