import NavBar from "../../components/NavBar/NavBar";
import CardExcursion from "../../components/CardExc/CardExc";
import BodyExcursiones from "../../components/BodyExc/BodyExc";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import { getExcursiones } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../components/SideBar/SideBar";

export default function Excursiones() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExcursiones());
  }, [dispatch]);

  const excursiones = useSelector((state) => state.excursiones);

  return (
    <div>
      <NavBar />
      <SideBar />
      <BodyExcursiones />
      <CardExcursion excursionesInfo={excursiones} />
      <Footer />
    </div>
  );
}
