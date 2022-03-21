import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
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
    return children;
};

export default PrivateRoute;