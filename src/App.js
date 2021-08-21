import "./App.scss";
import "./sass/main.scss";
import { Route, Switch, Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import UserInfo from "./pages/User/UserInfo/UserInfo";
import UserBooking from "./pages/User/UserBooking/UserBooking";
import UserUpdate from "./pages/User/UserUpdate/UserUpdate";
import FilmManage from "./pages/Admin/FilmManage/FilmManage";
import UserManage from "./pages/Admin/UserManage/UserManage";
import AddMovie from "./pages/Admin/FilmManage/AddMovie";
import AddUser from "./pages/Admin/UserManage/AddUser";
import UpdateMovie from "./pages/Admin/FilmManage/UpdateMovie";
import UpdateUser from "./pages/Admin/UserManage/UpdateUser";
import HomeTemplate from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import { UserTemplate } from "./templates/UserTemplate";
import { createBrowserHistory } from "history";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Schedule from "./pages/Admin/FilmManage/Schedule";
import Demo from "./Demo";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <Route exact path="/demo" component={Demo} />
          <HomeTemplate exact path="/" Component={Home} />
          <HomeTemplate exact path="/film_detail/:id" Component={FilmDetail} />
          <HomeTemplate exact path="/checkout/:id" Component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <UserTemplate exact path="/user_info" Component={UserInfo} />
          <UserTemplate exact path="/user_booking" Component={UserBooking} />
          <UserTemplate exact path="/user_update" Component={UserUpdate} />
          <AdminTemplate exact path="/dashboard" Component={Dashboard} />
          <AdminTemplate exact path="/film_manage" Component={FilmManage} />
          <AdminTemplate exact path="/add_movie" Component={AddMovie} />
          <AdminTemplate exact path="/update_movie" Component={UpdateMovie} />
          <AdminTemplate exact path="/schedule" Component={Schedule} />
          <AdminTemplate exact path="/user_manage" Component={UserManage} />
          <AdminTemplate exact path="/add_user" Component={AddUser} />
          <AdminTemplate exact path="/update_user" Component={UpdateUser} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
