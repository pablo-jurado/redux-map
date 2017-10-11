import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import Nav from 'components/Nav';

export const HomeView = (store) => {
  console.log('HomeView', store.ports);
  return (
    <div>
      <h4>Port Map</h4>
      <Nav className="core-layout__nav" />
      <PortMap className="home--portMap" />
    </div>
  )
};

export default HomeView;
