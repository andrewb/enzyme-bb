import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import products from './data/products';
import './styles/index.scss';

render(
  <App products={products} />,
  document.getElementById('root')
);
