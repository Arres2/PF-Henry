import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import s from "./CarritoIcon.module.css";


export default function CarritoIcon () {
    const carrito = useSelector((state => state.carrito))
    console.log(`La cantidad de productos son: ${carrito.length}`)
   
    return (
            <button className='mx-2 text-zinc-100 hover:text-4-color transition ease-in duration-200 text-xl p-1 font-semibold'> 
            Carrito   ({carrito.length})  </button>
            // <div className={s.nav_carrito}>
            //     <div className={s.nav_carrito_container}>
            //         <span className={s.nav_carrito_count}> {carrito.length} </span>
            //         <span className={s.nav_carrito_icon}> Carrito </span>
            //     </div> 
            // </div>
    )
}