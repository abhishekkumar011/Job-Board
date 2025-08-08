import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getJobs = () => axios.get(API_URL);
export const createJob = (data) => axios.post(API_URL, data);
export const updateJob = (id, data) => axios.put(`${API_URL}${id}`, data);
export const deleteJob = (id) => axios.delete(`${API_URL}${id}`);
