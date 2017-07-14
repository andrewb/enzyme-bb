import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
  it('renders children', () => {
    const child = <span>Hello</span>;
    const wrapper = shallow(<Button onClick={() => {}}>{child}</Button>);
    expect(wrapper.contains(child)).toBe(true);
  });

  it('executes `onClick` on click', () => {
    // NOTE: This is an example of using a mock function and simulated interaction
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}><span>Hello</span></Button>);
    // Simulate a click
    wrapper.find('.button').simulate('click');
    // Did it get called?
    expect(onClick).toBeCalled();
  });
});
