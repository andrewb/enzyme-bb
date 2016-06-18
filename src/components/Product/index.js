import React from 'react';
import 'stylesheets/components/product.scss';

function Product({ sku, name, price, quantity, onAddToCart, image = {} }) {
  return (
    <div className="product">
      {image.src &&
        <div className="product__image">
          <img src={image.src} alt={`Product - ${name}`} />
        </div>
      }
      <div className="product__details">
        <h1 className="product__name">{name}</h1>
        <div className="product__sku">{sku}</div>
        <div className="product__price">${price.toFixed(2)}</div>
        {quantity > 0 &&
          <div>
            <div className="product__availability">
              <span className="product__quantity">{quantity}</span> in Stock
            </div>
            <button className="product__cart-button" onClick={() => onAddToCart(sku)}>
              Add to Cart
            </button>
          </div>
        }
        {quantity === 0 &&
          <div className="product__availability">
            <div className="product__out-of-stock">Out of Stock!</div>
          </div>
        }
      </div>
    </div>
  );
}

Product.propTypes = {
  sku: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  quantity: React.PropTypes.number.isRequired,
  onAddToCart: React.PropTypes.func.isRequired,
  image: React.PropTypes.shape({
    src: React.PropTypes.string,
    // IRL we'd have more props...
  })
};

export default Product;
