import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/HomeMain";
import ForgotPassword from './components/ForgotPassword';
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile">
          <Navbar/>
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
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;