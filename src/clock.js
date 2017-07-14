import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);

        var now = new Date();
        this.state = {
            now: now,
            partOfDay: this.getGreeting(now)
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        this.timerID = null;
    }

    getGreeting(date) {
        var currentHour = date.getHours();
        return currentHour < 12
            ? 'Good morning'
            : currentHour < 18
                ? 'Good afternoon'
                : 'Good evening';
    }

    tick() {
        var now = new Date();

        this.setState({
            now: now,
            partOfDay: this.getGreeting(now)
        });
    }

    render() {
        return (
            <h3>{this.state.partOfDay}. The time is {this.state.now.toLocaleTimeString()}</h3>
        );
    };
}

export default Clock;