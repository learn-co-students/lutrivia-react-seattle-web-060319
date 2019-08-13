import React from 'react';
import Question from './Question';

class GameContainer extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.questions.map(question => {return <Question  question={question} handleClick={this.props.handleClick}/>})}

      </div>
    );
  }
}

export default GameContainer;
