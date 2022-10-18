import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react';
import Container from "../components/Container/Container";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import style from "./Home.module.css";
import Carrusel from "../components/Carrusel/Carrusel";
import CardContainer from "../components/CardContainer/CardContainer";
import SideBar from "../components/SideBar/SideBar";
import { getCarousel } from "../redux/actions/index";


export default function Home() {

  const dispatch = useDispatch()
  
  useEffect (() => {
    dispatch(getCarousel())                 
  },[] )

 

  return (
    <div className={style.globalContainer}>
      <NavBar />
      <CardContainer />
      <SideBar />
      <Carrusel />   
      <Container />
      <Footer />
    </div>
  );
}
