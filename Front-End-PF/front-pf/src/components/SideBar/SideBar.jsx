import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LandscapeIcon from "@mui/icons-material/Landscape";
import HelpIcon from "@mui/icons-material/Help";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

export default function SideBar() {

  const {user,isAuthenticated, loginWithRedirect}=useAuth0()
  const currentUser = useSelector(state=>state.currentUser)

  return (
    <div className="container-iconos">
      <ul className="ul-iconos">
        <li className="li-iconos">
          <div className="iconoDeLi">
            <Link
              to={isAuthenticated? `/user/${currentUser.id}`: null}
              onClick={isAuthenticated? null:loginWithRedirect}
              className={isAuthenticated?`background-image: ${user.picture}`: `hover:text-blue-700  transition ease-in duration-200 text-1-color`}
            >
              <AccountCircleIcon fontSize="large"  />
            </Link>
          </div>
        </li>
        <li className="li-iconos">
          <div className="iconoDeLi">
            <Link
              to="destinations"
              className=" hover:text-3-color transition ease-in duration-200 text-1-color"
            >
              <LocalAirportIcon fontSize="large" />
            </Link>
          </div>
        </li>
        <li className="li-iconos">
          <div className="iconoDeLi">
            <Link
              to="excursiones"
              className=" hover:text-orange-500 transition ease-in duration-200 text-1-color"
            >
              <LandscapeIcon fontSize="large" />
            </Link>
          </div>
        </li>
        <li className="li-iconos">
          <div className="iconoDeLi">
            <Link
              to="#"
              className="hover:text-zinc-400 transition ease-in duration-200 text-1-color"
            >
              <HelpIcon fontSize="large" />
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
