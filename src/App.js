import React, { Component } from "react";
import RewardCard from "./components/RewardCard";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

class App extends Component {
  state = {
    data: { name: "Jerry", points: 300, attempt: 0 },
    show: false,
    reward: undefined,
    collected: false,
  };

  handleRandomNumber = () => {
    console.log("handle random number");     
    return Math.floor((Math.random() * 100) + 1);
  };

  handleRewardPoints = () => {
    if(this.state.data.attempt<3 && !this.state.show){
      const rewardPts =this.handleRandomNumber();
      const newData=this.state.data;
      newData.attempt+=1;
      this.setState({reward: rewardPts,show:true,data:newData});
      console.log("handle reward points");
    }else{

    }
  };

  handleCollect = () => {
    console.log("handle collect");
    console.log(this.state.show);
    if(this.state.show){
        const rewardWon = this.state.reward;
        const newData = this.state.data;
        newData.attempt=3;
        newData.points+=rewardWon;
        this.setState({data:newData,collected:true});
    }else{
      alert("Kindly click your reward card");
    }
  };

  handleRetry = () => {
    this.setState({reward: undefined, show: false });
  };

  render() {
    return (
      
      <div className="app">
        <ProfileCard data={this.state.data}/>
        <RewardCard 
            getReward={()=>this.handleRewardPoints()} 
            collect={()=> this.handleCollect()}
            retry={()=>this.handleRetry()}
            state={this.state}      
        />
      </div>
    );
  }
}

export default App;
