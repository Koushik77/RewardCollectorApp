import React, { Component } from "react";
import userimg from "../images/user.png";

export class ProfileCard extends Component {
  render() {
    return (
      <div className="ProfileCard">
        <img src={userimg} width="150px" height="150px" alt="user profile"/>
        <h2>Hey {this.props.data.name}!</h2>
        <h2>Reward Points</h2>
        <h1>{this.props.data.points}</h1>
      </div>
    );
  }
}

export default ProfileCard;
