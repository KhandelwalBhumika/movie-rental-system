import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import isAuth from './Components/isAuth';
// import routes from './routes';
import './Components/style.css';
import LogIn from './Components/LogIn';
import ShowAllMovies from "./Components/ShowAllMovies";
import EditMovies from './Components/EditMovies';
import SignUp from './Components/SignUp';
import AddMovies from './Components/AddMovies';
// import UserRentedList from './Components/UserRentedList';

export default function App() {

return(
  <>
  <Router>
    <Switch>
      <Route exact path="/logIn" component={LogIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/showAllMovies" component={ShowAllMovies} />
      <Route exact path="/editMovies" component={EditMovies} />
      <Route exact path="/addMovies" component={AddMovies} />
      {/* <Route exact path="/userRentedList" component={UserRentedList} /> */}
      {/* <Route exact path="/showAllMovies" component={() => <ShowAllMovies authorized={false} />}/>  */}
    </Switch>
  </Router>
  </>
)
};