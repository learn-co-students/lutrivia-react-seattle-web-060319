import React from 'react';
import Question from '../components/Question';


function QuestionList({ questions, handleSubmit }) {

    console.log(questions)

    return (
        <div>
            <form name='quiz' onSubmit={handleSubmit}>
                {questions.map((q, index) => {
                    return <Question q={q} key={questions.indexOf(q)} index={index} />
                })}
                <input type="text" placeholder="Name" name="name" />
                <input type="submit" name="submit" value="Submit Answers" />
            </form>
        </div>
    )
}

export default QuestionList