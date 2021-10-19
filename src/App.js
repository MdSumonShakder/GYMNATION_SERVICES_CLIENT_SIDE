import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Details from './Details/Details';
import Gallery from './pages/Gallery/Gallery';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Notfound from './pages/NotFound/Notfound';
import Pricing from './pages/Pricing/Pricing';
import Header from './pages/Shared/Header/Header';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:detailsId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/pricing">
              <Pricing></Pricing>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
