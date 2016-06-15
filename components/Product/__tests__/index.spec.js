jest.unmock('../index');

import React from 'react';
import Product from '../index';
import { shallow } from 'enzyme';

describe('<Product />', () => {
  it('renders the product name', () => {
    const wrapper = shallow(
      <Product sku="123" name="Hat" price={1} quantity={2} onAddToCart={() => {}} />
    );
    expect(wrapper.find('.product__name').text()).toEqual('Hat');
  });
  
  it('shows the price in dollars', () => {
    const wrapper = shallow(
      <Product sku="123" name="Hat" price={1.99} quantity={2} onAddToCart={() => {}} />
    );
    expect(wrapper.find('.product__price').text()).toEqual('$1.99');
  });
  
  it('shows an optional product image', () => {
    const image = {
      src: '/assets/foo.jpg'
    };
    const wrapper = shallow(
      <Product image={image} sku="123" name="Hat" price={1} quantity={2} onAddToCart={() => {}} />
    );
    expect(wrapper.find('.product__image img').prop('src')).toEqual(image.src);
  });
  
  describe('Product is in stock', () => {
    it('shows the quantity', () => {
      const wrapper = shallow(
        <Product sku="123" name="Hat" price={1} quantity={2} onAddToCart={() => {}} />
      );
      expect(wrapper.find('.product__quantity').text()).toEqual('2');
    });
    
    it('shows the add to cart button', () => {
      const wrapper = shallow(
        <Product sku="123" name="Hat" price={1} quantity={2} onAddToCart={() => {}} />
      );
      expect(wrapper.find('button.product__cart-button').length).toEqual(1);
    });
    
    it('can be added to the cart', () => {
      const onAddToCart = jest.fn();
      const wrapper = shallow(
        <Product sku="123" name="Hat" price={1} quantity={2} onAddToCart={onAddToCart} />
      );
      wrapper.find('.product__cart-button').simulate('click');
      expect(onAddToCart).toBeCalled();
    });
  });
  
  describe('Product is out of stock', () => {
    it('shows an out of stock message', () => {
      const wrapper = shallow(
        <Product sku="123" name="Hat" price={1} quantity={0} onAddToCart={() => {}} />
      );
      expect(wrapper.find('.product__out-of-stock').length).toEqual(1);
    });
    
    it('hides the add to cart button', () => {
      const wrapper = shallow(
        <Product sku="123" name="Hat" price={1} quantity={0} onAddToCart={() => {}} />
      );
      expect(wrapper.find('button.product__cart-button').length).toEqual(0);
    });
  });
});
