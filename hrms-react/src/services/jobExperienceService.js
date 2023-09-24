import axios from "axios"



class JobExperienceService{

    getAll(){

        return axios.get("http://localhost:8080/api/jobexperiences/getall")

    }

    add(jobExperience){
        axios.post("http://localhost:8080/api/jobexperiences/add",jobExperience)
    }

    getJobExperiencesByJobSeekerId(id){
        return axios.get(`http://localhost:8080/api/jobexperiences/getjobexperiencesbyjobseekerid/${id}`)
    }

}

export default JobExperienceService