import React, { Component } from 'react';


class SortName extends Component {
  render(){
    return(
      <button onClick={this.props.handle}>Name</button>
    )
  }
}
export default SortName
