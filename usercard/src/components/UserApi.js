import React from 'react';
import axios from 'axios';
import UserRepos from './UserRepos';
import UserProfile from './UserProfile';
import './UserApi.css';

class UserApi extends React.Component {
    state = {
        username: "",
        profile: null,
        repos: null,
    }

    updateInput = (e) => {
        this.setState({
            ...this.state,
            username: e.target.value,
        });
    };

    userLookup = (e) => {
        e.preventDefault();
        this.searchProfile();
    };

    searchProfile = () => {
        axios
        .get(`https://api.github.com/users/${this.state.username}`)
        .then((response) => {
            this.setState({
                profile: response.data,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    };

    render() {
        return (
            <form className="form" onSubmit={this.userLookup}>
                <label>Type name below: </label><br/>
                    <input 
                    value={this.state.username}
                    onChange={this.updateInput}
                    type="text"
                    placeholder="github username"
                    />
                
                <button className="submit-btn" type="submit">Search...</button>

                <div>
                    {this.state.profile ? (
                        <UserProfile profile={this.state.profile} />
                    ) : null}
                </div>

                <div>
                    {this.state.repos ? (
                        <UserRepos repos={this.state.repos} />
                    ) : null}
                </div>
            </form>
        )
    }
}

export default UserApi;