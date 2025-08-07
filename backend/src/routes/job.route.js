import { Router } from "express";
import { createJob, getJobs } from "../controllers/job.controller.js";

const router = Router();

router.route("/createjob").post(createJob);
router.route("/").get(getJobs);

export default router;
