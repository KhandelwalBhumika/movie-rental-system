import React, { useState, useEffect } from 'react';
import api from '../ApiTracker/api';
import MovieCard from './MovieCard';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

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

        //   if(!authorized){
        //     return <Redirect to="/logIn"/>
        // }
        // const handleChange = (e) => {
        //   // movies.filter(movies => movies.includes(props.genre)).map(filteredMovie => <li>{mrx}</li>)
        //   movies.filter(() => {movies.incliudes})
        // };

        const handleChange = (event) => {
          setSelectedOption(event.target.value);
          // console.log(`Option selected:`, selectedOption, name, value, selectedOption.target.value);
          filter({ genre: event.target.value })
          // return setSelectedOption
        };

        const logOut = () => {
          localStorage.clear()
          history.push('/logIn');
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
        <i className="bi bi-list toggle-sidebar-btn" />
        </div>
        <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
            <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
            <button type="submit" title="Search"><i className="bi bi-search" /></button>
        </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <Nav>
            <div className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <NavDropdown title={userName}>
            <NavDropdown.Item onClick={logOut}>
            <span className="d-none d-md-block ps-2">Log Out</span>
            </NavDropdown.Item>
            </NavDropdown>
            </div>
            </Nav>
          </ul>
        </nav>
    </header>
    {/* <!-- ======= Header ======= --> */}








    {/* <!-- ======= Sidebar ======= --> */}
    <div id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
            <a className="nav-link collapsed" href="index.html">
                <i className="bi bi-grid" />
            <span>Dashboard</span>
            </a>
        </li>
        {/* <li className="nav-item">
        <div className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
            <i className="bi bi-menu-button-wide" /> Users
            <i className="bi bi-chevron-down ms-auto" />
        </div>
        </li> */}
        {/* <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">  */}
        {/* <li>
            {/* <a href=""> */}
              {/* <i className="bi bi-circle"></i><span>Show Movies</span> */}
            {/* </a> */}
          {/* </li>  */}
          {/* </ul> */}
          </ul>



          <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" 
                        // href="#"
                        >
                        <i className="bi bi-journal-text"></i><span>Users</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                {/* <a href="">
                                <i className="bi bi-circle"></i><span>Show All Movies</span>
                                </a> */}
                            </li>
                            <li className="nav-heading">Pages</li>
                            {/* <li className="item"> */}
                                <a className="nav-link collapsed" href="users-profile.html">
                                <i className="bi bi-person" />
                                <span>Profile</span>
                                </a>
                            {/* </li> */}
                            </ul>
                            </li>

          {/* <Dropdown
        label="User"
        options={[
          { label: 'Show Movies', value: 'showMovies' }
        ]}
        value={user}
        onChange={handleUserChange}
      /> */}




          <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
        <div className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
            <i className="bi bi-menu-button-wide" /> Admin
            <i className="bi bi-chevron-down ms-auto" />
        </div>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav"> 
        <li>
              <i className="bi bi-circle"></i><span>Show All Movies</span>
          </li>
          <li>
              <i className="bi bi-circle"></i><span>Add Movies</span>
          </li>
          <li>
              <i className="bi bi-circle"></i><span>Show User Rented List</span>
          </li>
        </ul>
        </li>
    </ul>
    
    <div>
    <li className="nav-heading">Pages</li>
    {/* <li className="item"> */}
        <a className="nav-link collapsed" 
        // href="/"
        >
          <NavDropdown>
            <i className="bi bi-person" />
        <span>Profile</span>
        </NavDropdown>
        </a>
        

    {/* </li> */}
    </div>

      {/* <!-- End Profile Page Nav --> */}
    </div>






        {/* Body */}

      <main id="main" className="main">

            <h3>Movies</h3>
            <hr></hr>


              <div className="form-floating mb-3">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleChange} name="genre" value={selectedOption}>
            <option value="">Select one</option>
            <option value="fantasy"> Fantasy</option>
            <option value="romcom"> Romcom</option>
            <option value="drama"> Drama</option>
            <option value="patriotic"> Patriotic</option>
            <option value="action"> Action</option>
            <option value="chill"> Chill</option>
            <option value="equality"> Equality</option>
          </select>
          <label htmlFor="floatingSelect">Filter (By Genre):</label>
          </div>


        { isAdmin && <a href="/addMovies" className="btn btn-primary w-40 p-2 m-3">Add Movie</a> }

        { isAdmin && <a href="/UserRentedList" className="btn btn-primary w-40 p-2 m-3">Show User Rented List</a> }
        

        <hr></hr>
        <section className="section row">
            {
            movies.map(movies =>
                <MovieCard key={movies._id} {...movies} pageRefresh={filter} />)
            }
        </section>

      </main>
        






        {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" className="footer">
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