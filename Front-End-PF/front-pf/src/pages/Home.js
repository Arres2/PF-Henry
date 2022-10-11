import Container from "../components/Container/Container";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import style from "./Home.module.css";
import Carrusel from "../components/Carrusel/Carrusel";
import CardContainer from "../components/CardContainer/CardContainer";
import SideBar from "../components/SideBar/SideBar";

export default function Home() {
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
