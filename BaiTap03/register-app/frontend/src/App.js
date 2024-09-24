import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
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
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
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