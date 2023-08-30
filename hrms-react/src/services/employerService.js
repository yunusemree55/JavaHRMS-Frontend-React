
import axios from "axios";

class EmployerService{

    getAll(){

        return axios.get("http://localhost:8080/api/employers/getall")

    }

}

export default EmployerService