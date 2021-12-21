import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Share/Header/Header';
import Home from './Pages/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';
import AddService from './Pages/AddService/AddService';
import Services from './Pages/Services/Services';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAllOrder from './Pages/ManageAllOrder/ManageAllOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageServices from './Pages/ManageServices/ManageServices';
import DashBoard from './Pages/DashBoard/DashBoard';

import Footer from './Pages/Share/Footer/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/dashboard'>
            <DashBoard></DashBoard>
          </Route>
          <Route path='/manageServices'>
            <ManageServices></ManageServices>
          </Route>
          <PrivateRoute path='/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute path='/myorder'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/manageallorder'>
            <ManageAllOrder></ManageAllOrder>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>

          <PrivateRoute path='/addservice'>
            <AddService></AddService>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
