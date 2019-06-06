import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PorkContainer from './PorkContainer'

class App extends Component {
  state = {
    sortBy: '',
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
        }, () => this.rerenderSortPigs(porkSelectOption))
        break
    }
  } // end sortHogs

  rerenderSortPigs = (currentSortByState) => {
    switch (this.state.sortBy){
      case ('all'):
        this.setState({
          hogs: [...hogs]
        })
        break
      case ('name'):
        const nameHogs = this.state.hogs.sort((a, b) => a.name.localeCompare(b.name))

        this.setState({
          hogs: [...nameHogs]
        })
        break
      case ('weight'):
        const weightHogs = this.state.hogs.sort((a, b) => {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        })
        this.setState({
          hogs: [...weightHogs]
        })
        break
    }
  }

  render() {
    return (
      <div className="App ui container">
        <Nav />
        <PorkContainer
          sortHogs={this.sortHogs}
          greasyHogs={this.greasyHogs}
          filtered={this.state.filtered}
          hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
