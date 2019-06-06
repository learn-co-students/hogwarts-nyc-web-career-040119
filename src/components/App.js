import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PorkContainer from './PorkContainer'

class App extends Component {
  state = {
    sortBy: 'all'
  }

  sortHogs = (porkSelectOption) => {
    switch (porkSelectOption){
      default:
        this.setState({
          sortBy: 'all'
        }, () => console.log('sortHogs default state:', this.state))
        break
      case ('name and weight'):
        this.setState({
          sortBy: porkSelectOption
        }, () => console.log('sortHogs name and weight state:', this.state))
        break
    }
  }

  // come back to this
  hogs = this.state.sortBy === 'all' ? hogs : hogs.sort(hog => hog.name[0].sort(hogWeight => hogWeight['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']))

  render() {
    return (
      <div className="App">
        <Nav sortHogs={this.sortHogs} />
        <PorkContainer hogs={hogs} />
      </div>
    )
  }
}

export default App;
