import React, { Component } from 'react';
import FilterGrease from './FilterGrease';
import SortName from './SortName';
import SortWeight from './SortWeight';

class NavBar extends Component {
  render(){
    return(
      <div>
        <SortName handle={this.props.handleName} />
        <SortWeight handle={this.props.handleWeight}/>
        <FilterGrease handle={this.props.handleGrease}/>
      </div>
    )
  }
}
export default NavBar
