import axios from "axios"


class LanguageService{

    getAll(){

        return axios.get("http://localhost:8080/api/languages/getall")

    }

    add(language){
        axios.post("http://localhost:8080/api/languages/add",language)
    }

}

export default LanguageService