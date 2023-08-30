import axios from "axios";


class DepartmentService{

    getAll(){

        return axios.get("http://localhost:8080/api/departments/getall")

    }
}

export default DepartmentService