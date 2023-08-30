import axios from "axios"


class PhotoService{

    getAll(){

        return axios.get("http://localhost:8080/api/photos/getall")

    }

}

export default PhotoService



