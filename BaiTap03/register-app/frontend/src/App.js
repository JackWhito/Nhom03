import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/HomeMain";
import ForgotPassword from './components/ForgotPassword';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Logout from "./components/Logout";
import Product from "./components/Product";
import Order from "./components/Order";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/logout">
          <Logout/>
        </Route>
        <Route path="/product/:productId">
          <Product/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;