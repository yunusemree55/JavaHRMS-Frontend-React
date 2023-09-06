import axios from "axios"


class JobSeekerService{

    getAll(){

        return axios.get("http://localhost:8080/api/jobseekers/getall")

    }

    getJobSeekerByEmail(email){

        return axios.get(`http://localhost:8080/api/jobseekers/getjobseekerbyemailandpassword/email=:email?email=${email}`)
    }
    
    add(user){
        axios.post("http://localhost:8080/api/jobseekers/add",user)
    }

    existsJobSeekerIdentity(identityNumber){
        return axios.get(`http://localhost:8080/api/jobseekers/existsbyidentitynumber/:identityNumber?identityNumber=${identityNumber}`)
    }

    exitsJobSeekerEmail(email){
        return axios.get(`http://localhost:8080/api/jobseekers/existsbyemail/:email?email=${email}`)
    }
}

export default JobSeekerService