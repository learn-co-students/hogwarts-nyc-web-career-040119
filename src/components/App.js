import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PorkContainer from './PorkContainer'

class App extends Component {
  state = {
    hogs: hogs,
    filtered: false
  } // end state

  // ternery if greased or not then render that version here
  greasyHogs = () => {
    if (this.state.filtered) {
      this.setState({
        hogs: [...hogs],
        filtered: false
      })
    } else {
      const newHogs = [...this.state.hogs]
      let filteredHogs = newHogs.filter(hog => hog.greased !== false)
      this.setState({
        hogs: [...filteredHogs],
        filtered: true
      })
    }
  } // end greasyHogs

  sortHogs = (porkSelectOption) => {
    switch (porkSelectOption){
      default:
        this.setState({
          sortBy: porkSelectOption
        }, () => console.log('sortHogs changing state:', this.state))
        break
    }
  } // end sortHogs

  render() {
    return (
      <div className="App">
        <Nav />
        <PorkContainer
          greasyHogs={this.greasyHogs}
          filtered={this.state.filtered}
          hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
