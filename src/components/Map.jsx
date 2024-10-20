// src/MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [9.46081,76.438]; // CUCEK latitude and longitude

  return (
    <MapContainer center={position} zoom={30 } style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          CUCEK <br /> Cochin University College of Engineering Kuttanad.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
