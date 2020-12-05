import React, { Component } from 'react'

export class CloneElementExtend extends Component {
  render() {
    return (
      <Buttons>
        <button className="childA">A</button>
        <button className="childB">B</button>
        <button className="childC">C</button>
      </Buttons>
    )
  }
}

class Buttons extends Component {
  constructor() {
    super()
    this.state = { selected: 'None' }
  }

  selectItem(selected) {
    console.log(selected)
    this.setState({ selected: selected })
  }

  render() {
    let fn = (child) =>
      React.cloneElement(child, {
        onClick: this.selectItem.bind(this, child.props.children),
      })

    let items = React.Children.map(this.props.children, fn)
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default CloneElementExtend
