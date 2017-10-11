import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ className }) => (
  <div className={className}>
    Nav
  </div>
);

Nav.propTypes = {
  className: PropTypes.string
};

export default Nav;
