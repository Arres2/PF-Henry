import React from 'react'
import { Marker } from 'react-leaflet';
import IconLocation from './IconLocation';
export default function Markers() {
  return (
    <Marker position={{lat:'-34.5966694935739', lng: '-58.41712999803625'}} icon={IconLocation}/>
  )
}
