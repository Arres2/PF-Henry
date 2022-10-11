import React from 'react'
import Footer from '../../components/Footer/Footer';
import MapView from '../../components/MapView/MapView';
import NavBar from '../../components/NavBar/NavBar';
import CardsHotels from '../../components/CardsHotels/CardsHotels';
import Filtros from '../../components/Filtros/Filtros.jsx';


export default function Hotels() {

  return (
    <div>
      <NavBar/>
      <div className='flex m-4'>
        <Filtros/>
        <div className='w-auto h-auto mx-8 p-4'>
          <h2>Encuentra los mejores hoteles en Buenos aires</h2>
          <CardsHotels/>
          <MapView/>
          </div>
      </div>
      <Footer/>
    </div>
  )
}
