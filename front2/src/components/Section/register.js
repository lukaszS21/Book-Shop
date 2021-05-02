
import React,{Component} from 'react';
import './register.css'
export class register extends Component{
    render() {
        return (
            <div className={"section2"}>
                <div className="Back2">


                    <div className="Input2">
                        <div className="InputArea">
                                <input type="text" className={"inputstye"} placeholder="Enter Email "></input>

                        </div>
                        <div className="InputArea">
                            <input type="password" className={"inputstye"}  placeholder="Password"></input>
                        </div>
                        <div className="InputArea">
                            <input type="password" className={"inputstye"}  placeholder="confirmPassword"></input>
                        </div>
                        <div className="InputArea">
                            <input type="text"  className={"inputstye"} placeholder="YourName"></input>
                        </div>
                        <div className="InputArea">
                            <input type="text" className={"inputstye"}  placeholder="YourSurname"></input>
                        </div>
                        <div className="InputArea">
                            <input type="text"  className={"inputstye"} placeholder="Phone"></input>
                        </div>

                    </div>

                    <div >

                        <a className="ButtonCreate" href={"home"}>
                            Creata Account
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}

export default register;
