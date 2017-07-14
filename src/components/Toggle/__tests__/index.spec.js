import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';
import Toggle from '../index';

describe('<Toggle />', () => {
  it('renders a toggle button', () => {
    const wrapper = shallow(<Toggle><div>Hello</div></Toggle>);
    expect(wrapper.find('.toggle__button').exists()).toBe(true);
  });

  // NOTE: here we are testing that a button click changes the component's state.
  // We're not concerned with how it does it (e.g. which internal method is
  // called). We're only concerned that the behavior works as we expect.
  it('toggles `this.state.isOpen` on <Button /> click', () => {
    const wrapper = shallow(<Toggle><div>Hello</div></Toggle>);
    const button = wrapper.find('.toggle__button').find(Button);
    // Close it
    wrapper.setState({ isOpen: false });
    // Open it
    button.simulate('click', { preventDefault() {} });
    expect(wrapper.state('isOpen')).toBe(true);
    // Close it again...
    button.simulate('click', { preventDefault() {} });
    expect(wrapper.state('isOpen')).toBe(false);
  });

  it('updates the `toggle__button` modifier', () => {
    const wrapper = shallow(<Toggle><div>Hello</div></Toggle>);
    wrapper.setState({ isOpen: false });
    expect(wrapper.find('.toggle__button').hasClass('toggle__button--is-closed')).toBe(true);
    wrapper.setState({ isOpen: true });
    expect(wrapper.find('.toggle__button').hasClass('toggle__button--is-open')).toBe(true);
  });

  it('shows children when open', () => {
    const child = <div>Hello</div>;
    const wrapper = shallow(<Toggle>{child}</Toggle>);
    // Open it
    wrapper.setState({ isOpen: true });
    expect(wrapper.find('.toggle__content').contains(child)).toBe(true);
  });

  it('hides children when closed', () => {
    const child = <div>Hello</div>;
    const wrapper = shallow(<Toggle>{child}</Toggle>);
    // Close it
    wrapper.setState({ isOpen: false });
    expect(wrapper.find('.toggle__content').contains(child)).toBe(false);
  });

  it('shows a custom label', () => {
    const wrapper = shallow(<Toggle label="My Label!"><div>Hello</div></Toggle>);
    expect(wrapper.find('.toggle__label').text()).toContain('My Label!');
  });
});
