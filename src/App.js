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
  
  };

  handleRewardPoints = () => {
    
  };

  handleCollect = () => {
    
  };

  render() {
    return (
      <div className="app">
        {/* code here to render child components */}
      </div>
    );
  }
}

export default App;
