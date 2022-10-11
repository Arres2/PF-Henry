import React from 'react'
import { Link } from 'react-router-dom';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import HikingIcon from '@mui/icons-material/Hiking';
import KayakingIcon from '@mui/icons-material/Kayaking';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';

export default function CardDestinations({id, country,image,summary}) {
  return (

    <div className='w-full h-5/12 bg-2-color m-2 p-4 flex justify-center rounded-lg overflow-hidden backdrop-opacity-60 hover:bg-4-color'>
      <Link key={id} to={`/detail/${id}`} className='no-underline text-white'>
            <h3 className='w-full text-4xl m-2 text-start font-josefin text-white'>{country}</h3>
        <div className='flex'>
            <img src={image} alt={country} className='w-full h-60 rounded-4'/>
            <p className='mx-4 text-white text-xl'>{summary}</p>
        </div>
        <div className='flex justify-end'>
          <DirectionsBikeIcon fontSize="large" />
          <HikingIcon fontSize="large"/>
          <KayakingIcon fontSize="large"/>
          <DownhillSkiingIcon fontSize="large"/>
        </div>
      </Link>
    </div>

)
}

