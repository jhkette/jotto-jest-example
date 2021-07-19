import { shallow } from "enzyme";
import React from 'react'
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input"



const setUp = (secretWord='party') => {
    // const setupProps = { ...defaultProps, ...props };
    return shallow(<Input secretWord={secretWord} />)
}

test('renders without error', () => {
    const wrapper = setUp()
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);

})

test('does not throw warning with unexpected props ', ()=> {
    checkProps(Input, {secretWord: 'party'})
})

describe('state controlled input', () => {
    test('state updates with value of input on change', () => {
        const mocketSetCurrentGuesss = jest.fn();
        
    })
})