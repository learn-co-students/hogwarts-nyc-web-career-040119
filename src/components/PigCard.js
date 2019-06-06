import React, {Component} from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class PigCard extends Component {
  constructor(){
    super();
    this.state = {
      isActive: true
    }
  }

  handleFrontClick = (e) => {
    this.setState({
      isActive: false
    })
  }

  handleBackClick = (e) => {
    this.setState({
      isActive: true
    })
  }



  display = () => {
    if(this.state.isActive){
      return < CardFront
        name={this.props.name}
        src={this.props.src}
        handle={this.handleFrontClick}
      />
    } else {
    return  < CardBack
        details={this.props.details}
        handle={this.handleBackClick}
      />
    }
  }
  render(){

    return(
      <div className="pigCard" >
      {this.display()}
      </div>
    );
  }
}
export default PigCard
