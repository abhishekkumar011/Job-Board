import { Router } from "express";
import {
  createJob,
  deleteJob,
  getJobs,
} from "../controllers/job.controller.js";

const router = Router();

router.route("/createjob").post(createJob);
router.route("/").get(getJobs);
router.route("/:id").delete(deleteJob);

export default router;
