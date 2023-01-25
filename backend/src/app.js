import express from 'express';
import orderRoutes from './routes/order.routes.js'
import userRoutes from './routes/user.routes.js'
import "./config.js"
const app = express();

app.use(express.json());
app.use(orderRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "404 NOT FOUND"
    })
})

export default app;