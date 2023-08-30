import axios from "axios"


class SocialMediaService{

    getAll(){

        return axios.get("http://localhost:8080/api/socialmedias/getall")

    }
    

}

export default SocialMediaService