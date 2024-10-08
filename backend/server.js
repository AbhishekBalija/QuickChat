import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRooutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


app.use(cookieParser()); // parse cookies from request headers

dotenv.config();
const PORT  = process.env.PORT || 4000;


app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRooutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server listening on port ${PORT}`)
});