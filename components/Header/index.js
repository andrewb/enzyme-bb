import React from 'react';

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Header;
