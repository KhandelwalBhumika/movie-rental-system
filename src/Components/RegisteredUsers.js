import React, {useState, useEffect} from 'react';
import api from '../configApi/api';
import ShowAllUsers from './ShowAllUsers';



function RegisteredUsers() {
    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: ""
    });

    useEffect(() => {
        api.get("users/")
        .then(res => setUsers(res.data.data))
        return setUsers
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






      <section className="section row">
            <div className="card">
    <div className="card-body">
      <h5 className="card-title">List of all the registered users.</h5>
      <hr></hr>
       <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact Number</th>
          </tr>
        </thead>

        <tbody>
        {
            users.map ((users) =>
                {
                <ShowAllUsers key={users._id} {...users} 
                />
                })
            }
            </tbody>
        </table> 
       </div>
       </div>
    </section> 







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

export default RegisteredUsers