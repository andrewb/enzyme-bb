import React from 'react';

function Button({ children, onClick }) {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.node
};

export default Button;
