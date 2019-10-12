import React, {Component} from 'react'


export default class Palindrome extends Component {
  constructor () {
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }
  inputUpdate = (input) => {
    this.setState({
      userInput: input
    })
  }
  solvePal = () => {
    let str = this.state.userInput
    if (str.split('').reverse().join('') === str) {
      this.setState({
        palindrome: 'true'
    })
    }else {
      this.setState({
        palindrome: 'false'
      })
    }
  }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input onChange={e => this.inputUpdate(e.target.value)} className='inputLine'/>
        <button onClick={this.solvePal} className='confirmationButton'>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}