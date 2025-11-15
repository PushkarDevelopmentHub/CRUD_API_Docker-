import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userContorller.js';
import validateUser from '../middlewares/inputValidator.js';

const router = express.Router();

//Create User
router.post("/user", validateUser, createUser);

//Get All Users
router.get("/user", getAllUsers);

//Get User by ID
router.get("/user/:id", getUserById);

//Update User
router.put("/user/:id", validateUser, updateUser);

//Delete User
router.delete("/user/:id", deleteUser);

export default router; 