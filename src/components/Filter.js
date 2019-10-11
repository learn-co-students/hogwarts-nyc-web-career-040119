import React, { Component } from 'react'

export default class Filter extends Component {

    handleChange = (e) => {
        this.props.handleFilter()
    }

    render() {
        return (
            <div>
                <label> 
                   <input type="checkbox" onChange={this.handleChange}/> 
                <span>Greased? </span>
                </label>
            </div>
        )
    }
}
