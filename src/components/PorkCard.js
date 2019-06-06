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



    return (
      <div id={this.props.hog.name} className ="pork-card" onClick={this.handleClick}>
        <ul>
          <img alt={this.props.hog.name} src={`/hog-imgs/${lowerHogName}.jpg`}/>
          <li>{this.props.hog.name}</li>
          {this.state.showDetails ? <div>
            <li>Specialty: {this.props.hog.specialty}</li>
            <li>Greased: {this.props.hog.greased ? "Greeeeezy" : "Meh"}</li>
          </div> : null}

          <hr />
        </ul>
      </div>
    )
  }
}

export default PorkCard
