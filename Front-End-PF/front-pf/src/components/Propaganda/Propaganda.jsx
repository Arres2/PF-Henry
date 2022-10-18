import Carousel from "react-bootstrap/Carousel";

function CarruselPropaganda() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.gestiomotorponent.com/wp-content/uploads/2019/10/audi.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1000marcas.net/wp-content/uploads/2020/01/Rolex-simbolo.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-150 h-150"
          src="https://s3.eu-central-1.wasabisys.com/casasapuestas.com/2021/11/bet365_logo_review.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-80 h-90"
          src="https://logodownload.org/wp-content/uploads/2014/07/adidas-logo-branco.png"
          alt="Four slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-90 h-40"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coca-Cola_logo_white.png/640px-Coca-Cola_logo_white.png"
          alt="Five slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselPropaganda;
