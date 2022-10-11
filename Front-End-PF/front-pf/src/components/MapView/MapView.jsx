import React from 'react'
import {MapContainer,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';
export default function MapView() {
  return (
    <div>
      <MapContainer center={{lat:'-34.60133247376903', lng:'-58.39657355090364'}} zoom={13}>
        <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
      <Markers/>
      </MapContainer>
    </div>
  )
}
