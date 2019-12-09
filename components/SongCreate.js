import React, { Component } from 'react';
import { graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';

import query from '../client/queries/fetchSongs';

class SongCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('value', this.state.title);
        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{ query }]
        })
            .then(() => hashHistory.push('/'))
    }
    render() {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>Create A New Song</h3>
                <form onSubmit={this.onSubmit.bind(this)}>
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

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title){
            title
        }
    }
`;

export default graphql(mutation)(SongCreate);
