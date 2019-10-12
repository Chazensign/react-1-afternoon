import React, {Component} from 'react'

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      unfilterdArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filteredArray: []
    }
  }
  updateInput = (input) => {
    this.setState({
      userInput: input
    })
  }
    solve = () => {
       this.setState({ 
        filteredArray: this.state.unfilterdArray.filter(str => str.includes(this.state.userInput))
      })
    }
  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter Sting</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unfilterdArray)}</span>
        <input onChange={e => this.updateInput(e.target.value)} className="inputLine"></input>
        <button onClick={this.solve} className='confirmationButton'>Filter</button>
        <span className='resultsBox filterSrtingRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}