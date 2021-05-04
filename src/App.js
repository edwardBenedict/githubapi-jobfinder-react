import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import JobCard from "./components/JobCard";
import Form from "./components/Form";
import Header from "./components/Header";

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

  const getJobs = (e) => {
    e.preventDefault();
    console.log(info);
    getInfo();
  };

  return (
    <div className="App">
      <Header />
      <Form setInfo={setInfo} info={info} getJobs={getJobs} />
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
