import React from 'react';
import Inventory from './components/Inventory';
import Toggle from './components/Toggle';
import { render } from 'react-dom';

// NOTE: This file is TRASH! Take a look at the specs in each component's __tests__ folder.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          sku: 'SK1',
          name: 'Princess Mini-Figure Set #1',
          quantity: 12,
          price: 14.69,
          image: {
            src: 'https://images-na.ssl-images-amazon.com/images/I/71mdlG1gj7L._SX522_.jpg'
          }
        },
        {
          sku: 'SK2',
          name: 'Princess Small Hand Bag',
          price: 5.99,
          quantity: 8,
          image: {
            src: 'https://images-na.ssl-images-amazon.com/images/I/71WtXfhsiEL._SX522_.jpg'
          }
        },
        {
          sku: 'SK3',
          name: 'Princess Balloons',
          price: 2.00,
          quantity: 4,
          image: {
            src: 'https://images-na.ssl-images-amazon.com/images/I/61B5z29ySwL._SX522_.jpg'
          }
        },
        {
          sku: 'SK4',
          name: 'Frozen Tiara Crown',
          price: 6.10,
          quantity: 1,
          image: {
            src: 'https://images-na.ssl-images-amazon.com/images/I/71-mKgn-lDL._SX522_.jpg'
          }
        }
      ],
      cart: 0
    };
    this.onAddToCart = this.onAddToCart.bind(this);
  }
  onAddToCart(sku) {
    const products = this.state.products.map((p) => {
      if (p.sku === sku) {
        return Object.assign({}, p, { quantity: p.quantity > 0 ? p.quantity - 1 : 0 });
      }
      return Object.assign({}, p);
    });
    this.setState({
      cart: this.state.cart + 1,
      products
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
