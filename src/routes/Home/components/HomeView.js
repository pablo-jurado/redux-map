import React from 'react';
import './HomeView.scss';
import PortMap from 'components/PortMap';
import Nav from 'components/Nav';

export const HomeView = (store) => (
    <div className="main__wrapper">
      <Nav className="map__nav" ports={store.ports} />
      <div className="map__wrapper">
        <PortMap className="home--portMap" updatePorts={store.updatePorts} />
      </div>
    </div>
  );

export default HomeView;
