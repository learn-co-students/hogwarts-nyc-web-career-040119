import React from "react"
import PorkCard from "./PorkCard"

class PorkContainer extends React.Component {
  render() {
    const porkCards = this.props.hogs.map(hog => {
      return <PorkCard
        key={hog.name}
        hog={hog} />
    })

    return (
      <div>
        Hello from PorkContainer
        {porkCards}
      </div>
    )
  }
}

export default PorkContainer
