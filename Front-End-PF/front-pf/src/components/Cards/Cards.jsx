import s from "./Cards.module.css"
import CardDestinations from '../CardDestinations/CardDestinations';
export default function Cards({hotels}) {

  return (
    <div className='flex flex-wrap my-4 p-1 justify-center items-center'>
      {hotels && hotels?.map(e =>
        <CardDestinations key={e.id} 
        id={e.id} 
        country={e.country} 
        // number={e.phoneNumber} 
        // address={e.address}  
        summary={e.summary} 
        image={e.images ? e.images[0].name : 'not found'}/>
      )}
    </div>
  )
}