import React, { Component } from "react";
import tick from "../images/collected.png";
export class RewardCard extends Component {
  
  
  render() {
    const cardId= (this.props.state.show) ? null : "reward";
    const rewardText= (this.props.state.reward === undefined) ? "Click here" : this.props.state.reward;
    const attemptNo=3-this.props.state.data.attempt;
    return (
      <div className="card2">
        <h1>Get Your Reward</h1>
        <center>
          <div id={cardId} className="RewardCard" onClick={this.props.getReward}>
            <span className="click">{rewardText}</span>
            {this.props.state.collected ? <img className="collected-img" src={tick} alt="Reward Collected"/>: <></> }            
          </div>
        </center>
        <button onClick={this.props.collect} disabled={this.props.state.collected}>Collect</button>
        <button onClick={this.props.retry} disabled={this.props.state.collected || this.attemptNo===0}>Retry</button>
        <h3>{attemptNo > 0 
                              ? (attemptNo > 1 ? attemptNo + " attempts" : attemptNo + " attempt")
                              : "No more attempts"} left
        </h3>
      </div>
    );
  }
}

export default RewardCard;
