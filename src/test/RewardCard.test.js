import React from "react";
import { shallow } from "enzyme";
import RewardCard from "../components/RewardCard";
import "../setupTests";
import tick from "../images/collected.png";

describe("Testing RewardCard Component", () => {
  test("checking Reward content", () => {
    const mockfn = jest.fn();
    const stateData = {
      data: {
        name: "Jerry",
        points: 300,
        attempt: 0
      },
      show: false,
      reward: undefined,
      collected: false
    };
    const component = shallow(
      <RewardCard
        getReward={mockfn}
        collect={mockfn}
        retry={mockfn}
        state={stateData}
      />
    );
    expect(
      component
        .find("div")
        .find("h1")
        .text()
    ).toBe("Get Your Reward");
    expect(
      component
        .find("div")
        .find("center")
        .find("div")
        .props().className
    ).toBe("RewardCard");
    expect(
      component
        .find("div")
        .find("center")
        .find("div")
        .props().id
    ).toBe("reward");
    expect(
      component
        .find(".RewardCard")
        .find("span")
        .props().className
    ).toBe("click");
    expect(
      component
        .find(".RewardCard")
        .find("span")
        .text()
    ).toBe("Click here");
    const buttons = component.find(".card2").find("button");
    expect(buttons.at(0).text()).toBe("Collect");
    expect(buttons.at(1).text()).toBe("Retry");
    expect(
      component
        .find("div")
        .find("h3")
        .text()
    ).toBe("3 attempts left");
  });

  test("Reward function calls ", () => {
    const mockfn1 = jest.fn();
    const mockfn2 = jest.fn();
    const mockfn3 = jest.fn();
    const stateData = {
      data: {
        name: "Jerry",
        points: 300,
        attempt: 0
      },
      show: false,
      reward: undefined,
      collected: false
    };
    const component = shallow(
      <RewardCard
        getReward={mockfn1}
        collect={mockfn2}
        retry={mockfn3}
        state={stateData}
      />
    );
    const rewardDiv = component
      .find("div")
      .find("center")
      .find("div");
    rewardDiv.simulate("click");
    expect(mockfn1).toHaveBeenCalled();
    const buttons1 = component
      .find(".card2")
      .find("button")
      .at(0);
    const buttons2 = component
      .find(".card2")
      .find("button")
      .at(1);
    expect(buttons1.props().disabled).toBe(false);
    buttons1.simulate("click");
    expect(mockfn2).toHaveBeenCalled();
    expect(buttons2.props().disabled).toBe(false);
    buttons2.simulate("click");
    expect(mockfn3).toHaveBeenCalled();
  });

  test("no more attempts in condition 1", () => {
    const mockfn = jest.fn();
    const stateData = {
      data: {
        name: "Jerry",
        points: 300,
        attempt: 3
      },
      show: true,
      reward: 44,
      collected: true
    };
    const component = shallow(
      <RewardCard
        getReward={mockfn}
        collect={mockfn}
        retry={mockfn}
        state={stateData}
      />
    );
    expect(
      component
        .find("div")
        .find("center")
        .find("div")
        .props().id
    ).toBe(null);
    expect(
      component
        .find(".RewardCard")
        .find("span")
        .text()
    ).toBe("44");
    expect(component.find(".RewardCard").find("img").length).toBe(1);
    console.log(component.find(".RewardCard").find("img"), "haha");
    expect(
      component
        .find(".RewardCard")
        .find("img")
        .props().src
    ).toBe(tick);
    expect(
      component
        .find("div")
        .find("h3")
        .text()
    ).toBe("No more attempts left");
    const buttons1 = component
      .find(".card2")
      .find("button")
      .at(0);
    const buttons2 = component
      .find(".card2")
      .find("button")
      .at(1);
    expect(buttons1.props().disabled).toBe(true);
    expect(buttons2.props().disabled).toBe(true);
  });

  test("no more attempts in condition 2", () => {
    const mockfn = jest.fn();
    const stateData = {
      data: {
        name: "Jerry",
        points: 300,
        attempt: 3
      },
      show: true,
      reward: 44,
      collected: false
    };
    const component = shallow(
      <RewardCard
        getReward={mockfn}
        collect={mockfn}
        retry={mockfn}
        state={stateData}
      />
    );
    expect(
      component
        .find("div")
        .find("center")
        .find("div")
        .props().id
    ).toBe(null);
    expect(
      component
        .find(".RewardCard")
        .find("span")
        .text()
    ).toBe("44");
    expect(
      component
        .find("div")
        .find("h3")
        .text()
    ).toBe("No more attempts left");
  });

});
