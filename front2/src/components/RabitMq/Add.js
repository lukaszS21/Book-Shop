import { useEffect, useState } from "react";
import axios from "axios";
import "./add.css";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export default function Add() {
    const [status, setStatus] = useState(false);
    const [notification, setNotification] = useState("");
    const [timer, setTimer] = useState(false);

    const messages = [
        "Great new audiobooks!",
        "Buy it today!",
        "Looking for something interesting to read?",
        "Buy it now!",
    ];

    const getRandomMessage = () => {
        return messages[Math.floor(Math.random() * messages.length)];
    };

    const getNotification = async () => {
        try {
            const response = await api.get("/rabbit/reciveMesage");

            if (response.data !== "") {
                setNotification(response.data);
                setStatus(true);
            } else {
                setStatus(false);
            }
        } catch (error) {
            console.log(error);
            setStatus(false);
        }
    };

    const sendNotification = async () => {
        try {
            await api.get(`/rabbit/message?message=${getRandomMessage()}`);
        } catch (error) {
            console.log(error);
        }
    };

    const changeTimer = () => {
        if (timer) {
            setStatus(false);
            setTimer(false);
            return;
        }

        getNotification();
        setTimer(true);
    };

    useEffect(() => {
        const notificationTimer = setTimeout(changeTimer, 4000);
        const sendTimer = setTimeout(sendNotification, 4000);

        return () => {
            clearTimeout(notificationTimer);
            clearTimeout(sendTimer);
        };
    }, [timer]);

    return (
        <div className="Add">
            <div className={`toastBody ${status ? "toastBodyVisible" : ""}`}>
                <span className="toastIcon">🔥</span>

                <div className="toastContent">
                    <span className="toastLabel">Special offer</span>
                    <p>{notification || "Discover our newest books and audiobooks."}</p>
                </div>
            </div>
        </div>
    );
}