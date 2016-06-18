import React from 'react';
import 'stylesheets/components/header.scss';

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
