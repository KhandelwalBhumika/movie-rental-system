// import React, { useState, useEffect } from 'react';
// import api from '../ApiTracker/api';

// export default function UserRentedList() {

//         const[rentList, setRentList] = useState([])

//         useEffect(() => {
//             api.get("movies/rent-movie/list/")
//             .then(res => setRentList(res.data.data))
//             console.log('', rentList)
//           }, [rentList])

          
//   return (


//     <>


//     {/* <!-- ======= Header ======= --> */}
//     <header id="header" className="header fixed-top d-flex align-items-center">
//             <div className="d-flex align-items-center justify-content-between">
//         <a href="index.html" className="logo d-flex align-items-center">
//             <span className="d-none d-lg-block">Bingedd!!!</span>
//         </a>
//         <i className="bi bi-list toggle-sidebar-btn" />
//         </div>
//         <div className="search-bar">
//         <form className="search-form d-flex align-items-center" method="POST" action="#">
//             <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
//             <button type="submit" title="Search"><i className="bi bi-search" /></button>
//         </form>
//         </div>

//                 <nav className="header-nav ms-auto">
//         <ul className="d-flex align-items-center">
//         <div className="nav-link nav-profile d-flex align-items-center pe-0" data-bs-toggle="dropdown">
//             <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle" />
//             <span className="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
           
//             </div>
            

//           {/* <!-- End Profile Iamge Icon --> */}
//             <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
//             </ul>
//             </ul>
//         </nav>
//     </header>
//     {/* <!-- ======= Header ======= --> */}









//       {/* <!-- ======= Sidebar ======= --> */}
//       <div id="sidebar" className="sidebar">
//     <ul className="sidebar-nav" id="sidebar-nav">
//         <li className="nav-item">
//             <a className="nav-link collapsed" href="index.html">
//                 <i className="bi bi-grid" />
//             <span>Dashboard</span>
//             </a>
//         </li>
//         <li className="nav-item">
//         <div className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
//             <i className="bi bi-menu-button-wide" /> Users
//             <i className="bi bi-chevron-down ms-auto" />
//         </div>
//         </li>
//         <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav"> 
//         <li>
//             {/* <a href=""> */}
//               <i className="bi bi-circle"></i><span>Show Movies</span>
//             {/* </a> */}
//           </li>
//           </ul>
//           </ul>


//           <ul className="sidebar-nav" id="sidebar-nav">
//           <li className="nav-item">
//         <div className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" >
//             <i className="bi bi-menu-button-wide" /> Admin
//             <i className="bi bi-chevron-down ms-auto" />
//         </div>
//         <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav"> 
//         <li>
//             {/* <a href=""> */}
//               <i className="bi bi-circle"></i><span>Show Movies</span>
//             {/* </a> */}
//           </li>
//           <li>
//             {/* <a href="components-accordion.html"> */}
//               <i className="bi bi-circle"></i><span>Add Movies</span>
//             {/* </a> */}
//           </li>
//         </ul>
//         </li>
//     </ul>
    
//     <div>
//     <li className="nav-heading">Pages</li>
//     {/* <li className="item"> */}
//         <a className="nav-link collapsed" href="users-profile.html">
//         <i className="bi bi-person" />
//         <span>Profile</span>
//         </a>
//     {/* </li> */}
//     </div>

//       {/* <!-- End Profile Page Nav --> */}
//     </div>





//       {/* BODY */}
//       {/* <div class="col-lg-6"> */}
// <main id="main" className="main">
//           <div class="card">
//             <div class="card-body">
//               <h5 class="card-title">List of users who rented movies.</h5>
//               <table class="table table-striped">
//                 <thead>
//                   <tr>
//                     <th scope="col">Serial No.</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Position</th>
//                     <th scope="col">Age</th>
//                     <th scope="col">Start Date</th>
//                   </tr>
//                   </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">1</th>
//                     <td>Brandon Jacob</td>
//                     <td>Designer</td>
//                     <td>28</td>
//                     <td>2016-05-25</td>
//                   </tr>
//                   <tr>
//                   <th scope="row">2</th>
//                     <td>Bridie Kessler</td>
//                     <td>Developer</td>
//                     <td>35</td>
//                     <td>2014-12-05</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">3</th>
//                     <td>Ashleigh Langosh</td>
//                     <td>Finance</td>
//                     <td>45</td>
//                     <td>2011-08-12</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">4</th>
//                     <td>Angus Grady</td>
//                     <td>HR</td>
//                     <td>34</td>
//                     <td>2012-06-11</td>
//                   </tr>
//                   <tr>
//                     <th scope="row">5</th>
//                     <td>Raheem Lehner</td>
//                     <td>Dynamic Division Officer</td>
//                     <td>47</td>
//                     <td>2011-04-19</td>
//                   </tr>
//                 </tbody>
//               </table>
//               {/* <!-- End Table with stripped rows --> */}

//             </div>
//             </div>
//           {/* </div> */}


//           {/* <section className="section row">
//             {
//             movies.map(movies =>
//                  key={movies._id} {...movies} )
//             }
//         </section> */}

//           </main>












//           {/* <!-- ======= Footer ======= --> */}
//         <footer id="footer" className="footer">
//         <div className="copyright">
//           © Copyright <strong><span>Bingedd!!!</span></strong>. All Rights Reserved
//         </div>
//         <div className="credits">
//           Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//         </div>
//         </footer>
//         {/* <!-- End Footer --> */}
//           </> 
//   )
// }

// // export default userRentedList;