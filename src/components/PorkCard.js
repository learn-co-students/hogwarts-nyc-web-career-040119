import React from "react"


class PorkCard extends React.Component {
  state = {
    showDetails: false,
    hide: false
  }

  handleClick = (event) => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  handleHideClick = (event) => {
    this.setState({
      hide: !this.state.hide
    })
  }

  render() {
    // converts hog name into photo file name
    const lowerHogName = this.props.hog.name.split(" ").join("_").toLowerCase()

    const showDetails = (
      this.state.showDetails ?
        <div className="description">
          <p>Specialty: {this.props.hog.specialty}</p>
          <p>Greased: {this.props.hog.greased ? "Greeeeezy" : "Meh"}</p>
          <p>Weight in Refrigerators: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</p>
        </div>
        :
        null
    )

    const showCard = (
      !this.state.hide ?
        <div
          id={this.props.hog.name}
          className="ui card"
          onClick={this.handleClick} >

          <div className="image">
            <img alt={this.props.hog.name} src={`/hog-imgs/${lowerHogName}.jpg`}/>
          </div>

          <div className="content">
            <div className="header">{this.props.hog.name}</div>
            {showDetails}
          </div>
          <div className="extra content">
            <button
              onClick={this.handleHideClick}
              className="ui red button">
              Hide
            </button>
          </div>
        </div>
      :
        null
    )

    return (
      <div>
        {showCard}
      </div>
    )
  }
}

export default PorkCard
