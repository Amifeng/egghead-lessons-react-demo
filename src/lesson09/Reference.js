import React from 'react';
import ReactDOM from 'react-dom';

class Reference extends React.Component {

    constructor() {
        super();
        this.state = { a: '---' }
    }

    update() {
        this.setState({
            a: this.refs.a.value,
            b: this.b.value,
            c: this.c.refs.input.value,
            d: ReactDOM.findDOMNode(this.d).value
        })
    }

    render() {
        return (
            <div> Reference:
                <hr />
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)} />
                <div>Reference-A: {this.state.a}</div>

                <hr />
                <input
                    ref={node => this.b = node}
                    type="text"
                    onChange={this.update.bind(this)} />
                <div>Reference-B: {this.state.b}</div>

                <hr />
                <Input
                    ref={component => this.c = component}
                    update={this.update.bind(this)} />
                <div>Reference-C: {this.state.c}</div>

                <hr />
                <InputD
                    ref={component => this.d = component}
                    update={this.update.bind(this)} />
                <div>Reference-D: {this.state.d}</div>

            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return (
            <div>
                <input ref="input" type="text" onChange={this.props.update} />
            </div>
        )
    }
}

class InputD extends React.Component {
    render() {
        return (
            <input type="text" onChange={this.props.update} />
        )
    }
}

export default Reference