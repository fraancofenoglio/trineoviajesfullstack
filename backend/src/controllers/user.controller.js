import {pool} from '../db.js';
import bcrypt  from 'bcryptjs';
//para obtener el email/password
export const postLogin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length <= 0) return res.status(404).json({title: "¡Ups!", message: "No existe un usuario registrado con ese email. Por favor regístrese."});

        const compare = await bcrypt.compare(password, rows[0].password);

        if (compare) {
            
            res.json({email: email})
        } else return res.status(404).json({title: "¡Ups!", message: "Contraseña incorrecta. Revísela e intente nuevamente."})

    } catch (error) {
                
        return res.status(500).json({
            title: "¡Ups!",
            message: "Algo salió mal"
        });
    }
}

//para registrar un usuario en la base con un post
export const postRegister = async  (req, res) => {
    const {email, password} = req.body;

    if (password.length < 8) return res.status(404).json({title: "¡Ups!", message: "Contraseña muy débil. Debe tener al menos 8 caracteres."})
    

    const [exists] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (exists.length <= 0){

        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(password, salt);

        try {
            const [rows] = await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, cryptedPassword]);
            res.status(200).json({message:"Te registraste exitosamente, ya podés iniciar sesión."})
    
        } catch (error) {               
            return res.status(500).json({
                title: "¡Ups!",
                message: "Algo salió mal"
            });
        }
    } else {
        return res.status(404).json({title: "¡Ups!", message: "Ya existe el usuario. Inicia sesión por favor."});
    }

}

//para resetear la contraseña con patch
export const patchPassword = async (req, res) => {

    const {email, password} = req.body;

    if (password.length < 8) return res.status(404).json({title: "¡Ups!", message: "Contraseña muy débil. Debe tener al menos 8 caracteres."})
        
    const salt = await bcrypt.genSalt(10);
    const cryptedPassword = await bcrypt.hash(password, salt);
        
    try {
        const [result] = await pool.query("UPDATE users SET password = IFNULL(?, password) WHERE email = ?", [cryptedPassword, email]);
        
        if (result.affectedRows === 0) return res.status(404).json({
            title: "¡Ups!",
            message: "Usuario no encontrado, revise el email ingresado."
        })
        res.status(200).json({message: "Contraseña modificada correctamente."})
    } catch (error) {
                                        
        return res.status(500).json({
            title: "¡Ups!",
            message: "Algo salió mal."
        });
    }
}
