import React from "react";
import { Briefcase, Plus, Star } from "lucide-react";
import { Button } from "./ui/button";
import JobForm from "./JobForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

function HeroSection() {
  return (
    <div className="py-10 lg:pt-0 px-5 min-h-screen flex flex-col gap-10 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
        <Star className="text-yellow-400 w-4 h-4 mr-2" />
        <h4>#1 Job Board Platform</h4>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white leading-13 md:leading-20 text-center">
        Find Your
        <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Dream Job
        </span>
      </h1>

      <p className="text-lg md:text-2xl text-white/90 max-w-3xl text-center">
        Connect with top companies and discover opportunities that match your
        skills. Your next career move starts here.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button className="bg-white text-blue-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl">
          <Briefcase className="w-5 h-5" />
          Browse Jobs
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-white/10 border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm cursor-pointer">
              <Plus className="w-5 h-5" />
              Post a Job
            </Button>
          </DialogTrigger>
          <DialogContent className="min-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl text-blue-700 font-bold">
                Post New Job
              </DialogTitle>
            </DialogHeader>
            <JobForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20 max-w-4xl mt-10">
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
            10+
          </div>
          <div className="text-white/80 font-medium">Active Jobs</div>
        </div>
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
            500+
          </div>
          <div className="text-white/80 font-medium">Companies</div>
        </div>
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
            10K+
          </div>
          <div className="text-white/80 font-medium">Job Seekers</div>
        </div>
        <div className="text-center">
          <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
            95%
          </div>
          <div className="text-white/80 font-medium">Success Rate</div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
