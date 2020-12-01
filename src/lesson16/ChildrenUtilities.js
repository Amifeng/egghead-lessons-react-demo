import React, { Component } from 'react'

export class ChildrenUtilities extends Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
        <div className="childC"></div>
      </Parent>
    )
  }
}

class Parent extends Component {
  render() {
    // console.log(this.props.children)
    // let items = this.props.children.map((child) => child)
    // console.log(items)

    // TODO #1: React.Children.map 来遍历子节点，而不用担心 this.props.children 的数据类型是 undefined 还是 object。
    // let items = React.Children.map(this.props.children, (child) => child)
    // console.log(items)

    // TODO #2: 将children转换为数组- React.Children.toArray 方法
    // let items = React.Children.toArray(this.props.children)
    // console.log(items)

    // TODO #3: 遍历所以的子组件，并输出它们的 className
    // let items = React.Children.forEach(this.props.children, (child) =>
    //   console.log(child.props.className),
    // )

    // TODO #4: 只能处理只有一个子组件的情况，否则会报错
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default ChildrenUtilities
