import React, { Component } from 'react';

export default class Repeator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countValue: 0
        }

        this.incrementClick = this.incrementClick.bind(this);
        this.decrementClick = this.decrementClick.bind(this);
        this.clearClick = this.clearClick.bind(this);
    }

    incrementClick() {
        console.log(this.state.countValue)
        this.setState(state => ({
            countValue: this.state.countValue++
        }))
    };

    decrementClick() {
        console.log(this.state.countValue)
        this.setState(state => ({
            countValue: this.state.countValue--
        }))
    };

    clearClick() {
        console.log(this.state.countValue)
        this.setState(state => ({
            countValue: this.state.countValue = 0
        }))
    };

    render() {

        return (
            <div className="repeator">
                <div className="repeator-count">
                    {this.state.countValue}
                </div>
                <div className="repeator-buttons">
                    <div className="repeator-buttons__Increment"><button onClick={this.incrementClick}>Increment</button></div>
                    <div className="repeator-buttons__Decrement"><button onClick={this.decrementClick}>Decrement</button></div>
                    <div className="repeator-buttons__Clear"><button onClick={this.clearClick}>Clear</button></div>
                </div>
            </div>
        );
    }
}