import React from 'react'

class MapComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        fetch('https://api.github.com/users/Amifeng/repos')
            .then(response => response.json())
            // .then(({results: items}) => this.setState({ items }))
            .then(results => this.setState({ items: results }))
    }

    // filter(e) {
    //     this.setState({ filter: e.target.value })
    // }
    filter = (e) => {
        this.setState({ filter: e.target.value })
    }

    render() {
        let items = this.state.items
        let filter = this.state.filter

        if (filter) {
            items = items.filter(item =>
                item.name.toLowerCase()
                    .includes(filter.toLowerCase())
            )
        }

        return (
            <div>
                <input type="text"
                    onChange={this.filter} />
                {items.map(item =>
                    <GitDemo key={item.id} demo={item} />)}
            </div>
        )
    }
}

const GitDemo = (item) => {
    return (
        <div>
            <h4 >{item.demo.name}</h4>
            <h6 >{item.demo.description}</h6>
        </div>
    )
}

export default MapComponents
