import axios from "axios";

class StatusService{

    getAll(){
        return axios.get("http://localhost:8080/api/statuses/getall")
    }
}

export default StatusService