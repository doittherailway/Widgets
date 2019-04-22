import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: "",
            searchResults: this.props.list
        };

        this.updateSearch = this.updateSearch.bind(this);
        this.matchResults = this.matchResults.bind(this);
    }




    updateSearch(event){
        let selectedItem = event.currentTarget.innerText;
        this.setState({searchResults: [selectedItem]});
    }

    matchResults(event){
        //find matching
        //event.target.value
        let inputStr = event.target.value.toLowerCase();
        let matching = this.props.list.filter((el) => el.startsWith(inputStr));
        
        //update state
        this.setState({
            searchResults: matching
        });
    }




    render() {
        return (
            <div className="autocomplete">
                <label>
                    Pokemon search:
                    <input type="text" className="auto-input" onChange={this.matchResults} defaultValue=""></input>
                </label>
                <ul>
                    {this.state.searchResults.map((el) => {
                        return (<li className={el} onClick={this.updateSearch}>{el}</li>)
                    })}
                </ul>
            </div>
        )
    }
}


export default Autocomplete;