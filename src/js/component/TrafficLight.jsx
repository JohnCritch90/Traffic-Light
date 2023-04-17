import React from 'react';


export default class TrafficLight extends React.Component {

    constructor(){
        super();
        this.state = {
            clickedLight: null
        };
    }

    render(){
        console.log(this.state);
        let redExtraClass = "";
        if(this.state.clickedLight == "red") redExtraClass = "selected";
        let yellowExtraClass = "";
        if(this.state.clickedLight == "yellow") yellowExtraClass = "selected";
        let greenExtraClass = "";
        if(this.state.clickedLight == "green") greenExtraClass = "selected";

        return (
            <div>
                <div id="hanger"></div>
                <div id="container">
                    <div className={"redLight " + redExtraClass} onClick={() => this.setState({clickedLight: "red"})}></div>
                    <div className={"yellowLight " + yellowExtraClass} onClick={() => this.setState({clickedLight: "yellow"})}></div>
                    <div className={"greenLight " + greenExtraClass}onClick={() => this.setState({clickedLight: "green"})}></div>
                </div>
            </div>
        )
    }
}



{/* <div className={"redLight " + (trafficColor=="red"?"redGlow":"")} onClick={() => this.setState({clickedLight: "red"})}></div>
                    <div className={"yellowLight " + (trafficColor=="yellow"?"yellowGlow":"")} onClick={() => this.setState({clickedLight: "yellow"})}></div>
                    <div className={"greenLight " + (trafficColor=="green"?"greenGlow":"")}onClick={() => this.setState({clickedLight: "green"})}></div> */}