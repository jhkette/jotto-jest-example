import { shallow } from "enzyme";
import React from 'react'
import { findByTestAttr, checkProps } from "../test/testUtils";
import App from "./App"


test('renders learn react link', () => {
  const wrapper = shallow(<App />)
  const component = findByTestAttr(wrapper, "app-component");
  expect(component.length).toBe(1);

});
