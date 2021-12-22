import React, { useEffect, useState } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../Hoocks/useAuth';
import AddService from '../AddService/AddService';
import MakeAdmin from '../Admin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';

import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageServices from '../ManageServices/ManageServices';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Review from '../Review/Review';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user, logOut } = useAuth();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://pacific-caverns-05949.herokuapp.com/checkAdmin/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data[0]?.role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            });
    }, [user?.email]);
    console.log(isAdmin);


    return (
        <div>
            <div className="dashboard-container ">
                <div className="row">
                    <div className="col-md-2 bg-dark">
                        <div className="dashboard">
                            <h4 className='text-warning p-5'>Dashboard</h4>
                            <div className="text-center">

                                <Link to={`${url}`}>
                                    <h5 className=" ms- 3 text-white">My Orders</h5>
                                </Link>
                                <Link to={`${url}/payment`}>
                                    <h5 className=" ms- 3 text-white">Pay</h5>
                                </Link>
                                {
                                    user?.email &&
                                    <Link to={`${url}/review`}>
                                        <h5 className=" ms- 3 text-white">Review</h5>
                                    </Link>
                                }
                                {isAdmin && (
                                    <Link to={`${url}/manageallorder`}>
                                        <h5 className="ms- 3 text-white">Manage All Order</h5>
                                    </Link>

                                )}
                                {isAdmin && (
                                    <Link to={`${url}/addService`}>
                                        <h5 className="ms- 3 text-white">Add Service</h5>
                                    </Link>

                                )}

                                {isAdmin && (
                                    <Link to={`${url}/makeAdmin`}>
                                        <h5 className=" ms- 3 text-white">Make Admin</h5>
                                    </Link>
                                )}
                                {isAdmin && (
                                    <Link to={`${url}/manageServices`}>
                                        <h5 className=" ms- 3 text-white">Manage Service</h5>
                                    </Link>
                                )}
                                {isAdmin && (

                                    <button className='btn btn-outline-danger mb-5' onClick={logOut}>SignOut</button>

                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <PrivateRoute path={`${path}/myorder`}>
                                <MyOrder></MyOrder>
                            </PrivateRoute>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            {/* <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route> */}
                            <Route path={`${path}/addService`}>
                                <AddService></AddService>
                            </Route>
                            <AdminRoute path={`${path}/manageServices`}>
                                <ManageServices></ManageServices>
                            </AdminRoute>
                            <Route path={`${path}/manageallorder`}>
                                <ManageAllOrder></ManageAllOrder>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route exact path={`${path}/`}>
                                <MyOrder></MyOrder>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;