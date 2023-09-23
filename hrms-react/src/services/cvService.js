import axios from "axios"



class CvService{

    getAll(){
        return axios.get("http://localhost:8080/api/cvs/getall")
    }

    add(cv){
        axios.post("http://localhost:8080/api/cvs/add",cv)
    }

    update(cv){
        axios({
            url:"http://localhost:8080/api/cvs/update",
            method:"put",
            data:cv
        })
    }

}

export default CvService