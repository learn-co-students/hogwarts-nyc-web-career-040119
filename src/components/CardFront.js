import React, {Component} from 'react';
// import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'

class CardFront extends Component {

  render(){
    return(
      <div className="cardFront" onClick={this.props.handle}>
        <div>
          <img src={require(`${this.props.src}`)} alt={this.props.name}/>
        </div>
        <div>
          {this.props.name}
        </div>
      </div>
    );
  }
}
export default CardFront
