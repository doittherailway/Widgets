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
        this.clearSearch = this.clearSearch.bind(this);
    }




    updateSearch(event){
        let selectedItem = event.currentTarget.innerText;
        this.setState({
            inputVal: selectedItem,
            searchResults: [selectedItem]
        });
    }

    matchResults(event){
        //find matching
        //event.target.value
        let inputStr = event.target.value.toLowerCase();
        let matching = this.props.list.filter((el) => el.startsWith(inputStr));
        
        //update state
        this.setState({
            inputVal: inputStr,
            searchResults: matching
        });
    }

    clearSearch() {
        this.setState(
            {
                inputVal: "",
                searchResults: this.props.list
            }
        );
    }



    render() {
        return (
            <div className="autocomplete">
                <label>
                    Pokemon search:
                    <div className="search-bar">
                        <input type="text" className="auto-input" onChange={this.matchResults} value={this.state.inputVal}></input>
                        <button className="auto-button" onClick={this.clearSearch}>clear</button>
                    </div>
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