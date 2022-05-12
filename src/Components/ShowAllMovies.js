import React, { useState, useEffect } from 'react';
import api from '../configApi/api';
import MovieCard from './MovieCard';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import RegisteredUsers from './RegisteredUsers';


export function ShowAllMovies(
    // {authorized}
    ) {

      const history = useHistory();

      const userName = localStorage.getItem('name')

    const[movies, setMovies] = useState([])

    const[selectedOption, setSelectedOption] = useState("")

    const filter = (args={}) => {
      api.get(`movies/?genre=${args.genre || ''}`)
        .then(res => setMovies(res.data.data))
    }

        useEffect(() => {
            filter()
          }, [])

        const handleChange = (event) => {
          setSelectedOption(event.target.value);
          // console.log(`Option selected:`, selectedOption, name, value, selectedOption.target.value);
          filter({ genre: event.target.value })
        };

        const logOut = () => {
          localStorage.clear()
          history.push('/logIn');
        }

        const manageProfile = () => {
          history.push('/manageProfileAndWallet')
        }

    const isAdmin = localStorage.getItem('role') === 'admin'

  return (
    <>


    {/* <!-- ======= Header ======= --> */}
    <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">Bingedd!!!</span>
        </a>
        {/* <i className="bi bi-list toggle-sidebar-btn" /> */}
        </div>
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <Nav>
            <div className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <NavDropdown 
            title={userName}
            >
            <NavDropdown.Item onClick={logOut}>
              <span className="d-none d-md-block ps-2">Log Out</span>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <a href='/wallet' className="d-none d-md-block ps-2 " onClick={manageProfile}><span>Manage Profile and Wallet</span>
              </a>
            </NavDropdown.Item>
            </NavDropdown>
            </div>
            </Nav>
          </ul>
        </nav>
    </header>
    {/* <!-- ======= Header ======= --> */}



        {/* Body */}

      <h1>Movies</h1>

      <h2 className='p-2'>All Movies</h2>

              <div className="form-floating mb-3 justify-content-center m-3">
          <select className="form-select w-50" id="floatingSelect" aria-label="Floating label select example" onChange={handleChange} name="genre" value={selectedOption}>
            <option value="">--Select one--</option>
                      <option value="chill">chill</option>
                      <option value="drama">drama</option>
                      <option value="fantasy">fantasy</option>
                      <option value="romcom">romcom</option>
                      <option value="thriller">thriller</option>
                      <option value="action">action</option>
                      <option value="sci-fi">sci-fi</option>
                      <option value="comedy">comedy</option>
                      <option value="patriotic">patriotic</option>
                      <option value="equality">equality</option>
          </select>
          <label htmlFor="floatingSelect" >Filter (By Genre):</label>
          </div>


        { isAdmin && <a href="/addMovies" className="btn btn-primary w-40 p-2 m-3">Add Movie</a> }

        { isAdmin && <a href="/UserRentedList" className="btn btn-primary w-40 p-2 m-3">Show User Rented List</a> }

        { isAdmin && <a href="/registeredUsers" className="btn btn-primary w-40 p-2 m-3">Show All Registered Users</a> }

         <a href="/returnMovie" className="btn btn-primary w-40 p-2 m-3">Return Movie</a> 



        <Breadcrumb className='m-4'>
          <Breadcrumb.Item href="/logIn" >LogIn</Breadcrumb.Item>
          <Breadcrumb.Item href="/showAllMovies" active> Show All Movies</Breadcrumb.Item>
        </Breadcrumb>

        <hr></hr>
        <section className="section row p-5 ">

            {
            movies.map(movies =>
                <MovieCard key={movies._id} {...movies} pageRefresh={filter} />)
            }

        </section>





        {/* <!-- ======= Footer ======= --> */}
  <footer className="footer">
  <div className="copyright">
    © Copyright <strong><span>Bingedd!!!</span></strong>. All Rights Reserved
  </div>
  <div className="credits">
    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
  </div>
  </footer>
  {/* <!-- End Footer --> */}
    </>
  )
}




export default ShowAllMovies;