import React, { Component } from "react";
import './Filter.css';


export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: ''
        };

        this.reset = this.reset.bind(this);
    }

    handleChange(val) {
        this.setState({ amount: val });
    }

    reset() {
        const { getProperties } = this.props;

        this.setState({ amount: '' });
        getProperties();
    }

    render() {
        const { filterProperties } = this.props;
        const { amount } = this.state;
        return (
            <div className="filter__container">
                <span className="filter_description">List properties with "desired rent" greator than: $</span>
                <input className="filter_input" onChange={(e) => this.handleChange(e.target.value)} placeholder="0" value={amount} />
                <button className="filter_button" onClick={() => filterProperties(amount)} > Filter </button>
                <button className="reset_button" onClick={this.reset} > Reset </button>
            </div>
        )
    }
}