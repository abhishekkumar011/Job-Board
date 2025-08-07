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
    return res.status(500).json({ msg: "Error while creating job" });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({}).sort({ createdAt: -1 });

    return res.status(200).json({ jobs, msg: "Jobs Fetched successfully" });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return res.status(500).json({ msg: "Failed to fetch jobs" });
  }
};

const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job", error);
    return res.status(200).json({ msg: "Failed to delete job" });
  }
};

const updateJob = async (req, res) => {
  try {
    const updatedJob = req.body;
    const jobId = req.params.id;

    const job = await Job.findByIdAndUpdate(jobId, updatedJob, { new: true });

    return res.status(200).json({ job, msg: "Job updated successfully" });
  } catch (error) {
    console.error("Error Updating job", error);
    return res.status(200).json({ msg: "Failed to update job" });
  }
};

export { createJob, getJobs, deleteJob, updateJob };
