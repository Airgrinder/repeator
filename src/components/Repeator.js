import React from 'react'

export default class Repeator extends Component() {
    constructor() {
        let count = {
            countValue: 0
        }

        function incrementClick() {
            count.countValue++
            console.log(count.countValue)
        }

        function decrementClick() {
            count.countValue--
            console.log(count.countValue)
        }

        function clearClick() {
            count.countValue = 0
            console.log(count.countValue)
        }

        return (
            <div className="repeator">
                <div className="repeator-count">
                    {count.countValue}
                </div>
                <div className="repeator-buttons">
                    <div className="repeator-buttons__Increment"><button onClick={incrementClick}>Increment</button></div>
                    <div className="repeator-buttons__Decrement"><button onClick={decrementClick}>Decrement</button></div>
                    <div className="repeator-buttons__Clear"><button onClick={clearClick}>Clear</button></div>
                </div>
            </div>
        )
    }
}