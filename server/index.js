import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./utils/db.utils.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.get("/" , (req, res) =>{
    res.json({message : "Yes i am here"})
})

connectDB()

app.listen(PORT, ()=> {
    console.log(`Server started at ${PORT}`);
})