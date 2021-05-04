import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import JobCard from "./components/jobCard/JobCard";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import fof from "./assets/404.png";
import loadingGif from "./assets/loading.gif";
import Footer from "./components/footer/Footer";

function App() {
  const [info, setInfo] = useState({ description: "", location: "" });
  const [jobs, setJobs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getInfo = () => {
    setIsLoading(true);
    axios({
      method: "get",
      url: `/positions.json?description=${info.description}&location=${info.location}`,
    })
      .then(function (response) {
        console.log(response.data);
        setJobs(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
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
      {isLoading ? (
        <img className="loading-404" src={loadingGif} alt="loading" />
      ) : jobs?.length === 0 ? (
        <img className="loading-404" src={fof} alt="404" />
      ) : (
        jobs?.map((job, index) => (
          <JobCard
            key={index}
            company={job?.company}
            company_logo={job?.company_logo}
            company_url={job?.company_url}
            location={job?.location}
            type={job?.type}
            title={job?.title}
          />
        ))
      )}
      <Footer />
    </div>
  );
}

export default App;
