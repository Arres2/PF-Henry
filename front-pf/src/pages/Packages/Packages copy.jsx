import React, { useEffect, useState } from "react";
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
import s from "../../components/CardInformation/CardInformation.module.css";
import style from "./Packages.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPacks, setBuy } from "../../redux/actions";
import { CommentsDisabledOutlined } from "@mui/icons-material";
const quantitySelect = [1,2,3,4,5]


export default function Packages() {

    const {id} = useParams()
    const dispatch = useDispatch() 
    const packs = useSelector((state) => state.packs)
    
    
    useEffect(() => {
        dispatch(getPacks())
    }, [])

    function handleSelect(e) {
        
    }

    function handleSubmit(e) {
        console.log(e)
        e.preventDefault() 
        let tPackage = {
            packageId: e.target.value,
            quantity: 5            
        } 
        dispatch(setBuy(tPackage))    
    }


    return (
        <>
        <NavBar/>

        {
        packs.length > 0? 
        packs.map(elm => {
            return (
                <div className={"container"}>
                <div className={style.thumbnail}>
                    <div className={style.figure_wrapper}>
                        <figure class={style.img_polaroid}>
                            <img src={elm?.hotel.image} alt=""/>
                        </figure>
                    </div>
                    <div className={style.caption}>
                        <div className={style.date1}>21 of December, 2013</div>
                        <h4><a href="#">{elm?.hotel.name}</a></h4>
                        <p> {elm?.hotel.phoneNumber}  </p>
                        <p> {elm?.hotel.description}  </p>
                    </div>
                    <div className='m-4'> 
                        <div className='w-2/5 h-2/5'>
                        </div>
                        <h2>  {elm?.ticket.company.name}</h2>
                        <p> Vuelo Numero: {elm?.ticket.fligthId} </p>
                        <p> Salida: {elm?.ticket.date} </p>
                    </div>
                    <div className='m-4'> 
                        <div className='w-2/5 h-2/5'>
                        <h2> Actividades </h2>
                        {elm?.excursion[0]?.excursion.activity.length > 0?
                        elm?.excursion[0]?.excursion.activity.map(elm => {
                            return (
                                <p> {elm.activity.name} </p>
                            )}) : <p> Podras Agregar Actividades por Demanda </p>}                   
                        </div> 
                    </div>
                </div>
                <div>
                    <form name={elm.id}> 
                    <select onChange={(e) => handleSelect(e)}>                    
                    {quantitySelect.map((elm) => (
                       <option value={elm}> {elm} </option>
                    ))}  
                     </select> 
                     <button value={elm.id} type='submit' onClick={(e) => handleSubmit(e)}> Adicionar al Carrito </button> 
                    </form>
                </div>
            </div>
            )





        }) : console.log("No hay Datos")   
        }
        <Footer/>
        </>
    )

}