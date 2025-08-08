import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

function JobForm() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    type: "",
    salary: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSeletChange = (value) => {
    setFormData({ ...formData, type: value });
  };

  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-100">
      <CardContent className="p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="title"
                className="text-sm font-semibold text-gray-700"
              >
                Job Title *
              </Label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Frontend Developer"
                className={`h-12 border-2 rounded-xl transition-all duration-200`}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="company"
                className="text-sm font-semibold text-gray-700"
              >
                Company *
              </Label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Creuto"
                className={`h-12 border-2 rounded-xl transition-all duration-200`}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="location"
                className="text-sm font-semibold text-gray-700"
              >
                Location *
              </Label>
              <Input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. India"
                className={`h-12 border-2 rounded-xl transition-all duration-200 `}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="type"
                className="text-sm font-semibold text-gray-700"
              >
                Job Type
              </Label>
              <Select value={formData.type} onValueChange={handleSeletChange}>
                <SelectTrigger className="w-full min-h-fit border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-blue-200">
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-2">
                  <SelectItem value="Full-time" className="rounded-lg">
                    Full-time
                  </SelectItem>
                  <SelectItem value="Part-time" className="rounded-lg">
                    Part-time
                  </SelectItem>
                  <SelectItem value="Contract" className="rounded-lg">
                    Contract
                  </SelectItem>
                  <SelectItem value="Remote" className="rounded-lg">
                    Remote
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="salary"
              className="text-sm font-semibold text-gray-700"
            >
              Salary *
            </Label>
            <Input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="e.g. 10 LPA"
              className={`h-12 border-2 rounded-xl transition-all duration-200`}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="requirements"
              className="text-sm font-semibold text-gray-700"
            >
              Requirements *
            </Label>
            <Textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="List the key requirements, skills, and qualifications..."
              rows={5}
              className={`border-2 rounded-xl transition-all duration-200 resize-none `}
            />
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              Post Job
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default JobForm;
