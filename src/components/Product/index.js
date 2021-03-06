import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import './product.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.onAddToCartHandler = this.onAddToCartHandler.bind(this);
  }
  onAddToCartHandler() {
    this.props.onAddToCart(this.props.sku);
  }
  render() {
    const {
      sku,
      name,
      price,
      quantity,
      image
    } = this.props;
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
              <div className="product__cart-button">
                <Button onClick={this.onAddToCartHandler}>
                  <span>Add to Cart</span>
                </Button>
              </div>
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
}

Product.defaultProps = {
  image: {}
};

Product.propTypes = {
  sku: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string
    // IRL we'd have more props...
  })
};

export default Product;
