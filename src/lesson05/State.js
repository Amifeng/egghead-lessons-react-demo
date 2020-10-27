import React from 'react'

class State extends React.Component {
    //为了让我们开始使用状态，我将在这里设置一个构造函数方法
    constructor() {
        // 第一件事就是，将调用super。这将为关键字“ this”提供组件中的上下文，而不是其父类React.Component。
        super();

        this.state = {
            txt: "this is the state txt",
            cat: 0
        }
    }

    // 创建update()的方法，该方法将接收一个事件 e 来更新状态
    update(e) {
        this.setState({ txt: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>{this.state.txt} - {this.state.cat}</h1>
                {/* <input type="text" onChange={this.update.bind(this)} /> */}
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
                <Widget update={this.update.bind(this)} />
            </div>
        )
    }
}

// 创建一个新的组件(一个无状态功能组件) 称为小部件,
const Widget = (props) =>
    <input type="text" onChange={props.update} />

export default State