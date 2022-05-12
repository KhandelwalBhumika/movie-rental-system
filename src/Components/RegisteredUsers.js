import React, {useState, useEffect} from 'react';
import api from '../configApi/api';
import ShowAllUsers from './ShowAllUsers';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import { useHistory } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';


function RegisteredUsers() {

    const [users, setUsers] = useState([]);

    const userName = localStorage.getItem('name')

    const history = useHistory();

    useEffect(() => {
        api.get("users/")
        .then((res) => {setUsers(res.data)
          console.log(res.data)
        })
      }, [])


      const logOut = () => {
        localStorage.clear()
        history.push('/logIn');
      }

      const manageProfile = () => {
        history.push('/manageProfileAndWallet')
      }

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






          

      <section className="section row">
            <div className="card">
    <div className="card-body">
    <h5 className="card-title">List of all the registered users.</h5>
      <h5 className="card-title">List of all the registered users.</h5>
      <Breadcrumb className='m-4'>
             <Breadcrumb.Item href="/logIn" >LogIn</Breadcrumb.Item>
             <Breadcrumb.Item href="/showAllMovies"> Show All Movies</Breadcrumb.Item>
             <Breadcrumb.Item href="/registeredUsers" active> Show All Registered Users</Breadcrumb.Item>
          </Breadcrumb>
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
                 users.map(users => 
                    <ShowAllUsers 
                    key={users._id} {...users} />
                    )
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

export default RegisteredUsers;