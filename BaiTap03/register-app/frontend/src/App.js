import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";
import ForgotPassword from './components/ForgotPassword';
 
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
      </Switch>
    </BrowserRouter>
  );
}
 
export default App;