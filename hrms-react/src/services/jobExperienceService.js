import axios from "axios"



class JobExperienceService{

    getAll(){

        return axios.get("http://localhost:8080/api/jobexperiences/getall")

    }

}

export default JobExperienceService