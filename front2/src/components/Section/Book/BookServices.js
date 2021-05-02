import axios from "axios";

class BookServices{
        getAudiobooks(){
         return axios.get("http://localhost:8080/AudioBooks")
    }
}
export default new BookServices();