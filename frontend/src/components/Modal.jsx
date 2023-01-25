import { useNavigate } from "react-router-dom";

const Modal = ({children, open, setOpen, fn, login}) => {

  const navigate = useNavigate();

  return (
    <div className={`modal-container ${open && "modal-open"}`} onClick={() => {
      setOpen(false);
      fn && fn();
      login && navigate("/login");
    }}>
        
        <div className="modal-message" onClick={(e) => e.stopPropagation()}>

            {children}
            <button onClick={ () => {

                fn && fn();
                login && navigate("/login");
                setOpen(false);
            }} id="close">Aceptar</button>

        </div>
    </div>
  )
}

export default Modal