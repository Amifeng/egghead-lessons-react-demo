import React from 'react';
import ReactDOM from 'react-dom'

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 }
        // this.update = this.update.bind(this)
    }

    // update() {
    //     this.setState({ val: this.state.val + 1 })
    // }

    update = () => {
        this.setState({ val: this.state.val + 1 })
    }

    componentWillMount() {
        console.log('componentWillMount');
        this.setState({ m: 2 })
    }

    render() {
        console.log('render');
        return <button onClick={this.update}>
            {this.state.val * this.state.m}
        </button>
    }

    componentDidMount() {
        console.log('componentDidMount')
        console.log(ReactDOM.findDOMNode(this))
        this.inc = setInterval(this.update, 500)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {

    mount = () => {
        ReactDOM.render(<Lifecycle />, document.getElementById('m'))
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('m'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount}>Mount</button>
                <div id="m"></div>

                <hr />
                <button onClick={this.unmount}>UnMount</button>

            </div>
        )
    }
}

export default Wrapper