import React from 'react';
import data from './data.js'
import QuestionList from './containers/QuestionList'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allQuestions: data.questions,
      questions: [],
      name: ''
    }
  }

  componentDidMount() {
    this.handleStart()
  }

  handleStart = () => {
    let selectedQs = []
    let num
    let allQs = [...this.state.allQuestions]
    for (let i = 0; i < 5; i++) {
      num = Math.floor(Math.random() * allQs.length)
      selectedQs.push(allQs.splice([num], 1)[0])
    }
    this.setState({ questions: selectedQs })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let score = 0
    for (let i = 0; i < this.state.questions.length; i++) {
      const q = this.state.questions[i];
      if (String(q.answer) == e.target.elements[`question${i}`].value) {
        console.log(q.answer)
        score++
      }
    }
    console.log(score)
    return score
  }

  render() {
    return (
      <div>
        <button onClick={this.handleStart}>New Game!</button>
        <QuestionList questions={this.state.questions} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
