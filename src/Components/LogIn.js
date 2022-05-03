import React, { useState } from 'react';
import Swal2 from "sweetalert2";
import api from "../ApiTracker/api";
import {useHistory} from 'react-router-dom';
import GoogleLogin from 'react-google-login';

// import {
//   GoogleButton,
//   // IAuthorizationOptions,
//   // isLoggedIn,
//   createOAuthHeaders,
//   // logOutOAuthUser,
//   GoogleAuth,
//     GoogleAuthConsumer,
//     // IOAuthState,
// } from "react-google-oauth2";



// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';



function LogIn(props) {

  let history = useHistory();
  
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

      // const handleLogin = async googleData => {
      //   const res = await fetch("/api/v1/auth/google", {
      //       method: "POST",
      //       body: JSON.stringify({
      //       token: googleData.tokenId
      //     }),
      //     headers: {
      //       "Content-Type": "application/json"
      //     }
      //   })
      //   const data = await res.json()
      //   // store returned user somehow
      // }




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
        console.log('e', e, 'user', user)
        if(email && password){
            api.post("users/logIn", user)
            .then((res)=>{  
              console.log('res', res);
              Swal2.fire({
                icon : res.data.status,
                title: res.data.message
            })   
            if(res.data.status === "success") {
              localStorage.setItem('name', res.data.name)
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('role', res.data.role)
            }
             history.push('/showAllMovies')
            // <Router history={history}>...</Router>
           
                // setLoggedin("/showAllMovies")
                
          })
            .catch((error)=>{
                Swal2.fire({
                    icon : "error",
                    // title : error.response.data.message
                    title: error.message
                })
            })
        }
      }


      const responseSuccessGoogle = (response) => {
        console.log('responseSuccessGoogle', response)
          api.post("users/google", response.profileObj)
          // .then(res => {
          //   console.log("Google login success", res);
            // TODO: save token to local storeg and redairect
            .then((res)=>{  
              console.log('res', res);
              Swal2.fire({
                icon : res.data.status,
                title: res.data.message
            })   
            if(res.data.status === "success") {
              localStorage.setItem('name', res.data.name)
              localStorage.setItem('token', res.data.token)
              localStorage.setItem('role', res.data.role)
            }
             history.push('/showAllMovies')
            // <Router history={history}>...</Router>
           
                // setLoggedin("/showAllMovies")
                
          })
            .catch((error)=>{
                Swal2.fire({
                    icon : "error",
                    // title : error.response.data.message
                    title: error.message
                })
            })
        }
      // }

          // })
      // }

      const responseErrorGoogle = (response) => {
        console.log(response)
      }



    //   const loggingGoogle = () => {
    
    //     const [cookies, setCookie] = useCookies(['token']);
    //     setCookie('token', cookies);
    
    //     api.post('/auth-user-oauth', {headers: {cookie: cookies}})
    //     .then((res) => {
    
    //         console.log(res.data.role);
    //         localStorage.setItem("isAuthenticated", "true");
    //         localStorage.setItem("role", res.data.role);
    //     }).then(()=>{
    //         return Swal2.fire({
    //             icon : "success",
    //             title : "Logged in Successfully."
    //         })
    //     })
    //     history.push('/showAllMovies')
    //     .catch((err)=>{
    //         console.log(err);
    //     })
        
    //     return null;
    // }




        // const google = () => {
        //   window.open("http://localhost:3001/auth/google", "_self");
        // };

      // const loggingGoogle = (response) => {
      //   const options  = {
      //     method: 'POST',
      //     url: "http://localhost:3000/showAllMovies",
      //     params: {token: response.tokenId, name: response.name, email: response.email},
          
      //     redirectUri: "http://localhost:3000/showAllMovies",
      //     headers: {
      //       clientId: "286757882492-lpmfcrb421f2nm2bhipojm1ome4b6nre.apps.googleusercontent.com",
      //       host: "http://localhost:3001/auth/google"
      //     }}
      //     conosle.log('params', params)
      // };

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

                  <form className="row g-3 needs-validation" onSubmit={login} >

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
                      className="btn btn-primary w-100" type="submit" 
                        >Login
                      </button>
                      
                      <p >--OR--</p>
                      </div>




                    <div className="col-12">
                      <p className="small mb-0">Don't have an account? 
                      <a href="/signUp" className="btn btn-primary w-100">Register</a>
                      </p>
                    </div>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>

          {/* <GoogleAuth>
            <GoogleAuthConsumer>
               {({responseState, isAuthenticated}) => {
                  if (!isAuthenticated) {
                  return <GoogleButton
                  placeholder="demo/search.png" // Optional
                  options={options}
                  apiUrl="http://localhost:3000/"
                  defaultStyle={true} // Optional
                  displayErrors={true}>Sign in with google</GoogleButton>;
                  } else {

                    console.log('responseState', responseState, isAuthenticated)
                  if (responseState.accessToken) { 
                    console.log('responseState', responseState, createOAuthHeaders())
                    // You can also use isOAuthLoggedIn()
                    // Now send a request to your server using  createOAuthHeaders() function
                    // fetch("http://localhost:3001/auth/google", {
                    //     headers: createOAuthHeaders(),
                    // })
                    // .then(data => console.log("Horay We're logged in!"))
                    // .catch(err => console.error("Just because you have a gmail account doesn't mean you have access!"))
                          }
                      }
                  }}
              </GoogleAuthConsumer>
          </GoogleAuth> */}

<GoogleLogin
    clientId="286757882492-lpmfcrb421f2nm2bhipojm1ome4b6nre.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
  />
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








// Your Client Id: 
// 286757882492-voj0n5oc3nqpofct09h1458pbavfkmog.apps.googleusercontent.com
// 286757882492-41vp7i4c377jf4vcjad4ak41r9vnvavp.apps.googleusercontent.com
// Your Client Secret:
// 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
// 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
// ACCESS TOKEN:
// ya29.A0ARrdaM_B55H9i2c2u8H_-upn_LFFsQnbxc7-QoqK8H20kgGtBfJVKZimG1QDdjcWEY8QSA0tGrrJjc9emDtUG1Li4yn2hvCLSCpIMsr1K_V82xk-dUoMdeYhJa6FVN9jITpDep6tJfAFE67sRc71UrWBYcVK