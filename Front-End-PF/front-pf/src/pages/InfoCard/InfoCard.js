import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CardInformation from "../../components/CardInformation/CardInformation";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackById } from "../../redux/actions";

export default function InfoCard() {
  const dispatch = useDispatch();
  const packById = useSelector((state) => state.packById);
  const { id } = useParams();


  useEffect(() => {
    dispatch(getPackById(id));
  }, [dispatch]);


  return (
    <div>
      <NavBar />
      <CardInformation img={packById?.image} name={packById?.name} country={packById?.country}/>
      <Footer />
    </div>
  );
}
