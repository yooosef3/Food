import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import React from "react";
import styles from '../../styles/main/Map.module.css'

const Map = () => {
  return (
    <div className={styles.container}>
      <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
