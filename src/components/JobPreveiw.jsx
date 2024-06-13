import React from "react";

function JobPreview({ job }) {
  const formatText = (text) => {
    return text.split("\n").map((item, key) => (
      <React.Fragment key={key}>
        {item}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="job_preview_container">
      <h1 className="heading_jobPreview">Job Preview</h1>
      {job.showTitle && (
        <div className="header">
          <div className="preveiw_data">
            <h1>{job.title}</h1>
          </div>
          {job.showLabels && (
            <div className="tags_container">
              <div className="preview_item">
                <div className="tags">{job.labels.join(" & ")}</div>
              </div>
            </div>
          )}
        </div>
      )}
      {job.showIntroduction && (
        <div className="preview_item">
          <h3>
            {" "}
            <strong>Introduction:</strong>
          </h3>
          <div className="preveiw_data">{formatText(job.introduction)}</div>
        </div>
      )}
      {job.showResponsibilities && (
        <div className="preview_item">
          <h3>
            <strong>Roles & Responsibilities:</strong>
          </h3>

          <div className="preveiw_data">{formatText(job.responsibilities)}</div>
        </div>
      )}
      {job.showExperience && (
        <div className="preview_item">
          <div>
            <h3>
              <strong>Experience Range (yrs):</strong>
            </h3>
          </div>
          <div className="preveiw_data">
            {job.experience.min} to {job.experience.max}
          </div>
        </div>
      )}
      {job.showQualifications && (
        <div className="preview_item">
          <h3>
            {" "}
            <strong>Qualifications:</strong>
          </h3>
          <div className="preveiw_data">{formatText(job.qualifications)}</div>
        </div>
      )}
      {job.showSalary && (
        <div className="preview_item">
          <h3>
            {" "}
            <strong>Salary Range:</strong>
          </h3>

          <div className="preveiw_data">{job.salary}</div>
        </div>
      )}
      {job.showCallToAction && (
        <div className="preview_item">
          <h3>
            {" "}
            <strong>Call To Action Concluding Statement:</strong>
          </h3>

          <div className="preveiw_data">{formatText(job.callToAction)}</div>
        </div>
      )}
      {job.showCompany && (
        <div className="preview_item">
          <h3>
            {" "}
            <strong>Company:</strong>
          </h3>

          <div className="preveiw_data">{job.company}</div>
        </div>
      )}
      {job.showLocation && (
        <div className="preview_item">
          <h3>
            <strong>Job Location:</strong>
          </h3>

          <div className="preveiw_data">{job.location}</div>
        </div>
      )}
      {job.showType && (
        <div className="preview_item">
          <h3>
            {" "}
            <strong>Job Type:</strong>
          </h3>

          <div className="preveiw_data">{job.type}</div>
        </div>
      )}
    </div>
  );
}

export default JobPreview;
