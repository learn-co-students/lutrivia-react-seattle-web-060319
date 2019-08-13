import React from "react";
import './App.css';

class Question extends React.Component {
  render() {
    return (
      <div className='question'>
        <p>{this.props.question.text}</p>
        <button
          name="true"
          onClick={e => this.props.handleClick(this.props.question, e)}
        >
          True
        </button>
        <button
          name="false"
          onClick={e => this.props.handleClick(this.props.question, e)}
        >
          False
        </button>
      </div>
    );
  }
}

export default Question;
