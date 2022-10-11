import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import AndresC from '../../team/Andrez_Cardozo.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
export default function AboutUs() {
  return (
    <>
        <NavBar/>
        <div className='flex flex-wrap w-2/6 h-24 m-4'>
          <div className='my-4'>
            <h2 className='text-4xl'>TEAM WORK</h2>
          </div>
          <div>
            <p className='text-2xl'>Conoce al team de desarrolladores full stack.</p>
          </div>
            <div>
              <div className='w-2/6 h-24 bg-slate-400 m-10 p-2 flex '>
              <img src={AndresC} alt='Andres Cardozo' className='w-20 h-20 m-4 rounded'/>
              <h2 className='text-center'>Andres Cardozo</h2>
              <div className='m-4'>
                <GitHubIcon/>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}
