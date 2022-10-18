import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Hotel.css";
import CardPack from "../../components/CardHotel/CardHotel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function PageHotel() {
  return (
    <div className="container-all-info-pack">
      <NavBar />
      <div className="container" id="container-img"></div>
      <div className="container">
        <h1>Los mejores lugar al alcance de un click</h1>
      </div>
      <div>
        <Container id="containerCardPack">
          <div className="m-2">SearcBar</div>
          <Row>
            <Col>
              <CardPack />
            </Col>
            <Col>
              <CardPack />
            </Col>
            <Col>
              <CardPack />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
