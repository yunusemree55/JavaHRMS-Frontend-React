import axios from "axios"


class SocialMediaService{

    getAll(){

        return axios.get("http://localhost:8080/api/socialmedias/getall")

    }

    getSocialMediaByUserId(id){
        return axios.get(`http://localhost:8080/api/socialmedias/getsocialmediabyuserid/${id}`)
    }

    add(socialMedia){
        axios.post("http://localhost:8080/api/socialmedias/add",socialMedia)
    }
    

}

export default SocialMediaService