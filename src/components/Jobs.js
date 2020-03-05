import React from "react";
import Job from "./Job";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import JobModal from "./JobModal";
import { Typography } from "@material-ui/core";

export default function Jobs({ jobs }) {
  //modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({}); //(Hook)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 20);
  const [activeStep, setActiveStep] = React.useState(0);
  const jobsOnPage = jobs.slice(activeStep * 20, activeStep * 20 + 20);

  //if step == 0, show 0-49
  //if step == 0, show 50-99

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />

      <Typography variant="h6" component="h2">
        <span>found</span>
        {numJobs}
        <span>jobs</span>
      </Typography>

      {jobsOnPage.map((job, i) => (
        <Job

          key={i}
          job={job}
          onClick={() => {
            handleClickOpen();
            selectJob(job);
          }}
        />
      ))}
      <div>
        Page {activeStep + 1} of {numPages}
      </div>
      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}
