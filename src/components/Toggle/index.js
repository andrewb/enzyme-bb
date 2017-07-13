import PropTypes from 'prop-types';
import React from 'react';
import { trim } from 'lodash';
import 'stylesheets/components/toggle.scss';

class Toggle extends React.Component {
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
    const btnClasses = `toggle__button toggle__button--is-${this.state.isOpen ? 'open' : 'closed'}`;
    return (
      <div className="toggle">
        <button className={btnClasses} onClick={this.onToggleHandler}>
        {trim(`${this.state.isOpen ? 'Hide' : 'Show'} ${this.props.label}`)}
        </button>
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
  children: PropTypes.node
};

Toggle.defaultProps = {
  label: ''
};

export default Toggle;
