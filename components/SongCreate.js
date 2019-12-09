import React, { Component } from 'react'

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    render() {
        return (
            <div>
                <h3>Create A New Song</h3>
                <form>
                    <label>Song Title:</label>
                    <input 
                        value={this.state.title}
                        onChange={e=>this.setState({title:e.target.value})}
                    />
                </form>
            </div>
        )
    }
}

export default SongCreate;
