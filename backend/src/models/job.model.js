import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["fulltime", "Internship"],
    },
    salary: {
      type: Number,
      trim: true,
    },
    requirements: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
