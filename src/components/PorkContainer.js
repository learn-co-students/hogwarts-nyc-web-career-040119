import React from "react"
import PorkCard from "./PorkCard"
import PorkSortFilter from './PorkSortFilter'

class PorkContainer extends React.Component {
  render() {
    const porkCards = this.props.hogs.map(hog => {
      return <PorkCard
        key={hog.name}
        hog={hog} />
    })

    return (
      <div>
        <PorkSortFilter
          sortHogs={this.props.sortHogs}
          filtered={this.props.filtered}
          greasyHogs={this.props.greasyHogs} />
        Hello from PorkContainer
        {porkCards}
      </div>
    )
  }
}

export default PorkContainer
