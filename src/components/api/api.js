import axios from "axios";

const API_KEY = "37014640-9c46812dfd82041fe339e82c5";
const BASE_URL = "https://pixabay.com/api/";

 const  getAllImages = (name, page=1)=>{
    return axios.get(`${BASE_URL}?key=${API_KEY}&per_page=12&q=${name}&page=${page}`)
}

export {getAllImages}
