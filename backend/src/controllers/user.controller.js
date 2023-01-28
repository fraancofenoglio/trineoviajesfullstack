import {pool} from '../db.js';
import bcrypt  from 'bcryptjs';
//para obtener el email/password
export const postLogin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length <= 0) return res.status(404).json({message: "No existe el usuario"});

        const compare = await bcrypt.compare(password, rows[0].password);

        if (compare) {
            
            res.json({email: email})
        } else return res.status(404).json({message: "Contraseña incorrecta."})

    } catch (error) {
                
        return res.status(500).json({
            message: "Algo salió mal"
        });
    }
}

//para registrar un usuario en la base con un post
export const postRegister = async  (req, res) => {
    const {email, password} = req.body;

    const [exists] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (exists.length <= 0){

        const salt = await bcrypt.genSalt(10);
        const cryptedPassword = await bcrypt.hash(password, salt);

        try {
            const [rows] = await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, cryptedPassword]);
            res.send("Usuario creado exitosamente.")
    
        } catch (error) {
            console.log(error)
                            
            return res.status(500).json({
                message: "Algo salió mal"
            });
        }
    } else {
        return res.status(404).json({message: "Ya existe el usuario."});
    }

}

//para resetear la contraseña con patch
export const patchPassword = async (req, res) => {
    // const {id}= req.params;
    const {email, password} = req.body;
        
            const salt = await bcrypt.genSalt(10);
            const cryptedPassword = await bcrypt.hash(password, salt);
        
            try {
                const [result] = await pool.query("UPDATE users SET password = IFNULL(?, password) WHERE email = ?", [cryptedPassword, email]);
        
                if (result.affectedRows === 0) return res.status(404).json({
                    message: "Usuario no encontrado"
                })
                res.send("reseteando password")
            } catch (error) {
                                        
                return res.status(500).json({
                    message: "Algo salió mal"
                });
            }
}
