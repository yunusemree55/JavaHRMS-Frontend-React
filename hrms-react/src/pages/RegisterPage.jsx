import React, { useState } from 'react'
import EmployerRegisterForm from '../components/registerComponents/EmployerRegisterForm'
import JobSeekerRegisterForm from '../components/registerComponents/JobSeekerRegisterForm'

function RegisterPage() {

  const [isEmployer, setIsEmployer] = useState(false)
  
  const handleClickEmployerButton = () =>{
    setIsEmployer(false)
  }
  
  const handleJobSeekerButton = () => {
    setIsEmployer(true)
  }

  return (
    <>
      {isEmployer ? <EmployerRegisterForm handleClickEmployerButton={handleClickEmployerButton} /> : <JobSeekerRegisterForm handleJobSeekerButton = {handleJobSeekerButton} />}
    </>
  )
}

export default RegisterPage 