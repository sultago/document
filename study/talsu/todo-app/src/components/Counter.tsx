import React, { Component } from 'react';

interface Props {

}

interface State {
    counter: number;
}

class Counter extends Component<Props, State> {
    state: State = {
        counter: 0
    };

    onIncrement = (): void => {
        this.setState(({counter}) => ({counter: counter + 1}));
    }

    onDecrement = (): void => {
        this.setState(({counter}) => ({counter: counter - 1}));
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <h3>{this.state.counter}</h3>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default Counter;