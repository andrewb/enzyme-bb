import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';
import Inventory from '../../Inventory';
import Toggle from '../../Toggle';

describe('<App />', () => {
  it('renders an <Inventory />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Inventory).exists()).toBe(true);
  });
  it('renders a cart <Toggle />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Toggle).exists()).toBe(true);
  });
});
