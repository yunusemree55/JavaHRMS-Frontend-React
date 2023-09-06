
import axios from "axios";

class EmployerService{

    getAll(){

        return axios.get("http://localhost:8080/api/employers/getall")

    }

    getEmployerByEmail(email){
        return axios.get(`http://localhost:8080/api/employers/getemployerbyemail/:email?email=${email}`)
    }

}

export default EmployerService