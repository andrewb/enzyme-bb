import PropTypes from 'prop-types';
import React from 'react';
import './button.scss';

function Button({ children, onClick }) {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
