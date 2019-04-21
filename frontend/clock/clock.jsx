import React from 'react';
import ReactDOM from 'react-dom';
import TimeDate from './timedate';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        

    }

    render() {
        return (
            <div className="clock">
                <h2>Clock </h2>
                <div className="clock-time-date">
                    {<TimeDate />}
                </div>  
            </div>
        );
    }


}


export default Clock;