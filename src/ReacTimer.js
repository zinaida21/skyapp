import React from 'react'

export default class ReacTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      isCounting: false,
    }
  }

  componentDidMount() {
    // this.handleStart()
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  handleStart = () => {
    this.timerId = setInterval(
      () =>
        this.setState((prevState) => ({
          count: prevState.count + 1,
          isCounting: true,
        })),
      1000
    )
  }

  handleReset = () => {
    clearInterval(this.timerId)
    this.setState(() => ({
      count: 0,
      isCounting: false,
    }))
  }

  handleStop = () => {
    clearInterval(this.timerId)
    this.setState((prevState) => ({
      count: prevState.count,
      isCounting: false,
    }))
  }

  render() {
    return (
      <div className="ReacTimer">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button type="button" onClick={this.handleStart}>
            Start
          </button>
        ) : (
          <button type="button" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}
