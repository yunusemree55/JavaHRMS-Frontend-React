import axios from "axios"


class LanguageService{

    getAll(){

        return axios.get("http://localhost:8080/api/languages/getall")

    }

}

export default LanguageService