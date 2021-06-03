import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./add.css"
const api = axios.create({
    baseURL: `http://localhost:8080`
})

export default function Add() {
    const [status, setStatus] = useState(false);
    const [notification, setNotification] = useState("")
    const [timer, setTimer] = useState(false)
    const [info, setInfo]=useState([
        "Great new audiobooks!",
        "By it Today!",
        "You want to read something interesting?",
        "By it Now!"
    ])
    const changeStatus = (stat) => {
        setStatus(stat);
    }
    const changeTimer = () => {
        if (timer === true) {
            changeStatus(false);
            setTimer(false);

        } else {
            getNotification().then(()=>{
                console.log(notification);
                if(notification!==""){
                    changeStatus(true);
                }
            });
            setTimer(true);


        }
    }


    const getNotification = async () => {
        await api.get("/rabbit/reciveMesage").then(response => {
            if(response.data!=="")
                setNotification(response.data)
            else{
                changeStatus(false);
            }
        })

    }

    const sendNotification = () =>{
        api.get(`/rabbit/message?message=${randSpamer()}`)
    }


    const randSpamer = () =>{
        return  info[Math.floor(Math.random() * info.length)];
    }

    useEffect(() => {

        setTimeout(changeTimer,4000);
        setTimeout(sendNotification,4000);

    }, [timer]);


    return (

        <div className={"Add"}>

                <div className="toastBody">
                    <p>
                        <div>
                            {notification}
                        </div>

                    </p>

                </div>


        </div>


    )
}