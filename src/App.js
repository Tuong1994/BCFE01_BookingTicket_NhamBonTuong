import "./App.scss";
import "./sass/main.scss";
import { lazy, Suspense } from "react";
import { Route, Switch, Router } from "react-router-dom";
import UserInfo from "./pages/User/UserInfo/UserInfo";
import History from "./pages/User/History/History";
import Update from "./pages/User/Update/Update";
import FilmManage from "./pages/Admin/FilmManage/FilmManage";
import UserManage from "./pages/Admin/UserManage/UserManage";
import AddMovie from "./pages/Admin/FilmManage/AddMovie";
import AddUser from "./pages/Admin/UserManage/AddUser";
import UpdateMovie from "./pages/Admin/FilmManage/UpdateMovie";
import UpdateUser from "./pages/Admin/UserManage/UpdateUser";
import HomeTemplate from "./templates/HomeTemplate";
import Loading from "./component/Loading/Loading";
import { AdminTemplate } from "./templates/AdminTemplate";
import { UserTemplate } from "./templates/UserTemplate";
import { createBrowserHistory } from "history";
import AdminInfo from "./pages/Admin/AdminInfo/AdminInfo";

export const history = createBrowserHistory();
const Home = lazy(() => import("./pages/Home/Home"));
const Detail = lazy(() => import("./pages/Detail/Detail"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));

function App() {
  return (
    <Router history={history}>
      <Switch>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <HomeTemplate exact path="/" Component={Home} />
            <HomeTemplate exact path="/detail/:id" Component={Detail} />
            <HomeTemplate exact path="/checkout/:id" Component={Checkout} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Suspense>
          <UserTemplate exact path="/user_info" Component={UserInfo} />
          <UserTemplate exact path="/history" Component={History} />
          <UserTemplate exact path="/update" Component={Update} />
          <AdminTemplate exact path="/film_manage" Component={FilmManage} />
          <AdminTemplate exact path="/add_movie" Component={AddMovie} />
          <AdminTemplate exact path="/update_movie" Component={UpdateMovie} />
          <AdminTemplate exact path="/user_manage" Component={UserManage} />
          <AdminTemplate exact path="/add_user" Component={AddUser} />
          <AdminTemplate exact path="/update_user" Component={UpdateUser} />
          <AdminTemplate exact path="/admin_info" Component={AdminInfo} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;

