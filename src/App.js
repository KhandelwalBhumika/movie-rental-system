import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React from 'react';
import ProtectedRoute from './Components/isAuth';
import './Components/style.css';
import LogIn from './Components/LogIn';
import ShowAllMovies from "./Components/ShowAllMovies";
import EditMovies from './Components/EditMovies';
import SignUp from './Components/SignUp';
import AddMovies from './Components/AddMovies';
import WalletStatement from './Components/WalletStatement';
import UserRentedList from './Components/UserRentedList';
import ManageProfileAndWallet from './Components/ManageProfileAndWallet';
import RegisteredUsers from './Components/RegisteredUsers';
import ReturnMovie from './Components/ReturnMovie';



function App() {

return(
  <>
  <Router
   forceRefresh={true}
   >
    <Switch>
      <Route exact path="/logIn" component={LogIn} />
      <Route exact path="/signUp" component={SignUp} />
      <ProtectedRoute exact path="/editMovies" component={EditMovies} />
      <ProtectedRoute exact path="/addMovies" component={AddMovies} />
      <ProtectedRoute exact path="/showAllMovies" component={ShowAllMovies} />
      <ProtectedRoute exact path="/manageProfileAndWallet" component={ManageProfileAndWallet} />
      <ProtectedRoute exact path='/walletStatement' component={WalletStatement} />
      <ProtectedRoute exact path="/userRentedList" component={UserRentedList} />
      <ProtectedRoute exact path="/registeredUsers" component={RegisteredUsers} />
      <ProtectedRoute exact path="/returnMovie" component={ReturnMovie} />
      <Route exact path="" component={LogIn} />
    </Switch>
  </Router>
  </>
)
};

export default App