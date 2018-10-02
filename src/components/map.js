import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const position = [51.21435, 6.74935];
const MapWrapper = () => (
  <>
    <h1>You are here:</h1>
    <Map center={position} zoom={18}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  </>
);

export default MapWrapper;
