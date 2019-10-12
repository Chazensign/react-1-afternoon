import React, {Component} from 'react'


export default class Sum extends Component {

  constructor() {
    super()
    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  updateNum1 = (input1) => {
    this.setState({
      number1: input1
    })
  }
  updateNum2 = (input2) => {
    this.setState({
      number2: input2
    })
  }
  summed = () => {
    this.setState({
      sum: Number(this.state.number1) + Number(this.state.number2)
    })
  }
  render() {
    return (
      <div className='puzzleBox sumPB'>
      <h4>Sum</h4>
      <input type='number' onChange={e => this.updateNum1(e.target.value)} className='inputLine'></input>
      <input type='number' onChange={e => this.updateNum2(e.target.value)} className='inputLine'></input>
      <button onClick={this.summed} className='confirmationButton'>Add</button>
      <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}