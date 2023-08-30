import React, { useState,useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Content from '../components/Content'
import JobAdvertisementService from "../services/jobAdvertisementService";

function Home() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  const getCompanyName = (name) =>{
    const jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getByCompanyName(name).then(result => setJobAdvertisements(result.data))
    

  }

  const getData = () => {
    const jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((result) => setTimeout(() => {
        setJobAdvertisements(result.data)
      }, 500));
  }
   
  useEffect(() => {
    getData()    
  },[]);

  
  
  
  return (
    <div>
        <Navbar getCompanyName={getCompanyName}/>
        <Content  data = {jobAdvertisements}/>
        

    </div>
  )
}

export default Home