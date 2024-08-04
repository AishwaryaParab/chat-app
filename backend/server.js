import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connect from "./db/connect.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(cookieParser()); // to access req.cookies

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connect();
    console.log(`Server running on port ${PORT}`);
});