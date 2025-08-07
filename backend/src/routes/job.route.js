import { Router } from "express";
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
} from "../controllers/job.controller.js";

const router = Router();

router.route("/createjob").post(createJob);
router.route("/").get(getJobs);
router.route("/:id").delete(deleteJob);
router.route("/:id").put(updateJob);

export default router;
