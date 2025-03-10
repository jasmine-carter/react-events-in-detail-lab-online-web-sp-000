// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {


handleClick = event => {
  event.persist();
  setTimeout(() => {
    this.props.onDelayedClick(event)
  }, this.props.delay);
}

setTimeout = () => {
  return this.props.delay
}

  render() {
    return (
      <button onClick={this.handleClick}>Delayed! </button>
    )
  }

}
export default DelayedButton
