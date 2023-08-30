import axios from "axios"


class ProgrammingLanguageService{

    getAll(){
        
        return axios.get("http://localhost:8080/api/programminglanguages/getall")

    }

}

export default ProgrammingLanguageService