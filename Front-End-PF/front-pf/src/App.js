import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Excursiones from "./pages/Excursiones/Excursiones";
import "bootstrap/dist/css/bootstrap.min.css";
import Destinations from "./pages/Destinations/Destinations";
import PageUser from "./pages/PageUser/PageUser";
import InfoCard from "./pages/InfoCard/InfoCard";
import PageHotel from "./pages/Packs/Hotel";
import CreatePack from "./pages/CreatePack/CreatePack";
import Hotels from "./pages/Hotels/Hotels.jsx";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import Legales from "./pages/Legales/Legales";
import Footer from "./components/Footer/Footer";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { setUserInfo, saveUser } from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUserInfo(getAccessTokenSilently, user.email));
    }
  }, [dispatch, isAuthenticated, getAccessTokenSilently, user]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(saveUser(user.email, user.picture));
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/excursiones" element={<Excursiones />} />
          <Route path="/page-hotel" element={<PageHotel />} />
          <Route path="/hoteldetail" element={<HotelDetail />} />
          <Route path="/legales" element={<Legales />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/detail/:id" element={<InfoCard />} />
            <Route path="/user/:userId" element={<PageUser />} />
          </Route>
          {/* <Route element={<AdminRoutes />}>
            <Route path="/admin" element={}/>
            <Route path="/createPack" element={<CreatePack />} />
            <Route path="/hotels" element={<Hotels />} />
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
