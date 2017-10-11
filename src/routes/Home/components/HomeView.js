import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import Nav from 'components/Nav';

export const HomeView = (store) => {

  // store.updatePorts(['port3'])
  // console.log('HomeView', store.ports);
  
  return (
    <div>
      <h4>Port Map</h4>
      <Nav className="core-layout__nav" state={store} />
      <PortMap className="home--portMap" updatePorts={store.updatePorts} />
    </div>
  )
};

export default HomeView;
