import React from "react";

import "./UserProfile.css";

class UserProfile extends React.Component {
  render() {
    let {
      name,
      avatar_url,
      bio,
      html_url,
      email,
      followers,
      following,
      blog,
    } = this.props.profile;
    return (
      <div>
        <img className="user-profile-image" src={avatar_url} alt="" />
        <div className="user-profile">
          <p>Name: {name}</p>
          <p>User Bio: {bio}</p>
          <p>User Email: {email}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>User Blogs: {blog}</p>
          <a
            className="user-profile"
            href={html_url}
            alt=""
            target="_blank"
            rel="noreferrer"
          >
            Link to Github Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserProfile;
