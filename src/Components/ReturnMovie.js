import React, {useState, useEffect} from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useHistory } from 'react-router-dom';
import api from "../configApi/api";
import { Nav, NavDropdown } from 'react-bootstrap';
import ReturnMovieDetails from './ReturnMovieDetails';

function ReturnMovie() {

    const userName = localStorage.getItem('name')


    const history = useHistory();

    const[rentList, setRentList] = useState([])

        useEffect(() => {
            api.get("movies/rent-movie/list/")
            .then((res) => {setRentList(res.data.data)
            console.log(  "asdadad......................",res)})
            // console.log( "res.data", res)
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
    <h5 className="card-title">Return Movie</h5>
    <h5 className="card-title">Return Movie</h5>
      <Breadcrumb className='m-4'>
             <Breadcrumb.Item href="/logIn" >LogIn</Breadcrumb.Item>
             <Breadcrumb.Item href="/showAllMovies"> Show All Movies</Breadcrumb.Item>
             <Breadcrumb.Item href="/returnMovie" active> Return Movie</Breadcrumb.Item>
          </Breadcrumb>
      <hr></hr>
       <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Movie Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Return</th>
          </tr>
        </thead>

        <tbody>
            {
                rentList.map(rentList =>
                <ReturnMovieDetails
                 key={rentList._id} {...rentList} />)
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

export default ReturnMovie