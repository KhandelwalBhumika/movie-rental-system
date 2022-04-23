// import { Redirect } from 'react-router-dom';

import React, { useState } from 'react';
import Swal2 from "sweetalert2";
import api from "../ApiTracker/api";
// import LogIn from './LogIn';
import './style.css';
// import {useHistory} from 'react-router-dom;'
import {


  // BrowserRouter,
    // Switch,
    useHistory,
    // Route,
    // useLocation,
  } from "react-router-dom";

function SignUp(props) {
  // const [ isAuth, setIsAuth ] = useState(true);
  const {history} = useHistory()
  const [user, setUser] = useState({
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             contactNumber: ""
       })

       const handleChange = (event) => {
                 const {name, value} = event.target;
                 setUser({
                 ...user,
                    [name]: value
             })
              };

              const registration = (e) =>{
                e.preventDefault()
                console.log('user', user)
                const {firstName, lastName, email, password, contactNumber} = user;
                if(firstName && lastName && email && password && contactNumber){
                    api.post("users/signUp", user)
                    .then((res)=>{
                        console.log('res', res.data)
                        Swal2.fire({
                            icon : "success",
                            title: res.data.message
                        })
                        history.push('/logIn')
                    })
                    .catch((error)=>{
                        Swal2.fire({
                            icon : "error",
                            title : error.response.data.message
                        })
                    })
                }
              }

              // if(!isAuth){
              //   return <Redirect to="/logIn" />
              // }

  return (
    <>
    <main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md- d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p className="text-center small">Enter your details to create account.</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={registration}>

    <div className="col-12">
      <label htmlFor="firstName" className="form-label">Your First Name</label>
      <input type="text" name="firstName" className="form-control" id="firstName" onChange={handleChange} required />
    </div>

    <div className="col-12">
      <label htmlFor="lastName" className="form-label">Your Last Name</label>
      <input type="text" name="lastName" className="form-control" id="lastName" onChange={handleChange} required />
    </div>

    <div className="col-12">
      <label htmlFor="yourEmail" className="form-label">Your Email</label>
      <input type="email" name="email" className="form-control" id="yourEmail" onChange={handleChange} required />
    </div>

    <div className="col-12">
      <label htmlFor="yourPassword" className="form-label">Password</label>
      <input type="password" name="password" className="form-control" id="yourPassword" onChange={handleChange} required />
    </div>

    <div className="col-12">
      <label htmlFor="yourContact" className="form-label">Contact Number</label>
      <input type="number" name="contactNumber" className="form-control" id="yourContact" onChange={handleChange} required />
    </div>

    <div className="col-12">
      <div className="form-check">
      <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
      <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the terms and conditions</label>
      <div className="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>


    <div>
      <div className="col-12">
      <button className="btn btn-primary w-100" type="submit">Create Account</button>
      </div>
      <div className="col-12">
      <p className="small mb-0">Already have an account? 
      <a href="/logIn" className="btn btn-primary w-100" >Log-In</a>
      </p>
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




export default SignUp;