import React, { Component } from "react"; 
import PropTypes from "prop-types";
import giphy from './giphy.gif';


class Decrement extends Component{  
    constructor(props){
        super(props);
        this.state = {number: props.start}; 
    }
    
    handleDecrement = (state) => {
        if(state.number === 1){
             return alert("Blast off");
        }
        this.setState({number: state.number - 1});
    };


    render() {
        return (
            <div>
                {this.state.number}{" "}
                <button onClick= {() => this.handleDecrement(this.state)}>
                    Decrement
                </button>
            </div>
        );
    }

}


Decrement.protoTypes = {
    start: PropTypes.number.isRequired,
};

export default Decrement;
