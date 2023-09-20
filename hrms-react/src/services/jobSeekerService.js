import axios from "axios"


class JobSeekerService{

    getAll(){

        return axios.get("http://localhost:8080/api/jobseekers/getall")

    }

    getJobSeekerByEmail(email){ 

        return axios.get(`http://localhost:8080/api/jobseekers/getjobseekerbyemail/email=:email?email=${email}`)
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

    getJobSeeekerById(id){
        return axios.get(`http://localhost:8080/api/jobseekers/getjobseekerbyid/${id}`)
    }
}

export default JobSeekerService