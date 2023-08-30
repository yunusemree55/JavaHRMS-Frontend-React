import React from 'react'
import JobAdvertisementItem from './JobAdvertisementItem';
import LoadingSide from './LoadingSide';

function JobAdvertisementList({data}) {
  return (
    <div>
      {
        data.length === 0 ? ( <LoadingSide />) : ( <JobAdvertisementItem data={data} />)
      }
      

   
        
    </div>
  )
}

export default JobAdvertisementList