import React from 'react';

class UserProfile extends React.Component {
    

    render() {
        let {name, avatar_url, bio, html_url, email, followers, following, blog} = this.props.profile;
        return (
            <div>
                <img src={avatar_url} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>User Bio: {bio}</p>
                    <p>User Email: {email}</p>
                    <p>Followers: {followers}</p>
                    <p>Following: {following}</p>
                    <p>User Blogs: {blog}</p>
                    <a 
                    href={html_url} 
                    alt="" 
                    target="_blank" 
                    rel="noreferrer">
                        Link to Github Profile
                    </a>
                </div>
            </div>
        );
    }
}

export default UserProfile;