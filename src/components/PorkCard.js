import React from "react"

class PorkCard extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Name: {this.props.hog.name}</li>
          <p>Picture here</p>
          <p>We want this on click</p>
          <li>Specialty: {this.props.hog.specialty}</li>
          <li>Greased: {this.props.hog.greased ? "Greeeeezy" : "Meh"}</li>
          <hr />
        </ul>
      </div>
    )
  }
}

export default PorkCard
