import express from 'express';
import orderRoutes from './routes/order.routes.js'
import userRoutes from './routes/user.routes.js'
import "./config.js"
import cors from "cors"
const app = express();


// app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    // });
    
    
app.use(cors())
    
app.use(express.json());
  
app.use(orderRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "404 NOT FOUND"
    })
})

export default app;