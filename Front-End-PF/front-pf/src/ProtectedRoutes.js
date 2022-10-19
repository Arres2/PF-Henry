import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/actions";
import ClipLoader from "react-spinners/ClipLoader";

function ProtectedRoutes() {
  const {
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    user,
    loginWithRedirect,
  } = useAuth0();
  const dispatch = useDispatch();
  const dbUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setUser(getAccessTokenSilently, user?.email));
    }
  }, [dispatch, user]);

  return isAuthenticated ? (
    <Outlet />
  ) : isLoading ? (
    <div
      style={{
        marginTop: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ClipLoader color="#ef8354" size={70} margin={10} />
    </div>
  ) : (
    loginWithRedirect()
  );
}

export default ProtectedRoutes;
