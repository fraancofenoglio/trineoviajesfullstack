import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebaseConfig";

const registerUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
}

const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}

const signOutUser = () => auth.signOut();

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

const resetPassword = async (email) => await sendPasswordResetEmail(auth, email);

const modalMessages = {
    weakPassword: "Contraseña débil, la contraseña debe tener al menos 6 caracteres.",
    succesfulRegister: "Te registraste exitosamente, ya podés iniciar sesión.",
    emailInUSe: "El email ingresado ya está registrado.",
    userNotFound: "No existe un usuario registrado con ese email. Por favor regístrese.",
    wrongPassword: "Contraseña incorrecta.",
    forgotPassword: "Usuario no encontrado, revise el correo ingresado.",
    resetSent: "Te enviamos un mail al correo indicado para recuperar tu contraseña.",
    succesfulPurchase: "Compra realizada con éxito. Recibirás los detalles por mail.",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae beatae numquam officiis inventore temporibus, velit dolor ipsum voluptatibus incidunt sequi, mollitia aliquam voluptates.",
    emptyCart: "No hay artículos en el carrito.",
    loginToContinue: "Por favor inicie sesión o regístrese para continuar con la compra."
}
const modalTitles = {
    congrats: "¡Felicitaciones!",
    ups: "¡Ups!",
    ok: "¡Listo!"
}


export {registerUser, loginUser, signOutUser, signInWithGoogle, resetPassword, modalMessages, modalTitles};