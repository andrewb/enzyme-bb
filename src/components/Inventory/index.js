import PropTypes from 'prop-types';
import React from 'react';
import Product from '../Product';
import Header from '../Header';
import './inventory.scss';

function Inventory({ products }) {
  return (
    <div className="inventory">
      <Header title="Our Products" />
      <ul className="inventory__list">
        {products.map(product => (
          <li className="inventory__list-item" key={product.sku}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Inventory.defaultProps = {
  products: []
};

Inventory.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(Product.propTypes))
};

export default Inventory;
