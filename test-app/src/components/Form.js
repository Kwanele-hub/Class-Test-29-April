import React, { useState } from 'react';

function Form() {

    const [enterNumber, setEnterNumber] = useState("");
    const [outComes, setOutComes] = useState ("");
const handleSubmit = (e) => {
    e.preventDefault();
    if (enterNumber) {
        setOutComes(underScore(enterNumber));
      }

}
const underScore = (number) => {
    
    const stringNumber = number.toString().split("")

    var numbers = [];

    for (var i = 0; i < stringNumber.length; i++) {

      if (stringNumber[i] % 2 === 0 && stringNumber[i + 1] % 2 === 0) {

        numbers.push(stringNumber[i] + "_")
      }}
    
  
    return numbers.join("")
  }

    return (
        <div>
            <form onSubmit={handleSubmit}>
        Enter numbers
        <input
          type="number"
          onChange={(e) => setEnterNumber(e.target.value)}
          id="number"
          value={enterNumber}
          
        />
        <button type="submit">Add</button>
      </form>
      {outComes && (
        <span>
          {""}
          <h2>{outComes}</h2>
        </span>
      )}
           
        </div>
    )
}

export default Form
