import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('<Header />', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Header title="Hello!" />);
    expect(wrapper.find('h1').text()).toEqual('Hello!');
  });
});
