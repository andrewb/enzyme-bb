import React from 'react';
import renderer from 'react-test-renderer';
import App from '../index';

describe('<App />', () => {
  // NOTE: this is an example of a snapshot test.
  // See https://facebook.github.io/jest/docs/snapshot-testing.html
  it('renders correctly', () => {
    const tree = renderer.create(
      <App
        products={[
          {
            sku: 'xyz',
            name: 'Product Name',
            quantity: 10,
            price: 100,
            image: {
              src: 'https://foo.bar/baz.jpg'
            }
          }
        ]}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // Compare this to using Enzyme to test that certain components are rendered.
  /*
  it('renders an <Inventory />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Inventory).exists()).toBe(true);
  });
  it('renders a cart <Toggle />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Toggle).exists()).toBe(true);
  });
  */
  // I generally prefer the latter approach, because it works better with BDD
  // and IME is less fragile. However, both are useful – it all depends on the
  // situation.
});
