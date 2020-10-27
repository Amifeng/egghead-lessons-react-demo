import React from 'react'

class PropsChildren extends React.Component {
    render() {
        return (
            <div>
                <h1> I <Heart /> React </h1>
                <Button> I <Heart /> React</Button>  {/* 嵌套的组件*/}
            </div>
        )
    }
}

const Button = (props) => <button> {props.children} </button>

class Heart extends React.Component {
    render() {
        return <span> &hearts; </span>
    }
}

export default PropsChildren