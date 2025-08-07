import { Router } from "express";
import { createJob } from "../controllers/job.controller.js";

const router = Router();

router.route("/createjob").post(createJob);

export default router;
