import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./utils/db.utils.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.route.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.get("/" , (req, res) =>{
    res.json({message : "Yes i am here"})
})

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true
}));

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)



app.listen(PORT, ()=> {
    console.log(`Server started at ${PORT}`);
    connectDB()
})