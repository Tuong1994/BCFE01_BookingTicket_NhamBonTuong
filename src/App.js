import './index.css'
import "./sass/main.scss";
import { Route, Switch, Router } from "react-router-dom";
import { AdminTemplate } from "./templates/AdminTemplate";
import { createBrowserHistory } from "history";
import HomeTemplate from "./templates/HomeTemplate";

import Home from "./pages/Home/Home";
import FilmDetail from "./pages/Detail/FilmDetail";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import MovieManage from "./pages/Admin/MovieManage/MovieManage";
import UpdateMovie from "./pages/Admin/MovieManage/UpdateMovie";
import UserManage from "./pages/Admin/UserManage/UserManage";
import UpdateUser from "./pages/Admin/UserManage/UpdateUser";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import User from "./pages/User/User";


export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/film_detail/:id" Component={FilmDetail} />

          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/user" component={User} />

          <AdminTemplate exact path="/dashboard" Component={Dashboard} />
          <AdminTemplate exact path="/movie_manage" Component={MovieManage} />
          <AdminTemplate exact path="/update_movie" Component={UpdateMovie} />
          <AdminTemplate exact path="/user_manage" Component={UserManage} />
          <AdminTemplate exact path="/update_user" Component={UpdateUser} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
