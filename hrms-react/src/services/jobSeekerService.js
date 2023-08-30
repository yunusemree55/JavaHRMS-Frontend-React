import axios from "axios"


class JobSeekerService{

    getAll(){

        return axios.get("http://localhost:8080/api/jobseekers/getall")

    }
    
}

export default JobSeekerService