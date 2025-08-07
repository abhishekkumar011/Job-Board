import { Job } from "../models/job.model.js";

const createJob = async (req, res) => {
  try {
    const { title, company, location, type, salary, requirements } = req.body;

    if (!title || !company || !location || !type || !salary || !requirements) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const job = await Job.create({
      title,
      company,
      location,
      type,
      salary,
      requirements,
    });

    return res.status(200).json({ job, msg: "Job created successfully" });
  } catch (error) {
    console.error("Create Job Error:", error);
    res.status(500).json({ msg: "Error while creating job" });
  }
};

export { createJob };
