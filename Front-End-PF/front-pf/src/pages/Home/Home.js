import Container from "../../components/Container/Container";
import style from "./Home.module.css";
import Carrusel from "../../components/Carrusel/Carrusel";
import CardContainer from "../../components/CardContainer/CardContainer";
import SideBar from "../../components/SideBar/SideBar";

export default function Home() {
  return (
    <div className={style.globalContainer}>
      <CardContainer />
      <SideBar />
      <Carrusel />
      <Container />
    </div>
  );
}
