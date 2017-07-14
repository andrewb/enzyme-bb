import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Inventory from '../Inventory';
import Toggle from '../Toggle';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      cart: 0
    };
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(sku) {
    // Add the product to the cart
    // This simply increments the cart count and decrements the quantity of the
    // chosen product.
    // NOTE, IRL use something like redux...
    this.setState({
      cart: this.state.cart + 1,
      products: this.state.products.map((p) => {
        if (p.sku === sku) {
          // Decrement product quantity
          return Object.assign({}, p, { quantity: p.quantity > 0 ? p.quantity - 1 : 0 });
        }
        return Object.assign({}, p);
      })
    });
  }
  render() {
    const props = {
      products: this.state.products.map(p => (
        Object.assign({}, p, { onAddToCart: this.onAddToCart })
      ))
    };
    return (
      <div className="app">
        <div className="app__cart">
          <Toggle label={`Cart (${this.state.cart})`}>
            <em>The cart would go here...</em>
          </Toggle>
        </div>
        <Inventory {...props} />
      </div>
    );
  }
}

App.defaultProps = {
  products: []
};

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    sku: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.object
  }))
};

export default App;
