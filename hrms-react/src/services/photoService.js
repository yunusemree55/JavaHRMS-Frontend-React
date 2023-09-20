import axios from "axios";

class PhotoService {
  getAll() {
    return axios.get("http://localhost:8080/api/photos/getall");
  }

  update(photo) {
    axios({
      headers: { "content-type": "multipart/form-data" },
      method: "put",
      url: "http://localhost:8080/api/photos/update",
      data: photo,
    });
  }

  add(photo) {
    axios({
        headers: { "content-type": "multipart/form-data" },
        method: "post",
        url: "http://localhost:8080/api/photos/add",
        data: photo,
      });
  }

  getPhotoByUserId(id){
    return axios.get(`http://localhost:8080/api/photos/getphotobyuserid/${id}`)
  }
}

export default PhotoService;
