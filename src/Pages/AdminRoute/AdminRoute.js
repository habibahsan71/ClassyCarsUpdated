import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hoocks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isloading } = useAuth();
    if (isloading) {
        return <Spinner animation="border" variant="primary" />
    }
    return (
        <Route

            {...rest}
            render={({ location }) => user?.role === "admin" ? (children) : <Redirect to={{
                pathname: '/',
                state: { from: location }
            }}>

            </Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;