import React from 'react';

function Question({ q, index }) {
    return (
        <div>
            <p>{q.text}</p>
            <label>True </label><input type="radio" name={`question${index}`} value='true' />
            <label>False </label><input type="radio" name={`question${index}`} value='false' />
        </div>
    )
}

export default Question