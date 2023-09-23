import axios from "axios";

class JobAdvertisementService{

    getAll() {

        return axios.get("http://localhost:8080/api/jobadvertisements/getall")
        
    }

    getAllActiveJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getActiveJobAdvertisements")
    }
    
    add(jobAdvertisement){

        axios.post("http://localhost:8080/api/jobadvertisements/add",jobAdvertisement)
    }

    getByCompanyName(name){
        return axios.get(`http://localhost:8080/api/jobadvertisements/getJobAdvertisementByCompanyName/:companyName?companyName=${name}`)
    }


    getJobAdvertisementsByEmployerId(id){
        return axios.get(`http://localhost:8080/api/jobadvertisements/getjobadvertisementsbyemployerid/${id}`)
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/jobadvertisements/getJobAdvertisementById/:id?id=${id}`)
    }

    update(jobAdvertisement){

        axios({
            url:"http://localhost:8080/api/jobadvertisements/update",
            data:jobAdvertisement,
            method:"put"
        })
    }

}

export default JobAdvertisementService