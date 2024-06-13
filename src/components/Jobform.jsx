import React from "react";
import "../styles/JobForm.css";

function JobForm({ job, index, updateJob }) {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    let updatedJob = { ...job };
    if (type === "checkbox") {
      if (name.startsWith("show")) {
        updatedJob[name] = checked;
      } else {
        if (checked) {
          updatedJob.labels.push(value);
        } else {
          updatedJob.labels = updatedJob.labels.filter(
            (label) => label !== value
          );
        }
      }
    } else if (name.includes(".")) {
      const [key, subKey] = name.split(".");
      updatedJob[key][subKey] = value;
    } else {
      updatedJob[name] = value;
    }
    updateJob(index, updatedJob);
  };

  return (
    <div className="job_form_conatiner">
      <h1 className="heading_jobForm">Job Form</h1>
      <form>
        <div className="input_box">
          <input
            type="checkbox"
            name="showTitle"
            onChange={handleChange}
            checked={job.showTitle || false}
          />
          <label className="joblabel">Job Post Title</label>
          <input
            name="title"
            value={job.title}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showIntroduction"
            onChange={handleChange}
            checked={job.showIntroduction || false}
          />
          <label className="joblabel">Introduction</label>
          <textarea
            name="introduction"
            value={job.introduction}
            onChange={handleChange}
            className=""
          ></textarea>
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showResponsibilities"
            onChange={handleChange}
            checked={job.showResponsibilities || false}
          />
          <label className="joblabel">Roles & Responsibilities</label>
          <textarea
            name="responsibilities"
            value={job.responsibilities}
            onChange={handleChange}
            className=""
          ></textarea>
        </div>
        <div className="">
          <input
            type="checkbox"
            name="showExperience"
            onChange={handleChange}
            checked={job.showExperience || false}
          />
          <div className="input_box">
            <label className="joblabel">Experience Range (yrs)</label>
            <input
              name="experience.min"
              value={job.experience.min}
              onChange={handleChange}
              className=""
            />
          </div>
          <div className="input_box">
            <label className="joblabel">to</label>
            <input
              name="experience.max"
              value={job.experience.max}
              onChange={handleChange}
              className=""
            />
          </div>
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showQualifications"
            onChange={handleChange}
            checked={job.showQualifications || false}
          />
          <label className="joblabel">Qualifications</label>
          <textarea
            name="qualifications"
            value={job.qualifications}
            onChange={handleChange}
            className=""
          ></textarea>
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showSalary"
            onChange={handleChange}
            checked={job.showSalary || false}
          />
          <label className="joblabel">Salary Range</label>
          <input
            name="salary"
            value={job.salary}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showCallToAction"
            onChange={handleChange}
            checked={job.showCallToAction || false}
          />
          <label className="joblabel">
            Call To Action Concluding Statement
          </label>
          <textarea
            name="callToAction"
            value={job.callToAction}
            onChange={handleChange}
            className=""
          ></textarea>
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showCompany"
            onChange={handleChange}
            checked={job.showCompany || false}
          />
          <label className="joblabel">Company</label>
          <input
            name="company"
            value={job.company}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showLocation"
            onChange={handleChange}
            checked={job.showLocation || false}
          />
          <label className="joblabel">Job Location</label>
          <input
            name="location"
            value={job.location}
            onChange={handleChange}
            className=""
          />
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showType"
            onChange={handleChange}
            checked={job.showType || false}
          />
          <label className="joblabel">Job Type</label>
          <select
            name="type"
            value={job.type}
            onChange={handleChange}
            className=""
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="input_box">
          <input
            type="checkbox"
            name="showLabels"
            onChange={handleChange}
            checked={job.showLabels || false}
          />
          <label className="joblabel">Labels</label>
          <div>
            <input
              type="checkbox"
              name="labels"
              value="Remote"
              onChange={handleChange}
              checked={job.labels.includes("Remote")}
            />{" "}
            Remote
          </div>
          <div className="">
            <input
              type="checkbox"
              name="labels"
              value="5 Day week"
              onChange={handleChange}
              checked={job.labels.includes("5 Day week")}
            />{" "}
            5 Day week
          </div>
        </div>
      </form>
    </div>
  );
}

export default JobForm;
