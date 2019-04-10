import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()
    this.button = React.createRef()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render() {
    return (
      <button onClick={this.handleClick} ref={this.button}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
