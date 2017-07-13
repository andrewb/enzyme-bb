import React from 'react';
import { shallow } from 'enzyme';
import Toggle from '../index';

describe('<Toggle />', () => {
  it('renders a toggle button', () => {
    const wrapper = shallow(<Toggle><div>Hello</div></Toggle>);
    expect(wrapper.find('.toggle__button').exists()).toBe(true);
  });

  it('toggles `this.state.isOpen` on click', () => {
    const wrapper = shallow(<Toggle><div>Hello</div></Toggle>);
    // Close it
    wrapper.setState({ isOpen: false });
    // Open it
    wrapper.find('.toggle__button').simulate('click', { preventDefault() {} });
    expect(wrapper.state('isOpen')).toBe(true);
    // Close it again...
    wrapper.find('.toggle__button').simulate('click', { preventDefault() {} });
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
    expect(wrapper.find('button').text()).toContain('My Label!');
  });
});
