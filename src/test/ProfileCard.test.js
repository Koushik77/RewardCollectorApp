import React from "react";
import { shallow } from "enzyme";
import ProfileCard from "../components/ProfileCard";
import "../setupTests";
import user from "../images/user.png";

describe("Testing ProfileCard Component", () => {
  const data = {
    name: "Jerry",
    points: 300,
    attempt: 0
  };
  test("Profile Card content", () => {
    const component = shallow(<ProfileCard data={data} />);
    const img = component.find("div").find("img");
    expect(img.length).toBe(1);
    expect(img.props().src).toBe(user);
    expect(img.props().width).toBe("150px");
    expect(img.props().height).toBe("150px");
    expect(
      component
        .find("div")
        .find("h2")
        .at(0)
        .text()
    ).toBe("Hey Jerry!");
    expect(
      component
        .find("div")
        .find("h2")
        .at(1)
        .text()
    ).toBe("Reward Points");
    expect(
      component
        .find("div")
        .find("h1")
        .text()
    ).toBe("300");
  });
});
