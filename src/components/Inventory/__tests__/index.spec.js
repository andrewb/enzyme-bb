import React from 'react';
import Header from '../../Header';
import Inventory from '../index';
import Product from '../../Product';
import { shallow } from 'enzyme';

jest.mock('../../Header');
jest.mock('../../Product');

describe('<Inventory />', () => {
  it('renders a <Header />', () => {
    const wrapper = shallow(<Inventory />);
    expect(wrapper.find(Header).length).toEqual(1);
  });
  
  it('renders each product', () => {
    const fn = () => {};
    const products = [
      { sku: '123', name: 'Foo', quantity: 1, onAddToCart: fn },
      { sku: '456', name: 'Bar', quantity: 2, onAddToCart: fn },
      { sku: '789', name: 'Baz', quantity: 3, onAddToCart: fn }
    ];
    const wrapper = shallow(<Inventory products={products} />);
    expect(wrapper.find(Product).length).toEqual(3);
  });
  
  it('gives each list item a unique key', () => {
    const fn = () => {};
    const products = [
      { sku: '123', name: 'Foo', quantity: 1, onAddToCart: fn },
      { sku: '456', name: 'Bar', quantity: 2, onAddToCart: fn },
      { sku: '789', name: 'Baz', quantity: 3, onAddToCart: fn }
    ];
    const wrapper = shallow(<Inventory products={products} />);
    const items = wrapper.find('.inventory__list-item');
    const keys = items.map((item) => item.key());
    expect(keys).toEqual(['123', '456', '789']);
  });
});
