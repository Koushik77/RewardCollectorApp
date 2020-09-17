import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import '../setupTests';

describe("testing App", () => {
    const data = {
        name: "Jerry",
        points: 300,
        attempt: 0
    }
    test("App content", () => {
        const component = shallow (
            <App/>);
        expect(component.find("div").find("ProfileCard").length).toBe(1);
        expect(component.find("div").find("RewardCard").length).toBe(1);
    });

    test("Reward Points", () => {
        const component = shallow (
            <App/>);
        component.instance().handleRandomNumber = jest.fn();
        component.instance().handleRandomNumber.mockReturnValueOnce(44);
        const data = {
            name: "Jerry",
            points: 300,
            attempt: 0
        }
        expect(component.state().data).toEqual(data);
        const data1 = {
            name: "Jerry",
            points: 300,
            attempt: 1
        }
        const spy = jest.spyOn(component.instance(), "handleRewardPoints");
        spy()
        expect(component.state().reward).toEqual(44)
        expect(component.state().data).toEqual(data1);
        expect(component.state().show).toEqual(true);
        const spy1 = jest.spyOn(component.instance(), "handleRetry");
        spy1()
        expect(component.state().reward).toEqual(undefined)
        expect(component.state().show).toEqual(false);
    });

    test("handleCollect if condition", () => {
        window.alert = jest.fn();
        const component = shallow (
            <App/>);
        const spy = jest.spyOn(component.instance(), "handleCollect");
        spy()
        expect(window.alert).toHaveBeenCalledWith("Kindly click your reward card");
    });

    test("handleCollect else condition ", () => {
        const component = shallow (
            <App/>);
        component.instance().handleRandomNumber = jest.fn();
        component.instance().handleRandomNumber.mockReturnValueOnce(44);
        const spy = jest.spyOn(component.instance(), "handleRewardPoints");
        spy()
        const spy1 = jest.spyOn(component.instance(), "handleCollect");
        spy1()
        expect(component.state().data).toEqual({name: "Jerry", points: 344, attempt: 3})
        expect(component.state().collected).toEqual(true);
    });
});
