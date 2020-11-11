import React from 'react';
import ReactDOM from 'react-dom';

class PropsReceived extends React.Component {

    constructor() {
        super()
        this.state = { increasing: false }
    }

    update = () => {
        ReactDOM.render(
            <PropsReceived val={this.props.val + 1} />,
            document.getElementById('root')
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ increasing: nextProps.val > this.props.val })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 === 0
    }

    render() {
        console.log(this.state.increasing)
        return (
            <button onClick={this.update}>
                {this.props.val}
            </button>
        )
    }

    componentDidUpdate(preProps, preState){
        console.log(`preProps: ${preProps.val}`)
    }
}

PropsReceived.defaultProps = { val: 0 }

export default PropsReceived