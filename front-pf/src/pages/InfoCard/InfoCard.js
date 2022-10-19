import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CardInformation from "../../components/CardInformation/CardInformation";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackById } from "../../redux/actions";
import {getActivities} from '../../redux/actions'

export default function InfoCard() {
  const dispatch = useDispatch();
  const packById = useSelector((state) => state.packById);
  const { country } = useParams();
  console.log("el pais es:")
  console.log(country)


  useEffect(() => {
    country? dispatch(getActivities(country)) : console.log("hola")
  }, [dispatch]);


  return (
    <div>
      <NavBar />
      <CardInformation img={packById?.image} name={packById?.name} country={country}/>
      <Footer />
    </div>
  );
}
