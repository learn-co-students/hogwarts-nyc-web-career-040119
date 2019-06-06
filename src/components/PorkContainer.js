import React from "react"
import PorkCard from "./PorkCard"

class PorkContainer extends React.Component {
  render() {
    const porkCards = this.props.hogs.map(hog => {
      // const lowerHogName = hog.name.split(" ").join("_").toLowerCase()
      // "/static/media/augustus_gloop.89b15029.jpg"
      // console.log(this.props.hogImages)

      return <PorkCard
        key={hog.name}
        // hogImage = {this.props.hogImages.lowerHogName}
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
