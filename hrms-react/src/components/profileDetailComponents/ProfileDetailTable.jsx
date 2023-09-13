import React from "react";
import { useSelector } from "react-redux";
import EmployerDetailTable from "./EmployerDetailTable";
import JobSeekerDetailTable from "./JobSeekerDetailTable";

function ProfileDetailTable() {

 const {isEmployer} = useSelector(state => state.auth)

  return (
    <>
      {isEmployer ? <EmployerDetailTable/> : <JobSeekerDetailTable />}
    </>
  );
}

export default ProfileDetailTable;
