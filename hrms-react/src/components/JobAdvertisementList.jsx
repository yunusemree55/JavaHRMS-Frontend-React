import React from "react";
import JobAdvertisementItem from "./JobAdvertisementItem";
import LoadingSide from "./LoadingSide";
import { useSelector } from "react-redux";

function JobAdvertisementList() {

  const {jobAdvertisementList} = useSelector(state => state.jobAdvertisement)

  return (
    <>
      {jobAdvertisementList.length === 0 ? (
        <LoadingSide />
      ) : (
        <JobAdvertisementItem />
        
      )}
      
      
    </>
  );
}

export default JobAdvertisementList;
