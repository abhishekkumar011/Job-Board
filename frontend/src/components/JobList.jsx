import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Building2,
  Edit,
  Filter,
  IndianRupee,
  MapPin,
  Trash2,
} from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import JobForm from "./JobForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

function JobList({ jobs, onDelete, onEdit }) {
  return (
    <div className="my-20 px-5">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Latest Job Opportunities
        </h2>
        <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
          Discover your next career move from our curated selection of premium
          job opportunities
        </p>
      </div>

      <h2 className="text-center text-2xl uppercase font-medium text-blue-600">
        {jobs.length === 0 && "No jobs are found"}
      </h2>

      {jobs.map((job) => (
        <div className="max-w-5xl mx-auto" key={job._id}>
          <Card className="mb-10 hover:shadow-2xl transition-all duration-300 border border-gray-300 shadow-lg bg-white/80 backdrop-blur-sm transform hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {job.company.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 text-gray-900">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-6 text-gray-600">
                        <div className="flex items-center font-medium">
                          <Building2 className="w-5 h-5 mr-2 text-blue-500" />
                          {job.company}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-2 text-emerald-500" />
                          {job.location}
                        </div>
                        <div className="flex items-center font-semibold text-green-600">
                          <IndianRupee className="w-5 h-5 mr-1" />
                          {`${job.salary} LPA`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    className={`capitalize text-sm border font-medium px-3 py-1 ${
                      job.type === "fulltime"
                        ? "bg-green-200 text-green-500"
                        : "bg-purple-200 text-purple-500"
                    }`}
                  >
                    {job.type}
                  </Badge>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-center text-blue-600">
                            Edit Job
                          </DialogTitle>
                        </DialogHeader>
                        <JobForm
                          initialData={job}
                          onSubmit={(formData) => onEdit(job._id, formData)}
                        />
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-red-50 hover:border-red-300 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Job</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this job posting?
                            This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => onDelete(job._id)}
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Filter className="w-4 h-4 mr-2 text-blue-500" />
                    Requirements
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {job.requirements}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default JobList;
