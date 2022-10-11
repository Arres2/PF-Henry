import React from "react";
import { Carousel } from "react-bootstrap";
import Cards from "../Card/Card";
import Card2 from "../Card2/Card2";
import Card3 from "../Card3/Card3";
import "./Carrusel.css";


function Carrusel() {
  return (
    <div className="container-all-carousel">
      <Carousel>
        <Carousel.Item>
          <Cards />
        </Carousel.Item>
        <Carousel.Item>
          <Card2 />
        </Carousel.Item>
        <Carousel.Item>
          <Card3 />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrusel;
