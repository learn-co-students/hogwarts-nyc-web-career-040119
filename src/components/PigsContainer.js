import React, {Component} from 'react';
import PigCard from './PigCard';


class PigsContainer extends Component {


  allPigs = () => this.props.pigs.map((pig) => {

    const imgTitle = pig.name.toLowerCase().split(" ").join("_") + ".jpg"
    const imgLoc = `./hogImgs/${imgTitle}`;

    return <PigCard
      name = {pig.name}
      details = {pig.details}
      src = {imgLoc}
    />
  })
  render(){
    return(
      <div className="pigs">
        {this.allPigs()}
      </div>
    );
  }
}
export default PigsContainer
