import React from 'react'

const minVal = 1
const maxVal = 5

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { curCount: minVal }
  }

  increment = () => {
    if (this.state.curCount < maxVal) {
      this.setState((nextState) => ({ curCount: nextState.curCount + 1 }))
    }
  }

  decrement = () => {
    if (this.state.curCount > minVal) {
      this.setState((prevState) => ({ curCount: prevState.curCount - 1 }))
    }
  }

  render() {
    return (
      <div>
        <hr />
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <span> {this.state.curCount} </span>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <hr />
      </div>
    )
  }
}
