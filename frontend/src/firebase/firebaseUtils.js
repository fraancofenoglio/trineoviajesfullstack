import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebaseConfig";

const signOutUser = () => auth.signOut();

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, provider);

const modalMessages = {
    succesfulPurchase: "Compra realizada con éxito. Recibirás los detalles por mail.",
    lorem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae beatae numquam officiis inventore temporibus, velit dolor ipsum voluptatibus incidunt sequi, mollitia aliquam voluptates.",
    emptyCart: "No hay artículos en el carrito.",
    loginToContinue: "Por favor inicie sesión o regístrese para continuar con la compra."
}
const modalTitles = {
    congrats: "¡Felicitaciones!",
    ok: "¡Listo!"
}

export {signOutUser, signInWithGoogle, modalMessages, modalTitles};