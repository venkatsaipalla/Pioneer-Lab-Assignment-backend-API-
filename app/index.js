import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import YAML from "yamljs";
// Import Ethereum routes
import ethereumRoutes from "./routes/ethereumRoutes.js";
// import ethereumRoutes from "./routes/ethereumRoutes.js";
import swaggerUi from "swagger-ui-express";
// import swaggerDocument from "./swagger.json";
import { setupSwagger } from "./swagger.js";
import { errorHandler } from "./app/middleware/errorMiddleware.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Routes
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/auth", authRoutes);
app.use("/data", dataRoutes);
// Use Ethereum routes
app.use("/ethbalance", ethereumRoutes);

// Load Swagger document
const swaggerDocument = YAML.load("./swagger.yaml");

// Serve Swagger UI
setupSwagger(app, swaggerDocument);

// Swagger Documentation
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
