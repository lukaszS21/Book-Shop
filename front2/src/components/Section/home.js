
import React,{Component} from 'react';

export class home extends Component{
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

export default home;
