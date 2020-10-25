import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    let txt = this.props.txt
    let cat = this.props.cat
    return (
      <div>
        <h1>Hello World: {txt} - {cat}</h1>
        <b>Bold: {this.props.txt}</b>
      </div>
    )
  }
}

// 通过在组件中添加一个名为PropTypes的属性来定义要在组件中寻找的属性,对象
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number
}

//设置默认值
App.defaultProps = {
  txt: "This is the default txt",
  cat: 0
}

export default App