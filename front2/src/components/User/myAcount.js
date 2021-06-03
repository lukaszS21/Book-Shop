import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "./getUserDetails";
import axios from "axios";


import {useHistory} from "react-router";

const AccountSettings = () => {
    const [userInput, setUserInput] = useState({
        username: "",
        surname: "",
        phone: "",
        adres: ""
    });

    const [avatar, setAvatar] = useState("EMPTY");
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector((state) => state.auth);


    useEffect(() => {
        getUserDetails().then((res) => {
                setUserInput({
                    username: res.username,
                    surname: res.surname,
                    phone: res.phone,
                    adres: res.adres

                })
            }
        );

        console.log(userInput);
    }, []);

    const handleInput = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value });
    };
    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
        }
    };
    const urlServer = `http://localhost:8080/api/users/${localStorage.getItem(
        "id"
    )}/edit`;
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(urlServer, userInput, config);
        getUserDetails().then((res) => {
            dispatch({type: "USERDATA_UPDATE", payload: res});
        });
    };

    //     await axios.put(url, userInput,config).catch((error) => handleNetworkError(error, () => history.replace("/")));
    //     getUserDetails().then((res) =>
    //         dispatch({ type: "USERDATA_UPDATE", payload: res }).catch((error) => handleNetworkError(error, () => history.replace("/")))
    //     ).catch((error) => handleNetworkError(error, () => history.replace("/")));
    // };


    return (
        <div className='settings'>
            <div>
                <p className='settings-title'>ustawienia</p>
            </div>

            <div className='accountSettings-wrapper'>

                <form
                    className='accountSettings-form'
                    action='submit'
                    onSubmit={handleSubmit}
                >
                    <label className='accountSettings-label'>IMIE</label>
                    <input
                        name='username'
                        className='input-account'
                        placeholder='imie'
                        value={userInput.username}
                        onChange={handleInput}
                        type='text'
                    />
                    <label className='accountSettings-label'>NAZWISKO</label>
                    <input
                        name='surname'
                        className='input-account'
                        placeholder='nazwisko'
                        value={userInput.surname}
                        onChange={handleInput}
                        type='text'
                    />
                    <label className='accountSettings-label'>TELEFON</label>
                    <input
                        name='phone'
                        className='input-account'
                        placeholder='telefon'
                        value={userInput.phone}
                        onChange={handleInput}
                        type='text'
                    />
                    <label className='accountSettings-label'>Adres</label>
                    <input
                        name='adres'
                        className='input-account'
                        placeholder='adres'
                        value={userInput.adres}
                        onChange={handleInput}
                        type='text'
                    />
                    <button className='accountSettings-btn' type='submit'>
                        Zapisz
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountSettings;