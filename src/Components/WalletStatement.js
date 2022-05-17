import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Swal2 from "sweetalert2";
import api from "../configApi/api";
import WalletDetails from './WalletDetails';

function WalletStatement() {

    const [info, setInfo] = useState([])

        useEffect(() => {
            api.get("movies/wallet-history")
            .then(res => setInfo(res.data.data))
            console.log('', setInfo)
            }, [])

    const history = useHistory();

    const logOut = () => {
        localStorage.clear()
        history.push('/logIn');
      }

      const manageProfile = () => {
        history.push('/manageProfileAndWallet')
      }
      

      const userName = localStorage.getItem('name')

  return (
      <>
        {/* ========HEADER======== */}
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
            <span className="d-none d-lg-block">Bingedd!!!</span>
        </a>
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
    {/* ========HEADER======== */}



    {/* ========BODY======== */}

      

             <section className="section row ">
             <div className="card">
             <div className="card-body">

          
       <h2 className="card-title">
           Your wallet statement</h2>
        
            
       <Breadcrumb className='m-4'>
             <Breadcrumb.Item href="/logIn" >LogIn</Breadcrumb.Item>
             <Breadcrumb.Item href="/showAllMovies"> Show All Movies</Breadcrumb.Item>
             <Breadcrumb.Item href="/manageProfileAndWallet"> Manage Profile And Wallet</Breadcrumb.Item>
             <Breadcrumb.Item href="/walletStatement" active> Wallet Statement</Breadcrumb.Item>
           </Breadcrumb>
           <hr></hr>
      
        <table className="table table-striped">
        <thead>
          <tr>
             <th scope="col">Time</th>
             <th scope="col">Transaction Type</th>
             <th scope="col">Movie Rented</th>
             <th scope="col">Details</th>
             <th scope="col">Balance</th>
           </tr>
         </thead>

         <tbody>
             {
                 info.map(info => 
                    <WalletDetails 
                    key={info._id} {...info} />
                    )
             }
             </tbody>
                </table> 
             </div>
             </div>
           </section> 


    {/* ========BODY======== */}


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

export default WalletStatement;