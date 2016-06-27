import React from 'react';
import Inventory from './components/Inventory';
import Toggle from './components/Toggle';
import products from './products';
import { render } from 'react-dom';
import 'stylesheets/base.scss';
import 'stylesheets/components/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products,
      cart: 0
    };
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(sku) {
    // Add the product to the cart
    // This simply increments the cart count and decrements the quantity of the
    // chosen product. Note, IRL use something like redux...
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
      products: this.state.products.map((p) => (
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

render(<App />, document.getElementById('root'));
