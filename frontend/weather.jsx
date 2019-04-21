import React from 'react';
import { request } from 'https';

class Weather extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            location: {
                lat: "",
                lon: "",
                name: "",
            },
            temperature: ""
        };

        this.locReqSuccess = this.locReqSuccess.bind(this);
        this.weatherRequest = this.weatherRequest.bind(this);
    }


    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.locReqSuccess);
    }

    render() {
        return (
            <div>
                Weather for {this.state.location.name}
            </div>
        )
    }

    locReqSuccess(pos) {
        // debugger;
        this.setState({
            location: {
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            }
        
        });
        // debugger;
        console.log(pos.coords.latitude, pos.coords.longitude);
        this.weatherRequest();
    }

    weatherRequest() {
        
        let lat = this.state.location.lat + "";
        let lon = this.state.location.lon + "";
        

        var wRequest = new XMLHttpRequest();
        wRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&APPID=412bc052597c3655ebb5d05c76a73c5f', true);

        wRequest.onload = () => {
            if (wRequest.status >= 200 && wRequest.status < 400) {
                var resp = JSON.parse(wRequest.responseText);
                this.setState({
                    location: {
                        name: resp.name
                    }
                })
                debugger;
                console.log(this.state.location);
                // debugger;
            } else {
                // debugger;
            }
        }

        wRequest.send();
        

        console.log(wRequest);
        // debugger;
       
    }

}

export default Weather;