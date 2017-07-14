import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../Button';
import Product from '../index';

// NOTE: This is a useful pattern for components that require a lot of props!
const getProps = ({
  sku = '123',
  name = 'Hat',
  price = 1,
  quantity = 1,
  onAddToCart = () => {},
  image
}) => ({
  sku,
  name,
  price,
  quantity,
  onAddToCart,
  image
});

describe('<Product />', () => {
  it('renders the product name', () => {
    const wrapper = shallow(
      <Product {...getProps({})} />
    );
    expect(wrapper.find('.product__name').text()).toEqual('Hat');
  });

  it('shows the price in dollars', () => {
    const wrapper = shallow(
      <Product {...getProps({ price: 1.99 })} />
    );
    expect(wrapper.find('.product__price').text()).toEqual('$1.99');
  });

  it('shows an optional product image', () => {
    const image = {
      src: '/assets/foo.jpg'
    };
    const wrapper = shallow(
      <Product {...getProps({ image })} />
    );
    expect(wrapper.find('.product__image img').prop('src')).toEqual(image.src);
  });

  describe('in stock', () => {
    it('shows the quantity', () => {
      const wrapper = shallow(
        <Product {...getProps({ quantity: 2 })} />
      );
      expect(wrapper.find('.product__quantity').text()).toEqual('2');
    });

    it('shows the add to cart <Button />', () => {
      const wrapper = shallow(
        <Product {...getProps({ quantity: 2 })} />
      );
      expect(wrapper.find('.product__cart-button').find(Button).exists()).toBe(true);
    });

    it('can be added to the cart', () => {
      const onAddToCart = jest.fn();
      const wrapper = shallow(
        <Product {...getProps({ onAddToCart })} />
      );
      wrapper.find('.product__cart-button').find(Button).simulate('click');
      expect(onAddToCart).toBeCalled();
    });
  });

  describe('out of stock', () => {
    it('shows an out of stock message', () => {
      const wrapper = shallow(
        <Product {...getProps({ quantity: 0 })} />
      );
      expect(wrapper.find('.product__out-of-stock').exists()).toBe(true);
    });

    it('hides the add to cart <Button />', () => {
      const wrapper = shallow(
        <Product {...getProps({ quantity: 0 })} />
      );
      expect(wrapper.find('.product__cart-button').find(Button).exists()).toBe(false);
    });
  });
});
