import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();
    
    if (isLoading) {
        return (
            <div sx={{ mt:12,display: 'flex', justifyContent:"center"}}>
                Loading...........
            </div>
        )
    }
    if (!user.email) {
        return    <Navigate to="/login" state={{from:location}}></Navigate>
    }

    if (user.email !== "test@test.com") {
        alert("You are unauthorized!")
        return    <Navigate to="/" ></Navigate>
    }
    return children;
};

export default AdminRoute;