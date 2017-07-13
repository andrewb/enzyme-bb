import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
  it('renders children', () => {
    const child = <div>Hello</div>;
    const wrapper = shallow(<Button onClick={() => {}}>{child}</Button>);
    expect(wrapper.contains(child)).toBe(true);
  });

  it('executes `onClick` on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick} />);
    wrapper.find('.button').simulate('click');
    expect(onClick).toBeCalled();
  });
});
