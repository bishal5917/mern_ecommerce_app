import Home from './Components/Home/Home'
import Topbar from './Components/Topbar/Topbar'
import Footer from './Components/Footer/Footer'
import SingleProduct from './Components/SingleProduct/SingleProduct'
import Cart from './Components/Cart/Cart'
import Signup from './Components/Sign/Signup'
import Login from './Components/Sign/Login'
import SellerSign from './Components/SellerSign/SellerSign'
import SellerLog from './Components/SellerSign/SellerLog'
import UserAc from './Components/UserAc/UserAc'
import Orders from './Components/Orders/Orders'
import { useSelector } from 'react-redux'
import Shipping from './Components/Shipping/Shipping'
import Order from './Components/PlaceOrder/Order'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import SellerPage from './Components/SellerPage/SellerPage'

function App() {
  // taking a user
  const user = useSelector(state => state.user.curruser)

  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product/:pId">
            <SingleProduct />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/seller">
            <SellerPage />
          </Route>
          <Route exact path="/sellersign">
            <SellerSign />
          </Route>
          <Route exact path="/sellerlogin">
            <SellerLog />
          </Route>
          <Route exact path='/shippingInfo'>
            <Shipping />
          </Route>
          <Route exact path='/order'>
            <Order />
          </Route>
          <Route exact path={user && `/user/${user._id}`}>
            <UserAc />
          </Route>
          <Route exact path={user && `/orders/${user._id}`}>
            <Orders />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
