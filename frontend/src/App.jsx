import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import JobList from "./components/JobList";
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
} from "./services/jobServices";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      setJobs(res.data.jobs);
    } catch (error) {
      console.error("Error fetching jobs", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCreateJob = async (formData) => {
    try {
      await createJob(formData);
      fetchJobs();
      toast.success("Job Created Successfully");
    } catch (error) {
      console.error("Error while creating job ", error);
      toast.error("Error while creating job");
    }
  };

  const handleJobDelete = async (id) => {
    try {
      await deleteJob(id);
      fetchJobs();
      toast.success("Job deleted successfully");
    } catch (error) {
      console.error("Error deleting job:", err);
      toast.error("Error deleting job");
    }
  };

  const handleJobUpdate = async (id, formData) => {
    try {
      await updateJob(id, formData);
      fetchJobs();
      toast.success("Job details updated successfully");
    } catch (error) {
      console.error("Error while updating job details", error);
      toast.error("Error while updating job details");
    }
  };

  return (
    <div>
      <HeroSection onCreate={handleCreateJob} />
      <JobList
        jobs={jobs}
        onDelete={handleJobDelete}
        onEdit={handleJobUpdate}
      />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
