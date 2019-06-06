import React, {Component} from 'react';
// import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'

class CardBack extends Component {


  render(){
    const greasy = this.props.details.greased

    return(
      <div className="cardBack" onClick={this.props.handle}>
        <ul>
          <li>greased: {greasy ? "Swimming Bacon":"Dry AF"}</li>
          <li>medal: {this.props.details.medal}</li>
          <li>specialty: {this.props.details.specialty}</li>
          <li>weight: {this.props.details.weight} </li>
        </ul>
      </div>
    );
  }
}
export default CardBack
