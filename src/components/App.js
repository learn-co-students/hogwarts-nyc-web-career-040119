import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import PigsContainer from './PigsContainer';
import pigs from '../porkers_data';
import NavBar from './NavBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      sort: "",
      pigs: [...pigs]
    }
  }

  handleSortName = (e) => {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55', e.target)
    let pigsObj = pigs.sort(function(a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {return -1;}
          if (nameA > nameB) {return 1;}
        })
    this.setState({pigs:pigsObj})
  }

  handleSortWeight = (e) => {
    let pigsObj = pigs.sort((a,b) => {
      return a.details.weight-b.details.weight
    })
    this.setState({pigs:pigsObj})

  }

  handleFilterGrease = (e) => {
    let pigsObj = pigs.filter((pig) => {
      return pig.details.greased === true
    })
    // console.log(pigsObj)
    this.setState({
      pigs:pigsObj
    },() => console.log("STATE UPDATED IN APP.JS", this.state))
    // console.log(this.state.pigs)
  }


  render() {
      return (
      <div className="App">
          < Header
            />
          < NavBar
          handleName={this.handleSortName}
          handleWeight={this.handleSortWeight}
          handleGrease={this.handleFilterGrease}

           />
          <PigsContainer pigs={this.state.pigs} />

      </div>
    )
  }
}

export default App;

// thanks tayshawn
