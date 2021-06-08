
import React,{Component} from 'react';
import axios from "axios";

export class homeLog extends Component{


    render() {
        return (
            <div className={"section2"}>
                <div className={"add"}>
                    <word>Reklama ksiazek</word>
                </div>
                <div className={"rec"}>
                    Polecane
                </div>
                <div className={"best"}>
                    Najlepsze Audiobooki
                </div>
            </div>

        );
    }
}

export default homeLog;
