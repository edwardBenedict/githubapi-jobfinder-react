import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import JobCard from "./components/JobCard";

function App() {
  const [info, setInfo] = useState({ description: "", location: "" });
  const [jobs, setJobs] = useState();

  const getInfo = () => {
    axios({
      method: "get",
      url: `/positions.json?description=${info.description}&location=${info.location}`,
    })
      .then(function (response) {
        console.log(response.data);
        setJobs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getJobs = () => {
    console.log(info);
    getInfo();
  };

  return (
    <div className="App">
      <h1>Github Jobs</h1>
      <input
        type="text"
        onChange={(e) => {
          setInfo({ ...info, description: e.target.value });
        }}
        value={info.description}
        placeholder="Description"
      />
      <input
        type="text"
        onChange={(e) => {
          setInfo({ ...info, location: e.target.value });
        }}
        value={info.location}
        placeholder="Location"
      />
      <button onClick={getJobs}>Search</button>
      {jobs?.map((job, index) => (
        <JobCard
          key={index}
          company={job?.company}
          company_logo={job?.company_logo}
          company_url={job?.company_url}
          location={job?.location}
          type={job?.type}
          title={job?.title}
        />
      ))}
    </div>
  );
}

export default App;
