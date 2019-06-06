import React, { Component } from 'react';


class FilterGrease extends Component {
  render(){
    return(
      <button onClick={this.props.handle}>Greased</button>

    )
  }
}
export default FilterGrease
