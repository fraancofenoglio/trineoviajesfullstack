import {pool} from '../db.js'

//esto es para obtener las ordenes del usuario
export const getOrders = async (req, res) => {

    try {
        const [rows] = await pool.query("SELECT * FROM orders WHERE email = ?", [req.params.email]);
        if (rows.length <= 0) return res.status(404).json({message: "No hay ordenes"})
        res.json(rows)
    } catch (error) {

        return res.status(500).json({
            message: "Algo salió mal"
        })
    }  
}

//esto es cuando confirma la compra en el checkout
export const postOrder = async (req, res) => {

    const {resid, email, trips, totalPrice} = req.body;
    try {

        const [rows] = await pool.query("INSERT INTO orders(resid, email, trips, totalPrice) VALUES (?, ?, ?, ?)", [resid, email, trips, totalPrice]);

        res.send({
            id: rows.insertId,
            resid,
            email,
            trips,
            totalPrice
        });

    } catch (error) {
        
        return res.status(500).json({
            message: "Algo salió mal"
        });
    }
}

