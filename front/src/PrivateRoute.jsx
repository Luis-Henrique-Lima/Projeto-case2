import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('token');
        //localStorage.clear()
    console.log(isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}