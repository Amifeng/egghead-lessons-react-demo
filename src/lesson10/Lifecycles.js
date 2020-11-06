import React from 'react';
import ReactDOM from 'react-dom'

class Lifecycle extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 }
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({ val: this.state.val + 1 })
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('render');
        return <button onClick={this.update}> {this.state.val} </button>  // this.update = this.update.bind(this)
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

class Wrapper extends React.Component {

    mount() {
        ReactDOM.render(<Lifecycle />, document.getElementById('m'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('m'))
    }

    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <div id="m"></div>

                <hr />
                <button onClick={this.unmount.bind(this)}>UnMount</button>

            </div>
        )
    }
}

export default Wrapper