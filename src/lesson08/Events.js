import React from 'react'

class Events extends React.Component {
    constructor() {
        super();
        this.state = { currentEvent: '---' }
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({ currentEvent: e.type })
    }

    render() {
        return (
            <div>
                <textarea
                    onKeyPress={this.update}  // 按键事件
                    onCopy={this.update}      // 复制事件
                    onCut={this.update}       // 剪切事件
                    onPaste={this.update}     // 粘贴事件
                    onFocus={this.update}     // 得到了焦点-触发的事件
                    onBlur={this.update}      // 失去了焦点-触发的事件
                    onDoubleClick={this.update}// 双击事件
                    // 自动获得一系列触摸事件。我要说的是：“触摸时，开始。触摸时，移动”，“触摸时，结束”。
                    // 对于以下这些触摸事件，将切换到iPad仿真器里才能监听到
                    onTouchStart={this.update} 
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                    cols="30"
                    rows="10" />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

export default Events