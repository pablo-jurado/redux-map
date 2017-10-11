import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ className, state }) => {
  console.log('state', state.ports);
  // state.updatePorts(['hello']);
  function update () {
    state.updatePorts(['hello']);
  }
  
  return (
    <div className={className}>
      Nav
      <button onClick={update}> test </button>
    </div>
  )
};

Nav.propTypes = {
  className: PropTypes.string,
  state: PropTypes.object
};

export default Nav;
