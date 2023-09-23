import React from "react";
import { useSelector } from "react-redux";
import JobAdvertisementItem from "../jobAdvertisementComponents/JobAdvertisementItem";
import LoadingSide from "../LoadingSide";

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
