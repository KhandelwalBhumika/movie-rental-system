import React, { useState, useEffect } from 'react';
import api from '../ApiTracker/api';
import UserList from './UserList';

export default function UserRentedList() {

        const[rentList, setRentList] = useState([])

        // const[movies, setMovies] = useState([])

        useEffect(() => {
            api.get("movies/rent-movie/list/")
            .then(res => setRentList(res.data.data))
            console.log('', rentList)
          }, [])

          
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
        <div className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
            <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
            <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
           
            </div>
            

          {/* <!-- End Profile Iamge Icon --> */}
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            </ul>
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
        <li className="nav-item">
        <div className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
            <i className="bi bi-menu-button-wide" /> Users
            <i className="bi bi-chevron-down ms-auto" />
        </div>
        </li>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav"> 
        <li>
            {/* <a href=""> */}
              <i className="bi bi-circle"></i><span>Show Movies</span>
            {/* </a> */}
          </li>
          </ul>
          </ul>


          <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
        <div className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
            <i className="bi bi-menu-button-wide" /> Admin
            <i className="bi bi-chevron-down ms-auto" />
        </div>
        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav"> 
        <li>
            {/* <a href=""> */}
              <i className="bi bi-circle"></i><span>Show Movies</span>
            {/* </a> */}
          </li>
          <li>
            {/* <a href="components-accordion.html"> */}
              <i className="bi bi-circle"></i><span>Add Movies</span>
            {/* </a> */}
          </li>
        </ul>
        </li>
    </ul>
    
    <div>
    <li className="nav-heading">Pages</li>
    {/* <li className="item"> */}
        <a className="nav-link collapsed" href="users-profile.html">
        <i className="bi bi-person" />
        <span>Profile</span>
        </a>
    {/* </li> */}
    </div>

      {/* <!-- End Profile Page Nav --> */}
    </div>





      {/* BODY */}
        <main id="main" className="main">

            <section className="section row">
            <div className="card">
    <div className="card-body">
      <h5 className="card-title">List of users who rented movies.</h5>
      <hr></hr>
       <table className="table table-striped">
        <thead>
          <tr>
            {/* <th scope="col">Serial No.</th> */}
            <th scope="col">User Name</th>
            <th scope="col">Movie Rented</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>

        <tbody>
            {
                rentList.map(rentList =>
                <UserList
                 key={rentList._id} {...rentList} />)
            }
            </tbody>
                </table> 
       </div>
       </div>
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

// export default userRentedList;