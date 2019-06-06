import React from "react"

class PorkSort extends React.Component {
  handleChange = (event) => {
    this.props.sortHogs(event.target.value)
  }

  render() {
    return (
      <form>
        <select onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="name and weight">Name and Weight</option>
        </select>
      </form>
    )
  }
}

export default PorkSort
