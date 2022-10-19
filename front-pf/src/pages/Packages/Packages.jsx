import React, { useEffect, useState } from "react";
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';
//import s from "../../components/CardInformation/CardInformation.module.css";
import style from "./Packages.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPacks, setBuy } from "../../redux/actions";
//import { CommentsDisabledOutlined } from "@mui/icons-material";
import s from "./CardDetailM2.module.css"
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
     

        <div className="container">
        <div className={s.ibox_title}>
            <span className="pull-right">(<strong> {packs.length} </strong>) Tourist Package </span>
            <h5>Items in your search</h5>
        </div>
        </div>

        {
        packs.length > 0? 
        packs.map(elm => {
            return (
                <div className="container">
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-md-12">
                                <div className={s.ibox}>
                                    <div className={s.ibox_content}>
                                        <div className="table-responsive">
                                            <table className={s.shoping_cart_table}>
                                                <tbody>
                                                <tr>
                                                    <td width="90">
                                                        <div className={s.cart_product_imitation}>
                                                        <img src={elm?.hotel.image} alt=""/>
                                                        </div>
                                                    </td>
                                                    <td className="desc">
                                                        <h3>
                                                        <a href="#" className={s.text_navy}>
                                                        {elm?.hotel.name}
                                                        </a>
                                                        </h3>
                                                        <p className="small">
                                                        {elm?.hotel.description.slice(0,250)}
                                                        </p>
                                                        <a href="#" className={s.text_navy}>
                                                        {elm?.ticket.company.name}
                                                        </a>
                                                        <dl className="small m-b-none">
                                                            <dt>{elm?.ticket.fligthId}</dt>
                                                            <dd>{elm?.ticket.date}</dd>
                                                        </dl>


                                                        <div className='m-12'> 
                                                        <div className='w-5/5 h-5/5'>
                                                        <p> ACTIVIDADES </p>
                                                                                                              {elm?.excursion[0]?.excursion.activity.length > 0?
                                                        elm?.excursion[0]?.excursion.activity.map(elm => {
                                                            return (
                                                                <dt href="#" className={s.text_navy}> {elm.activity.name} </dt>
                                                            )}) : <p> Podras Agregar Actividades por Demanda </p>} 
                                                            
                                                        </div> 
                                                    </div>



                                                        <div className="m-t-sm">
                                                            <a href="#" className="text-muted"><i className="fa fa-gift"></i> Add gift package</a>
                                                            |
                                                            <a href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                                        </div>
                                                    </td>

                                                    <td>
                                                        $180,00
                                                        <s className="small text-muted">$230,00</s>
                                                    </td>
                                                    <td width="65">
                                                        <input type="text" className="form-control" placeholder="1"/>
                                                    </td>
                                                    <td>
                                                        <h4>
                                                            $180,00
                                                        </h4>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="ibox-content">
                                        <form name={elm.id}> 
                                                <select className="btn btn-primary pull-right" onChange={(e) => handleSelect(e)}>                    
                                                {quantitySelect.map((elm) => (
                                                <option value={elm}> {elm} </option>
                                                ))}  
                                                </select> 
                                                <button  className="btn btn-primary pull-right" value={elm.id} type='submit' onClick={(e) => handleSubmit(e)}> Adicionar al Carrito </button> 
                                                </form>                                               
                                        </div>

                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                    </div>

                )
        }) : console.log("No hay Datos")   
        }
        <div className="ibox-content">
            <button className="btn btn-white"><i className="fa fa-arrow-left"></i> Continue shopping</button>
        </div>
      
        </>
    )

}