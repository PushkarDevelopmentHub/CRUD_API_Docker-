import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from './data/createUserTable.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use('/api', userRoutes);

//Error Handling Middleware
app.use(errorHandler);

//Create User Table
createUserTable();

//testing postgress
app.get("/", async(req, res) => {
    const result = await pool.query('SELECT current_database()');
    res.send(`Connected to database: ${result.rows[0].current_database}`);

})

//Server running
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})