import React, { useState } from "react";
import JobSeekerLoginForm from "../components/loginComponents/JobSeekerLoginForm";
import EmployerLoginForm from "../components/loginComponents/EmployerLoginForm";

function LoginPage() {
  const [isEmployer, setIsEmployer] = useState(false);

  const handleEmployerButtonClick = () => {

    setIsEmployer(false)
  }
  
  const handleJobSeekerButtonClick = () => {

    setIsEmployer(true)

  }

  return (
    <>
      {isEmployer === true ? (
        <EmployerLoginForm handleEmployerButtonClick = {handleEmployerButtonClick} />
      ) : (
        <JobSeekerLoginForm handleJobSeekerButtonClick = {handleJobSeekerButtonClick}/>
      )}
    </>
  );
}

export default LoginPage;
