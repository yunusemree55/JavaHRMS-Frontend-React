import axios from "axios"



class cvService{

    getAll(){
        return axios.get("http://localhost:8080/api/cvs/getall")
    }

}

export default cvService