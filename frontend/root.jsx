import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock/clock';
import Tab from './tabs';


class Root extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div>
                <section>
                    <Clock />
                </section>
                <section>
                    <Tab tabs={tabData} />
                </section>
            </div>
        );
    }
}

const tabData = {
    "dogs": {content: "It's dogs."}, 
    "cats": {content: "Some cats maybe"},
    "sloths": {content: "This sloth is cute too"}
};




export default Root;