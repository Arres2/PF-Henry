import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';

export default function HotelDetail() {
  return (
    <div>
        <NavBar/>
        <div className='m-4'> 
        <div className='w-2/5 h-2/5'>
        <img src='https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg' alt='hotelSan'/>
        </div>
        <h2>Hotel San Bernardo</h2>
        <p>Disfruta de unas excelentes vacaciones en este lujoso hotel, encuentrate a ti mismo y descubre lo mejor de buenos aires.</p>
      </div>
      <Footer/>
    </div>
  )
}
