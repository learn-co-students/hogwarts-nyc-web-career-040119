import React from "react"
import PorkSort from "./PorkSort"
import PorkFilter from "./PorkFilter"

class PorkSortFilter extends React.Component {
  render() {
    return (
      <div>
        <PorkSort sortHogs={this.props.sortHogs} />
        <PorkFilter />
      </div>
    )
  }
}

export default PorkSortFilter
