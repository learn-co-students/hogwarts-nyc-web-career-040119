import React from "react"


class PorkCard extends React.Component {
  state = {
    showDetails: false
  }

  handleClick = (event)=>{
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    // converts hog name into photo file name
    const lowerHogName = this.props.hog.name.split(" ").join("_").toLowerCase()

    const showDetails = (
      this.state.showDetails ?
        <div>
          <li>Specialty: {this.props.hog.specialty}</li>
          <li>Greased: {this.props.hog.greased ? "Greeeeezy" : "Meh"}</li>
          <li>Weight in Refrigerators: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
          <li>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</li>
        </div>
        :
        null
    )

    return (
      <div
        id={this.props.hog.name}
        className="pork-card" onClick={this.handleClick} >
        <ul>
          <img alt={this.props.hog.name} src={`/hog-imgs/${lowerHogName}.jpg`}/>
          <li>{this.props.hog.name}</li>
          {showDetails}
          <hr />
        </ul>
      </div>
    )
  }
}

export default PorkCard
