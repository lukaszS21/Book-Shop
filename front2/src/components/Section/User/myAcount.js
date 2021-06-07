import React from "react";
import axios from "axios";
import "./myAcount.css"

class myAcount extends React.Component {

    handleSubmit=event=>{
        event.preventDefault()
        console.log("tu")
        const user={
            userDetails:{
                username:this.name,
                surname:this.surname,
                phone:this.phone,
                adres:this.adres
            }

        };
        console.log(user);


        axios.put("/api/users/UserDetails/"+localStorage.getItem("id"),user).then(
            res=>{
                console.log(res);
            }
        ).catch(
            err=>{
                console.log(err);
            }
        )

    };
    render() {
        return (
            <div className='settings'>
                <div>
                    <p className='settings-title'>ustawienia</p>
                </div>


                <div className='accountSettings-wrapper'>

                    <form
                        className='accountSettings-form'
                        action='submit'
                        onSubmit={this.handleSubmit}
                    >
                        <label className='accountSettings-label'>IMIE</label>
                        <input
                            name='username'
                            className='input-account'
                            placeholder='imie'
                            onChange={event => this.name=event.target.value}

                            type='text'
                        />
                        <label className='accountSettings-label'>NAZWISKO</label>
                        <input
                            name='surname'
                            className='input-account'
                            placeholder='nazwisko'
                            onChange={event => this.surname=event.target.value}
                            type='text'
                        />
                        <label className='accountSettings-label'>TELEFON</label>
                        <input
                            name='phone'
                            className='input-account'
                            placeholder='telefon'
                            onChange={event => this.phone=event.target.value}

                            type='text'
                        />
                        <label className='accountSettings-label'>Adres</label>
                        <input
                            name='adres'
                            className='input-account'
                            placeholder='adres'
                            onChange={event => this.adres=event.target.value}
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
}


export default myAcount;
