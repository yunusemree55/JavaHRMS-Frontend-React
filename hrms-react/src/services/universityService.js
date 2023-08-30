import axios from "axios"


class UniversityService{

    getAll(){

        return axios.get("http://localhost:8080/api/universities/getall")

    }

}


export default UniversityService