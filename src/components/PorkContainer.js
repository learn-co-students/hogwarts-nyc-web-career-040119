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
      <div className="ui grid">
        <div className="row">
          <PorkSortFilter
            sortHogs={this.props.sortHogs}
            filtered={this.props.filtered}
            greasyHogs={this.props.greasyHogs} />
        </div>

        <div className="row">
          <div className="ui grid">
            {porkCards}
          </div>
        </div>
      </div>
    )
  }
}

export default PorkContainer
