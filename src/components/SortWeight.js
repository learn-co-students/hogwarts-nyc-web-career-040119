import React, { Component } from 'react';


class SortWeight extends Component {
  render(){
    return(
      <button onClick={this.props.handle}>Weight</button>
    )
  }
}
export default SortWeight
