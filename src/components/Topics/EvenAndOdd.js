import React, {Component} from 'react'


export default class EvenAndOdd extends Component {
  constructor() {
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }
  render() {
    return (
      <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input onChange={e => this.userInput = e.target.value}className='inputLine'/>
        <button onClick={() => this.solveInput()}className='confirmationButton'>Split</button>
        <span className='resultsBox'>Evens:{JSON.stringify(this.state.evenArray)}</span>
        <span className='resultsBox'>Odd:{JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
  solveInput() {
    let arr = this.userInput.split(',')
    this.setState({
      evenArray: arr.filter(num => num % 2 === 0),
      oddArray: arr.filter(num => num % 2 !== 0)
    })
  }
}