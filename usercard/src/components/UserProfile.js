import React from 'react';

class UserProfile extends React.Component {
    

    render() {
        let {name, avatar_url, bio, html_url, email, followers, following, blog} = this.props.profile;
        return (
            <div>
                <img className="user-profile-image" src={avatar_url} alt="" />
                <div>
                    <p className="user-profile">Name: {name}</p>
                    <p className="user-profile">User Bio: {bio}</p>
                    <p className="user-profile">User Email: {email}</p>
                    <p className="user-profile">Followers: {followers}</p>
                    <p className="user-profile">Following: {following}</p>
                    <p className="user-profile">User Blogs: {blog}</p>
                    <a 
                    className="user-profile"
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