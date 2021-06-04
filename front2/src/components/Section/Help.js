
import React,{Component} from 'react';
import "./help.css"
export class Help extends Component{
    render() {
        return (
            <div className={"section5"}>
                <div className={"tlo"}>
                    <div className={"help"}>
                        <div className={"word"}>You need help?</div>
                        <div className={"word"}>Contact us now</div>

                        <i className="word">Phone:508963621</i>
                        <i className="word">Email:lukaszstolarz@op.pl</i>
                        <i className="word">Monday- Friday 11:00-23:00</i>

                    </div>
                </div>
            </div>

        );
    }
}

export default Help;
