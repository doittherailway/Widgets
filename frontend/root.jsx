import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock/clock';
import Tab from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';


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
                <section>
                    <Weather />
                </section>
                <section>
                    <Autocomplete list={autoData}/>
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

const autoData = [
    "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"
];




export default Root;