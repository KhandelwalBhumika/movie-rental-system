import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React from 'react';
// import * as ReactDOM from "react-dom";
import ProtectedRoute from './Components/isAuth';
import './Components/style.css';
import LogIn from './Components/LogIn';
import ShowAllMovies from "./Components/ShowAllMovies";
import EditMovies from './Components/EditMovies';
import SignUp from './Components/SignUp';
import AddMovies from './Components/AddMovies';
// import UserRentedList from './Components/UserRentedList';
import Wallet from './Components/Wallet';





function App() {
  

return(
  <>
  <Router
   forceRefresh={true}
   >
    <Switch>
      <Route exact path="/logIn" component={LogIn}/>
      <Route exact path="/signUp" component={SignUp} />
      <ProtectedRoute exact path="/editMovies" component={EditMovies} />
      <ProtectedRoute exact path="/addMovies" component={AddMovies} />
      <ProtectedRoute exact path="/showAllMovies" component={ShowAllMovies} />
      <Route exact path="/updateWallet" component={Wallet} />
      {/* <ProtectedRoute exact path="/userRentedList" component={UserRentedList} /> */}
      <Route exact path="" component={LogIn}  />
    </Switch>
  </Router>
  </>
)
};

export default App