import React, { useState } from "react";
import JobForm from "./components/Jobform";
import JobPreview from "./components/JobPreveiw";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const addJob = () => {
    setJobs([
      ...jobs,
      {
        title: "",
        introduction: "",
        responsibilities: "",
        experience: { min: "", max: "" },
        qualifications: "",
        salary: "",
        callToAction: "",
        company: "",
        location: "",
        type: "",
        labels: [],
      },
    ]);
    setActiveJobIndex(jobs.length);
  };

  const updateJob = (index, updatedJob) => {
    const newJobs = jobs.map((job, i) => (i === index ? updatedJob : job));
    setJobs(newJobs);
  };

  const deleteJob = (index) => {
    const newJobs = jobs.filter((_, i) => i !== index);
    setJobs(newJobs);
    setActiveJobIndex(0);
  };

  const duplicateJob = (index) => {
    const jobToDuplicate = jobs[index];
    setJobs([...jobs, jobToDuplicate]);
  };

  return (
    <div className="bigconatiner">
      <div className="Containerapp">
        <div className="button_container">
          <button onClick={addJob} className="shine_button">
            <span>New Job</span>
          </button>
          {jobs.map((job, index) => (
            <div key={index} className="">
              <button
                onClick={() => setActiveJobIndex(index)}
                className="job_number_button"
              >{`Job Post ${index + 1}`}</button>
              <button
                onClick={() => duplicateJob(index)}
                className="duplicate_btn"
              >
                Duplicate
              </button>
              <button onClick={() => deleteJob(index)} className="noselect btn">
                <span className="text">Delete</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
        <div className="hello">
          {jobs.length > 0 && (
            <JobForm
              job={jobs[activeJobIndex]}
              index={activeJobIndex}
              updateJob={updateJob}
            />
          )}
          {jobs.length > 0 && <JobPreview job={jobs[activeJobIndex]} />}
        </div>
      </div>
    </div>
  );
}

export default App;
