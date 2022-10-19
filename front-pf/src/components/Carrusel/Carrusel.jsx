import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from 'react';
import { Carousel } from "react-bootstrap";
import Cards from "../Card/Card";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";
import { getCarousel } from "../../redux/actions";
import "./Carrusel.css";


function Carrusel() {
  // const dispatch = useDispatch()
  const actiCarousel = useSelector((state) => state.carousel)  
  console.log(actiCarousel.slice(0,3))

//   useEffect (() => {
//     if (actiCarousel?.length === 0) {   
//         dispatch(getCarousel())         
//     }            
// }, [])
    

  
  return (
    <div className="container-all-carousel">

      <Carousel>
        <Carousel.Item>
        {actiCarousel? 
            <>
            <Card2 name={actiCarousel.slice(0, 3)} /> 
            </>          
            : <h1> En Proceso </h1>
          } 
        </Carousel.Item>
        <Carousel.Item>
            {actiCarousel? 
            <>
            <Card2 name={actiCarousel.slice(3, 6)} /> 
            </>          
            : <h1> En Proceso </h1>
          }  
        </Carousel.Item>
        <Carousel.Item>
        {actiCarousel? 
            <>
            <Card2 name={actiCarousel.slice(6, 9)} /> 
            </>          
            : <h1> En Proceso </h1>
          } 
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
