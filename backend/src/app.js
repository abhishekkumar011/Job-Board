import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));

import jobRouter from "./routes/job.route.js"
app.use("/api/v1/jobs", jobRouter)

export { app };
