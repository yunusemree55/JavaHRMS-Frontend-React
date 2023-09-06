import React from "react";
import JobAdvertisementItem from "./JobAdvertisementItem";
import LoadingSide from "./LoadingSide";

function JobAdvertisementList({ data }) {
  return (
    <>
      {data.length === 0 ? (
        <LoadingSide />
      ) : (
        <JobAdvertisementItem data={data} />
        
      )}
      
      
    </>
  );
}

export default JobAdvertisementList;
