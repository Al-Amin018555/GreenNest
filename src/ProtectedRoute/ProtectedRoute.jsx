import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>

};

export default ProtectedRoute;