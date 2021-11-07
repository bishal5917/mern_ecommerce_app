import Home from './Components/Home/Home'
import Topbar from './Components/Topbar/Topbar'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import SingleProduct from './Components/SingleProduct/SingleProduct'
import Cart from './Components/Cart/Cart'
import Signup from './Components/Sign/Signup'
import Login from './Components/Sign/Login'
import SellerSign from './Components/SellerSign/SellerSign'
import SellerLog from './Components/SellerSign/SellerLog'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
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
          <Route exact path="/sellersign">
            <SellerSign />
          </Route>
          <Route exact path="/sellerlogin">
            <SellerLog />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
