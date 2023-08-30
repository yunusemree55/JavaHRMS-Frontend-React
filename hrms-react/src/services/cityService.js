import axios from "axios"



class CityService{

    getAll(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }

}

export default CityService