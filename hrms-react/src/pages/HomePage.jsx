import React, {  useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Content from "../components/Content";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useDispatch } from "react-redux";
import { setJobAdvertisementList } from "../store/actions/jobAdvertisementActions";

function Home() {
  
  const dispatch = useDispatch()

  

  const getData = () => {
    const jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAll().then((result) =>
      setTimeout(() => {
        dispatch(setJobAdvertisementList(result.data))
      }, 500)
    );
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <Navbar />
      <Content />
    </>
  );
}

export default Home;
