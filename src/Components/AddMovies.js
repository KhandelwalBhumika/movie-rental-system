import React, {useState} from 'react';
import Swal2 from "sweetalert2";
import api from "../ApiTracker/api";

function AddMovies(props) {

    const [movie, setMovie] = useState({
        name: "",
        releaseDate: "",
        genre: "",
        description: "",
        price: "",
        quantity: ""
    })

    const handleChange = event =>{
        const {name, value} = event.target;
        setMovie({
            ...movie,
            [name]: value
        })
    };

    const addingMovie = (e) =>{
        e.preventDefault()
        // const{name} = movie
        const {name, releaseDate, genre, description, price, quantity} = movie;
        if(name && releaseDate && genre && description && price && quantity){
            api.post("movies/admin/create", movie)
            .then((res)=>{
                Swal2.fire({
                    icon : "success",
                    title: res.data.data
                })
                if (res.data.role && res.data.token) {
                    localStorage.getItem("role", res.data.role);
                    localStorage.getItem("token", res.data.token);
                  }
                //return res
            })
            .catch((error)=>{
                Swal2.fire({
                    icon : "error",
                    title : error.response.data.message
                })
            })
        }
      }
      


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
    <main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md- d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Add Movie</h5>
                    <p className="text-center small">Enter the details to add movie.</p>
                  </div>
                  <form className="row g-3 needs-validation" onSubmit={addingMovie}>
                      <hr></hr>

<div className="col-12">
  <label htmlFor="name" className="form-label">Movie Name</label>
  <input type="text" name="name" className="form-control" id="name" 
  placeholder='movie-name'
  onChange={handleChange}
   required />
</div>

<div className="col-12">
      <label htmlFor="genre" className="form-label">Genre</label>
      <input type="text" name="genre" className="form-control" id="genre" 
      onChange={handleChange} 
    placeholder='genre'
      required />
    </div>

    <div className="col-12">
      <label htmlFor="description" className="form-label">Description</label>
      <input type="text" name="description" className="form-control" id="description" 
      placeholder='description'
      onChange={handleChange}
       required />
    </div>

    <div className="col-12">
      <label htmlFor="releaseDate" className="form-label">Release Date</label>
      <input type="date" name="releaseDate" className="form-control" id="releaseDate"
      placeholder='releaseDate'
       onChange={handleChange} 
       required />
    </div>

    <div className="col-12">
      <label htmlFor="quantity" className="form-label">Quantity</label>
      <input type="number" name="quantity" className="form-control" id="quantity" 
      onChange={handleChange} 
    placeholder='quantity'
      required />
    </div>

    <div className="col-12">
      <label htmlFor="price" className="form-label">Price</label>
      <input type="number" name="price" className="form-control" id="price" 
      onChange={handleChange} 
    placeholder='price'
      required />
    </div>


<hr></hr>
    <div>
      <div className="col-12">
      <button className="btn btn-primary w-100" type="submit">Add Movie</button>
      </div>
    </div>
  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
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

export default AddMovies

