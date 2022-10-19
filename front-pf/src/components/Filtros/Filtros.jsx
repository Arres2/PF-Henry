import React from 'react'

export default function Filtros() {
  return (
    <div className='w-1/3 h-full p-4 my-2 border border-slate-600 rounded-lg'>
      <div>
        <h3>Valoracion</h3>
      <input type="range" name='star' />
      <label for="star"/>
      <div>

      </div>
      </div>
      <div className='h-full flex flex-wrap'>
        <h3>Services</h3>
        <input type="checkbox" name='vehicle1'/>
        <label for="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name='vehicle1'/>
        <label for="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name='vehicle1'/>
        <label for="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name='vehicle1'/>
        <label for="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name='vehicle1'/>
        <label for="vehicle1"> I have a bike</label><br></br>
        <input type="checkbox" name='vehicle1'/>
        <label for="vehicle1"> I have a bike</label><br></br>

      </div>
    </div>
  )
}
