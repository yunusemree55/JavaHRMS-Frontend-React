import axios from "axios"



class JobPositionService{

    getAll(){
        
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    
    }

}

export default JobPositionService