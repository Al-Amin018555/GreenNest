import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>;

};

export default ProtectedRoute;