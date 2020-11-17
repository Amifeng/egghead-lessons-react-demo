import React, { Component } from 'react'

// 高阶组件
const HOC = (InnerComponent) => class extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    update = () => {
        this.setState({ count: this.state.count + 1 })
    }

    componentWillMount() {
        console.log('Will Mount')
    }

    componentDidMount(){
        // 订阅更改...负责订阅相关的操作... 
        console.log('Did Mount')
    }

    componentWillUnmount(){
        // 清除订阅...负责取消订阅相关的操作...
        console.log('Will Unmount')
    }

    render() {
        // ... 并使用新数据渲染被包装的组件!
        // 请注意，我们可能还会传递其他属性
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                update={this.update}
            />
        )
    }
}

//根组件
export class HigherOrderComponents extends Component {
    render() {
        return (
            <div>
                <Button>button</Button>
                <hr />
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

//无状态组件
const Button = HOC((props) => {
    return <button onClick={props.update}>{props.children} - {props.count}</button>
})

// 传统组件
class Label extends Component {
    componentWillMount() {
        console.log('Label Will Mount')
    }
    render() {
        return (
            <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}

const LabelHOC = HOC(Label)

export default HigherOrderComponents