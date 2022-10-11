import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import PoolIcon from '@mui/icons-material/Pool';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import bg_1 from './bg_home1.jpg'
import bg_2 from './viajar.jpg'
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function HotelCard() {


  return (
    <div className='bg-white m-4 rounded-4 w-1/3 h-auto font-josefin shadow-md shadow-slate-500 hover:shadow-inner hover:shadow-slate-500 overflow-hidden'>
      <Link to='/hoteldetail' className='no-underline text-black'>
      <div className="container-all-carousel my-4">
      
      <Carousel>
        <Carousel.Item>
          <img src='https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg' alt='hotel1' className='w-80 h-56 rounded-4'/>
        </Carousel.Item>
        <Carousel.Item>
         <img src={bg_2} alt='hotel2' className='w-80 h-56 rounded-4'/>
        </Carousel.Item>
        <Carousel.Item>
        <img src={bg_1} alt='hotel12' className='w-80 h-56 rounded-4'/>
        </Carousel.Item>
      </Carousel>
        <div className='flex w-fit bg-1-color text-white opacity-60 absolute p-2 mr-3/6 my-2 rounded-4'>
            <StarIcon/>
            <span className='text-xl'>4.5</span>
         </div>
    </div>
        <div className='pt-1 px-8'>
         <h2 className='font-josefin'>Hotel San Bernardo</h2>
         <p>San Bernardo,Arg</p>
        </div>
        <div>
            <ul className='list-none'>
            <li><PoolIcon/>Alberca</li>
            <li><FitnessCenterIcon/>Gimnasio </li>
            <li><RestaurantIcon/>Desayuno y cena incluido</li>
            </ul>
         </div>
         <div className='flex justify-end py-2 px-4'>
            <p className='text-5xl font-josefin '>$7,999</p>
         </div>
         </Link>
    </div>
  )
}
