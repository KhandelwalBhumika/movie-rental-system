import React, { useState } from 'react';
import Swal2 from "sweetalert2";
import api from "../ApiTracker/api";
import { useHistory } from "react-router-dom";
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';


function LogIn() {

  const history = useHistory();
  
    const [user, setUser] = useState({
        email: "" ,
        password: ""
    })



    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({
            ...user,
            [name]: value
        })
      };



      // async function handleSubmit(event) {
      //   event.preventDefault();
      //   try {
      //     // await Auth.signIn(user);
      //     // userHasAuthenticated(true);
      //     // history.push("/");
      //     await isAuth.logIn(user);
      //     history.push("movies/");
      //   } catch (e) {
      //     alert(e.message);
      //   }
      // }

    //   let validationSchema = yup.object().shape({
    //     email: yup.string().required('Email is required')
    //     .email('Email is invalid.')
    //     .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    // password: yup.string().required('Field is required.')
    //     .min(6, 'Password must be at least 6 characters!')        
    //   });

    //   const formOptions = { resolver: yupResolver(validationSchema) };
    //   const { register, handleSubmit } = useForm(formOptions);
    //   // const { errors } = formState;


      const login = (e) =>{

        e.preventDefault()
        const {email, password} = user;
        if(email && password){
            api.post("users/logIn", user)
            .then((res)=>{  
              Swal2.fire({
                    icon : res.data.status,
                    title: res.data.message
                })   

                if(res.data.status === "success") {
                  localStorage.setItem('token', res.data.token)
                  localStorage.setItem('role', res.data.role)
            }
            // .then((res) => {
              history.push("/showAllMovies");
            // })
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
    <main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md- d-flex flex-column align-items-center justify-content-center">

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p className="text-center small">Enter your email and password to login.</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={login}>

                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input 
                        className="form-control" 
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        type="email"
                        // id="yourEmail" 
                        //     {...register('email')} 
                        // className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        onChange={handleChange}
                        required/>
                        {/* <div className="invalid-feedback">Please enter your email.</div> */}
                      </div>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Password</label>
                      <input 
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        type="password"
                        // id="yourPassword" 
                        //     {...register('password')} 
                        // className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        onChange={handleChange}
                      className="form-control" 
                      required/>
                      {/* <div className="invalid-feedback">Please enter your password!</div> */}
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="remember" value="true"/>
                        <label className="form-check-label" >Remember me</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        // a href="/showAllMovies" 
                      className="btn btn-primary w-100" type="submit">Login
                      {/* </a> */}
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">Don't have an account? 
                      {/* <a href={SignUp}>Create an account</a> */}
                      <a href="/signUp" className="btn btn-primary w-100">Register</a>
                      </p>
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




export default LogIn;