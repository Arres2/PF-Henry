import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import "bootswatch/dist/lux/bootstrap.min.css"
import { useSelector, useDispatch } from "react-redux";
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {verifyOrder} from "../../redux/actions"
import axios from "axios";
const url = 'http://localhost:5000/'



const stripePromise = loadStripe("pk_test_51LpvTKH9cYWLfTVZMA15IlRihMAO1ltdT75IOWbkAOTwD7SOhu7SQ89wDHTVhRIA9oJE86HsS3FsSjV4wsd0lbR600j0ymWP72")


const CheckoutForm = () => {
    

    const dispatch = useDispatch()
    const stripe = useStripe()
    const elements = useElements()
    const [loading, setLoading] = useState(false)
    const dataProducts = useSelector((state) => state.carrito)
    const detailProducts = useSelector((state) => state.verifyPurchase)
    let accumulatedCost = 0


      useEffect (() => {
    if (dataProducts?.length > 0) {   
        dispatch(verifyOrder(dataProducts))         
    }            
}, [])


    async function validateProducts() {
        console.log("estamos en validateProducts")
        try {
            if(dataProducts?.length > 0) {
                const products = dataProducts.map( async function (elm) {
                    return (await axios.get(`http://localhost:5000/excursion/findActivityDataCountry?country=${elm.id}`))
                })
                console.log(products)
                return products
            }           
        } catch (e) {
            return (e)
        }
    }  

    function costExcursion (data, quantity) {
        console.log(data)
        let temp = 0
        for (let i=0; i < data.length; i++) {
            for (let j=0; j < data[i].excursion[j].activity; j++) {
                temp = temp + data[i].excursion[j].activity.activity.cost
            }
        }
        return temp 
    }

    function costTicket (data, quantity) {
        console.log(data)
        let cost = data.cost
        accumulatedCost = parseInt(accumulatedCost) + parseInt(cost)
        return cost
    }
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const productsForPayment = await validateProducts()
        console.log("estos son los productos")
        console.log(productsForPayment)
        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })
        setLoading(true)

        if(!error) {
            console.log(paymentMethod)
            const{id} = paymentMethod
            try {
                const {data} = await axios.post(
                    "http://localhost:5000/purchase/checkout" ,
                    {id,
                    amount: accumulatedCost,
                }
                )
                console.log(data)
                elements.getElement(CardElement).clear()
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
    }

    console.log(!stripe || loading)

    return (
            <form onSubmit={handleSubmit} className="card card-body">
                {detailProducts? 
                <div>
                    {detailProducts.map(function(elm) {
                        return (
                            <div> 
                            <p> {elm.id} </p>
                            <p> HOTEL: {elm.hotel.name} </p>
                            <p> DIRECCION: {elm.hotel.address} </p>
                            <p> AEROLINEA: {elm.ticket.company.name} </p>
                            <p> FECHA DE SALIDA: {elm.ticket.date} </p>
                            <p> VUELO: {elm.ticket.fligthId} </p>
                            <p> CANTIDAD DE PAQUETES: 5 </p>
                            <h1> Costo Paquete:  {costTicket (elm.ticket)}</h1>
                            </div>
                        )
                    })}
                    
                </div> 
                : <p> NO HAY DATOS DE COMPRA PARA MOSTRAR </p>              
            } 
            <h1> Costo Total: {accumulatedCost} </h1>
            <CardElement/>
            <button>
                Buy
            </button>
            </form>
      )

}

function PaymentForm () {
    return (
        <Elements stripe={stripePromise}>
          <div className='container p-4'>
            <div className='row'>
              <div className='.col-md-4.offset-md-4'>
              <CheckoutForm/>
              </div>
            </div>
          </div>
        </Elements>
      )
}


export default PaymentForm