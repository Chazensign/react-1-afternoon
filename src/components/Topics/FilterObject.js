import React, { Component } from 'react'


export default class FilterObject extends Component {
  constructor() {
    super()
    this.state = {
        unfilteredArray: 
      [{ name: 'Bob',
        age: 35,
        haircolor: 'Brown',
        state: 'Utah',
        hobby: 'Skiing'
      },
      { name: 'Joe',
        age: 25,
        haircolor: 'Blond',
        hobby: 'Skiing'
      },
      { name: 'Jack',
        age: 39,
        state: 'Califonia',
        hobby: 'Surfing'
      },
      { age: 31,
        haircolor: 'Brown',
        state: 'Alaska',
        hobby: 'Mountaineering'
      }],
      userInput: '',
      filteredArray: []
    }
  }
        filterArr = () => {
          this.setState({
            filteredArray: this.state.unfilteredArray.filter(obj => obj.hasOwnProperty(this.state.userInput))
          })
        }
  render() {
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>{JSON.stringify(this.state.unfilteredArray)}</span>
        <input onChange={e => this.setState({userInput: e.target.value})} className='inputLine'/>
        <button onClick={() => this.filterArr()} className='confirmationButton'>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  
  }
}
