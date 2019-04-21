import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        // props.tabs -> title, content
        this.state = {
            tabTitle: Object.keys(this.props.tabs)[0],
            tabImage: ""
        };
        this.updateTab = this.updateTab.bind(this);
        this.headerClasses = this.headerClasses.bind(this);
        this.fetchImage = this.fetchImage.bind(this);
    }

    updateTab (event) {
        let currTab = event.currentTarget.innerText;
        this.fetchImage(currTab);
    }

    headerClasses (tab) {
        if (tab === this.state.tabTitle) {
            return "tab-header-active";
        } else {
            return "";
        }
    }

    fetchImage(currTab) {
        switch (currTab) {
            case 'dogs':
                return $.ajax({
                    url: 'https://dog.ceo/api/breeds/image/random',
                    type: "GET"
                }).then(res => {
                    this.setState({ 
                        tabTitle: currTab,
                        tabImage: res.message});
                });
            case 'cats':
                return $.ajax({
                    url: 'https://aws.random.cat/meow',
                    type: "GET"
                }).then(res => this.setState({ 
                    tabTitle: currTab,
                    tabImage: res.file }));
            case 'sloths':
                this.setState({ 
                    tabTitle: currTab,
                    tabImage: './css/images/baby-sloth.jpg'
                });
        }
    }

    componentWillMount() {
        this.fetchImage(this.state.tabTitle);
    }
    // fetchJobListings() {
    //     // Fetch job listings based on state
    //     return $.ajax({
    //         url: `https://79vzv34gc4.execute-api.us-west-1.amazonaws.com/default/jobListings?location=${this.state.location}`,
    //         type: "GET",
    //     }).then(res => this.setState({ listings: res }));
    // }

    render () {
        return (
            <div className="tabs">
                <ul className="tab-headers">
                    {Object.keys(this.props.tabs).map (tab => {
                       return( <h1 className={this.headerClasses(tab)}onClick={this.updateTab}> {tab} </h1>)
                    })}
                </ul>
                <article>
                    <p>{this.props.tabs[this.state.tabTitle].content}</p>
                    <div className="tab-image-div">
                        <img className="tab-image" src={this.state.tabImage}></img>
                    </div>
                </article>
            </div>
        )
    }
}



export default Tab;