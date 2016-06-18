import React from 'react';
import Product from '../Product';
import Header from '../Header';
import 'stylesheets/components/inventory.scss';

function Inventory({ products = [] }) {
  return (
    <div className="inventory">
      <Header title="Our Products" />
      <ul className="inventory__list">
      {products.map((product) =>
        <li className="inventory__list-item" key={product.sku}>
          <Product {...product} />
        </li>
      )}
      </ul>
    </div>
  );
}

Inventory.propTypes = {
  products: React.PropTypes.arrayOf(React.PropTypes.shape(Product.propTypes))
};

export default Inventory;
