import React, { Component } from 'react';

const counterStyles = {
    color:'red',
    backgroundColor:'black',
    fontWeight:'bold',
    padding: 15
};

class Counter extends Component {
    state = {
        number:0
    }

    handleIncrease = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    handleDecrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render(){
        return(
            <div style={counterStyles}>
                <h1> Counter</h1>
                <div> value : {this.state.number}</div>
                <button onClick={this.handleIncrease}> + </button>
                <button onClick={this.handleDecrease}> - </button>
            </div>
        )
    }
}

export default Counter;
