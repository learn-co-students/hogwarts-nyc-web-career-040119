import React from "react"
// import PorkSort from "./PorkSort"
// import PorkFilter from "./PorkFilter"

class PorkSortFilter extends React.Component {
  handleChange = (event) => {
    this.props.sortHogs(event.target.value)
  }
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Sort</label>
            <select
              className="ui dropdown"
              onChange={this.handleChange}>
              <option value="all">All</option>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
        </form>

        <button
          className={this.props.filtered ? "ui red button" : "ui blue button"}
          onClick={this.props.greasyHogs}>
          {this.props.filtered ? "Ungreazzze it" : "Greasy Piggies"}
        </button>
      </div>
    )
  }
}

export default PorkSortFilter
