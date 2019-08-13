import React from 'react';
import data from './data';
import GameContainer from './GameContainer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      score: 0,
      questions: data.questions,
      index: 0
    }
  }

  handleClick = (question, e) => {
    if(!question.answered) {
      if (e.target.name === question.answer.toString()) {
        e.target.className = 'correct'
        this.setState({
          score: this.state.score + 1
        })
        question.answered = true;
      } else {
        e.target.className = "wrong";
        question.answered = true;
      }
    }
  }

  handleNewClick = () => {
    this.setState({
      index: this.state.index + 5
    })
  }

  renderQuestions = () => {
    return this.state.questions.slice(this.state.index, this.state.index + 5)
  }

  render() {
    return (
      <div>
        <h1>Lutrivia</h1>
        <p>Score: {this.state.score}</p>
        <button onClick={this.handleNewClick}>New Game</button>
        <GameContainer questions={this.renderQuestions()} handleClick={this.handleClick}/>
        <form>
          <input type="text" placeholder='name'/>
          <input type="submit" value="Submit score"/>
        </form>
      </div>
    );
  }
}

export default App;
