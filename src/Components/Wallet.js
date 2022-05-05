import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Swal2 from "sweetalert2";
import api from "../configApi/api";

function Wallet(props) {

  

  const userName = localStorage.getItem('name')
  
  // const userId = localStorage.getItem('_id')

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNumber: "",
    balance: "",
    newBalance: ""
  })

  // const [totalBalance, setTotalBalance] = useState();

  const history = useHistory();

  const logOut = () => {
    localStorage.clear()
    history.push('/logIn');
  }

  const handleChange = event =>{
    const {name, value} = event.target;
    setProfile({
        ...profile,
        [name]: value
    })
  };

  // const updateBalance = e => {
  //   const {name, value} = e.target;
  //   setTotalBalance({
  //     totalBalance.value  + profile.balance.value,
  //     [name]: value
  //   })
  // }

  useEffect(() => {
    api.get(`users/details`)
    .then((res) => (res.data.newBalance = res.data.balance)  && setProfile(res.data))
  }, [])


  const updateProfile = (e) => {
    e.preventDefault()
    const {firstName, lastName, contactNumber, email, password, balance} = profile
    if(firstName || lastName || contactNumber || email || password || balance){
      console.log(profile)
      delete profile._id
      delete profile.newBalance
      api.put(`users/manage/updateWallet`, profile)
      .then((res) => {
        Swal2.fire({
          icon : "success",
          // title: res.data.message
          title: "Successfully updated!"
      })
      // props.updatePage()
      // history.push('/updateWallet')
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
        {/* <i className="bi bi-list toggle-sidebar-btn" /> */}
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
            <NavDropdown.Item>
              <a href='/wallet' className="d-none d-md-block ps-2"><span>Manage Profile and Wallet</span>
              </a>
            </NavDropdown.Item>
            </NavDropdown>
            </div>
            </Nav>
          </ul>
        </nav>
    </header>
    {/* <!-- ======= Header ======= --> */}


    <h1>Wallet</h1>
    <hr></hr>
    <h3>Manage Profile and Wallet</h3>
    <hr></hr>


    <div className="container">
      {/* <main></main> */}
        <div className='min-vh-100 d-flex flex-column py-4'>
    
            

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      
      <Breadcrumb className='m-4'>
          <Breadcrumb.Item href="/logIn" >LogIn</Breadcrumb.Item>
          <Breadcrumb.Item href="/showAllMovies"> Show All Movies</Breadcrumb.Item>
          <Breadcrumb.Item href="/wallet" active> Manage Profile and Wallet</Breadcrumb.Item>
        </Breadcrumb>
        
            
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md- d-flex flex-column align-items-center justify-content-center">
            
            <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Manage Profile and Wallet</h5>
                    <p className="text-center small">Manage money in your wallet.</p>
                  </div>
                  <form className="row g-3 needs-validation" 
                  onSubmit={updateProfile}
                  >
                      <hr></hr>


                      <div className="col-12 text-center pb-0 fs-4">
                      <img src="assets/img/profile-img.jpg" alt="Profile" className="rounded-circle"/>
                      <h3>Welcome, {userName}</h3>
                      
                      
                      
                      <div className="col-12 p-3 ">
        <label htmlFor="name" className="form-label">Balance: {profile.newBalance} </label>
        {/* total amount - rent movies amount */}
      </div>
      </div>

      <div className="col-12">
      <label htmlFor="firstName" className="form-label">Your First Name:</label>
      <input 
      type="text" 
      name="firstName" 
      className="form-control" 
      id="firstName" 
      value={profile.firstName}
      onChange={handleChange} 
       />
    </div>

    <div className="col-12">
      <label htmlFor="lastName" className="form-label">Your Last Name:</label>
      <input 
      type="text" 
      name="lastName" 
      className="form-control" 
      id="lastName" 
      value={profile.lastName}
      onChange={handleChange} 
       />
    </div>

    {/* <div className="col-12">
      <label htmlFor="yourEmail" className="form-label">Email</label>
      <input 
      type="email" 
      name="email" 
      className="form-control" 
      id="yourEmail" 
      value={profile.email}
      onChange={handleChange} 
       />
    </div> */}

    <div className="col-12">
      <label htmlFor="yourPassword" className="form-label">Password:</label>
      <input 
      type="password" 
      name="password" 
      className="form-control" 
      id="yourPassword" 
      placeholder='Enter new password'
      onChange={handleChange} 
       />
    </div>

    <div className="col-12">
      <label htmlFor="yourContact" className="form-label">Contact Number:</label>
      <input 
      type="number" 
      name="contactNumber" 
      className="form-control" 
      id="yourContact" 
      value={profile.contactNumber}
      onChange={handleChange} 
       />
    </div>

      <div className="col-12">
          <label htmlFor="addMoney" className="form-label"> Add Money:</label>
          <input 
          type="number" 
          name="balance" 
          className="form-control m-3" 
          id="balance" 
          value={profile.balance}
          onChange={handleChange} 
          placeholder='Enter amount to be added'
           />
          <button className="btn btn-primary w-100" type="submit">Update </button>
       </div>


                      </form>
                      </div>
                      </div>
      </div>
      </div>
      </div>
      </section>
      </div>
      </div>


        








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

export default Wallet;