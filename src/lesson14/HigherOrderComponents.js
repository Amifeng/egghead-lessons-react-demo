import React, { Component } from 'react'

const HOC = (InnerComponent) => class extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    update() {
        this.setState({ count: this.state.count + 1 })
    }

    componentWillMount() {
        console.log('Will Mount')
    }

    render() {
        return (
            <InnerComponent
                {...this.props}
                {...this.state}
                update={this.update.bind(this)}
            />
        )
    }
}

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

const Button = HOC((props) => {
    return <button onClick={props.update}>{props.children} - {props.count}</button>
})

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