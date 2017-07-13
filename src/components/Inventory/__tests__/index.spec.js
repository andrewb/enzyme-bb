import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../Header';
import Inventory from '../index';
import Product from '../../Product';

jest.mock('../../Header');
jest.mock('../../Product');

const getProductProps = ({
  sku = 'xyz',
  name = 'Product',
  quantity = 1,
  onAddToCart = () => {}
}) => ({
  sku,
  name,
  quantity,
  onAddToCart
});

describe('<Inventory />', () => {
  it('renders a <Header />', () => {
    const wrapper = shallow(<Inventory />);
    expect(wrapper.find(Header).exists()).toBe(true);
  });

  it('renders a list of <Product /> components', () => {
    const products = [
      getProductProps({ sku: '123' }),
      getProductProps({ sku: '456' }),
      getProductProps({ sku: '789' })
    ];
    const wrapper = shallow(<Inventory products={products} />);
    expect(wrapper.find(Product).length).toEqual(3);
  });

  it('gives each list item a unique key', () => {
    const products = [
      getProductProps({ sku: '123' }),
      getProductProps({ sku: '456' }),
      getProductProps({ sku: '789' })
    ];
    const wrapper = shallow(<Inventory products={products} />);
    expect(wrapper.find('.inventory__list-item').map(i => i.key())).toEqual(['123', '456', '789']);
  });
});
