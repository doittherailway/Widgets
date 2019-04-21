import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

class TimeDate extends React.Component {
  constructor(props) {
      super(props);
    this.state = { date: new Date() };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <div className="time-date">
          <section className="time">
          <p>Time:</p>
          <p>{this.state.date.toLocaleTimeString()}</p>
          </section>
          <section className="date">
          <p>Date:</p>
          <p>{this.state.date.toDateString()}</p>
          </section>
      </div>
    );
  }

}

export default TimeDate;
