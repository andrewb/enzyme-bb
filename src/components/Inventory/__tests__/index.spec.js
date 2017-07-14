import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../Header';
import Inventory from '../index';
import Product from '../../Product';

jest.mock('../../Header');
jest.mock('../../Product');

describe('<Inventory />', () => {
  it('renders a <Header />', () => {
    const wrapper = shallow(<Inventory />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('renders a list of <Product /> components', () => {
    // NOTE: This is an example of the power of mocking. Product has multiple
    // required props but in this situation those props are irrelevant. By mocking
    // we can simplify the test and also make it less fragile.
    const products = [
      { sku: '123' },
      { sku: '456' },
      { sku: '789' }
    ];
    const wrapper = shallow(<Inventory products={products} />);
    expect(wrapper.find(Product).length).toEqual(3);
  });

  it('gives each list item a unique key', () => {
    const products = [
      { sku: '123' },
      { sku: '456' },
      { sku: '789' }
    ];
    const wrapper = shallow(<Inventory products={products} />);
    expect(wrapper.find('.inventory__list-item').map(i => i.key())).toEqual(['123', '456', '789']);
  });
});
