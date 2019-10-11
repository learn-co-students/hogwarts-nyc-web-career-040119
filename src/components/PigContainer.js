import React, { Component } from 'react'
import  PigTile from './PigTile'

export default class PigContainer extends Component {

    render() {
        // console.log("hogs are here", this.props.hogs)
        return (
            <div className="ui grid container">
                {
                    this.props.hogs.map(hog => {
                        return <PigTile key={hog.name} hog={hog}/>
                    })
                }
            </div>
        )
    }
}
