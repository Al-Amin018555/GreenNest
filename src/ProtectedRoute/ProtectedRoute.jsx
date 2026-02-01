import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>;

};

export default ProtectedRoute;