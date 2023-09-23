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
    jobAdvertisementService.getAllActiveJobAdvertisements().then((result) =>
      
        dispatch(setJobAdvertisementList(result.data))
      
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
