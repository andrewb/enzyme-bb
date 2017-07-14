import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../Button';
import './toggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggleHandler = this.onToggleHandler.bind(this);
  }
  onToggleHandler(e) {
    e.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div className="toggle">
        <div className={`toggle__button toggle__button--is-${this.state.isOpen ? 'open' : 'closed'}`}>
          <Button onClick={this.onToggleHandler}>
            <span className="toggle__label">{`${this.state.isOpen ? 'Hide' : 'Show'} ${this.props.label}`}</span>
          </Button>
        </div>
        {this.state.isOpen &&
          <div className="toggle__content">
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

Toggle.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired
};

Toggle.defaultProps = {
  label: ''
};

export default Toggle;
