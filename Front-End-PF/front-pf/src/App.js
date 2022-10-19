import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import Excursiones from "./pages/Excursiones/Excursiones";
import Destinations from "./pages/Destinations/Destinations";
import PageUser from "./pages/PageUser/PageUser";
import InfoCard from "./pages/InfoCard/InfoCard";
import PageHotel from "./pages/Packs/Hotel";
import CreatePack from "./pages/CreatePack/CreatePack";
import Hotels from "./pages/Hotels/Hotels.jsx";
import HotelDetail from "./pages/HotelDetail/HotelDetail";
import Legales from "./pages/Legales/Legales";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Packages from "./pages/Packages/Packages";
import AdminRoutes from "./AdminRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import MainPage from "./pages/Admin/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { setUser } from "./redux/actions/index";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(
        setUser(
          getAccessTokenSilently,
          user.email,
          user.picture,
          user.name,
          user.email_verified
        )
      );
    }
  }, [user, dispatch, isAuthenticated, getAccessTokenSilently]);

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
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/packages" element={<Packages />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/detail/:id" element={<InfoCard />} />
            <Route path="/user/:userId" element={<PageUser />} />
          </Route>
        </Route>
        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
