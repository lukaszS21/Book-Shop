import axios from "axios";

export const getUserDetails = async () => {
    const url = "http://localhost:8080/api/users/" + localStorage.getItem("id");
    const config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }


    let user = await axios.get(url, config);


    return user.data;
}