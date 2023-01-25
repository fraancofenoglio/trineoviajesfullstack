import app from "./app.js"
import {PORT} from "./config.js"

app.listen(PORT);
console.log("server running on port: 3000");
//  /account y /login  y /forgot-password
// app.get("/account", (req, res) => {
//     res.send("obteniendo ordenes")
// });
// app.get("/login", (req, res) => {
//     res.send("obteniendo ordenes")
// });


//  /chekout y /register
// app.post("/account", (req, res) => {
//     res.send("posteando nueva orden")
// });
// app.post("/checkout", (req, res) => {
//     res.send("posteando nueva orden")
// });
// app.post("/register", (req, res) => {
//     res.send("registrando usuario")
// });
