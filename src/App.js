import React from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import logo from "./components/logo.svg";




const JOB_API_URL =
  "https://jobs.github.com/positions.json?description=ruby&page=1";
/*const jobs = [
  { title: "SWE 1", company: "Google" },
  { title: "SWE 1", company: "Facebook" },
  { title: "SWE 1", company: "Netflix" }
];*/
async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  let json = await res.json();

  updateCb(json);
}

export default function App() {
  const [jobList, updateJobs] = React.useState([""]);
  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: '#900C3F'}}>jrDev Jobs</p>
      </header>
     
      <Jobs jobs={jobList} />
    </div>
  );
}
