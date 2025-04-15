import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDb } from "./lib/db.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Increase the limit for JSON payloads
app.use(express.json({ limit: "10mb", extended: true }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.listen(port, () => {
  console.log("Server running on port:" + port);
  connectDb();
});
