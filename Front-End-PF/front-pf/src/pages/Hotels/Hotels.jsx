import React from 'react'
import MapView from '../../components/MapView/MapView';
import CardsHotels from '../../components/CardsHotels/CardsHotels';
import Filtros from '../../components/Filtros/Filtros.jsx';


export default function Hotels() {

  return (
  

      <div className='flex m-4'>
        <Filtros/>
        <div className='w-auto h-auto mx-8 p-4'>
          <h2>Encuentra los mejores hoteles en Buenos aires</h2>
          <CardsHotels/>
          <MapView/>
          </div>
      </div>
     
  
  )
}
