import { useNavigate } from "react-router-dom"
import Button from "../components/buttons/Button"

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <div className="not-found">
        <h1>¡Ups! Página no encontrada</h1>
        <Button text={"Volver al inicio"} action={() => navigate("/home")}></Button>
    
    </div>
  )
}

export default NotFound