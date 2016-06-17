jest.unmock('../index');

import Header from '../index';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Header />', () => {
  it('renders a title', () => {
    const wrapper = shallow(<Header title="Hello!" />);
    expect(wrapper.find('h1').text()).toEqual('Hello!');
  });
});
