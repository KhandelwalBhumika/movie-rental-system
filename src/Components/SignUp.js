// import { Redirect } from 'react-router-dom';

import React, { useState } from 'react';
import Swal2 from "sweetalert2";
import api from "../configApi/api";
// import * as Yup from 'yup';
// import {signUpSchema} from './Validation/ValidationSchema';
import './style.css';
import {useHistory} from 'react-router-dom';
import Form  from 'react-bootstrap/Form';
// import {
//   Formik,
//   Form,
//   Field,
//   ErrorMessage,
//   FieldArray,
//   FastField
// } from 'formik';
// import TextError from './TextError';
import { useForm } from 'react-hook-form';



const {Group, label, input} = {...Form}

function SignUp() {


  const history = useHistory()

  const [user, setUser] = useState({
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             confirmPassword: "",
             contactNumber: "",
             role: ""
       })

       const handleChange = (event) => {
                 const {name, value} = event.target;
                 setUser({
                 ...user,
                    [name]: value
             })
              };


 

              // const evaluatePassword = (event) => {
              //   const {name, value} = event.target;
              //   setError(prev => {
              //     const stateObj = { 
              //       ...prev, 
              //       [name]: "" };

              //       switch (name) { 
              //         case "password":
              //           if (!value) {
              //             stateObj[name] = "Please enter Password.";
              //           } else if (user.confirmPassword && value !== user.confirmPassword) {
              //             stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              //           } else {
              //             stateObj["confirmPassword"] = user.confirmPassword ? "" : user.confirmPassword;
              //           }
              //           break;
               
              //         case "confirmPassword":
              //           if (!value) {
              //             stateObj[name] = "Please enter Confirm Password.";
              //           } else if (user.password && value !== user.password) {
              //             stateObj[name] = "Password and Confirm Password does not match.";
              //           }
              //           break;
               
              //         default:
              //           break;
              //       }
               
                //     return stateObj;
                //   });
                // }


              // const validationSchema = Yup.object({
              //   firstName: Yup.string().min(2).required('Required'),
              //   lastName: Yup.string().required('Required'),
              //   email: Yup.string().email('Invalid email format').required('Required'),
              //   password: Yup.string().required('Required'),
              //   confirmPassword: Yup.string().required('Required'),
              //   contactNumber: Yup.number().min(10).max(10).required('Required'),
              //   role: Yup.string().required('Required')
              // })

              // const validateComments = value => {
              //   let error
              //   if (!value) {
              //     error = 'Required'
              //   }
              //   return error
              // }

              // const [formValues, setFormValues] = useState(null)

              const registration = (e) =>{
                console.log("sadfghg")
                e.preventDefault()
                console.log('user', user)
                const {firstName, lastName, email, password, contactNumber, role, confirmPassword} = user;
                if(firstName && lastName && email && password && contactNumber && role && confirmPassword){
                    api.post("users/signUp", user)
                    .then((res)=>{
                        Swal2.fire({
                            icon : res.data.status,
                            title: res.data.message
                        })
                        history.push('/logIn')
                    })
                    .catch((error)=>{
                      Swal2.fire({
                          icon : "error",
                          text: error.response.data.message
                      })
                    })
                }
              }

              const { register, handleSubmit, formState: { errors } } = useForm();
              // const onSubmit = data => console.log(data);
              // {(!formState.isValid && formState.isSubmitted) ?
              //   <Alert variant="danger"   >
              //      {Object.values(formState.errors).map( (e,idx) => {
              //        return (<p key={idx}>{e.message}</p>)
              //      })}
              //   </Alert>
              //   :
              //   <Alert variant="success">Please fill in the form</Alert>
              //   }
              

              // if(!isAuth){
              //   return <Redirect to="/logIn" />
              // }

  return (
    <>
    <main>
    {/* <Formik
      initialValues={formValues || user}
      validationSchema={validationSchema}
      onSubmit={registration}
      enableReinitialize
    > */}
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

                  <form className="row g-3 needs-validation" 
                  onSubmit={registration}
                  // {handleSubmit{registration}}
                  // onSubmit={handleSubmit(onSubmit)}
                  >
                  

    <div className="col-12">
      <Group>
      <label htmlFor="firstName" className="form-label">Your First Name</label>
      <input type="text" name="firstName" className="form-control" id="firstName" placeholder='First Name' 
      {...register("firstName", { required: {
        value: true,
        message: "You must specify your first name before moving forward"
    }, 
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: "That's not a valid name"
    }
    })}
      onChange={handleChange} required />
      {/* <ErrorMessage name='firstName' component={TextError} /> */}
      </Group>
    </div>

    <div className="col-12">
      <Group>
      <label htmlFor="lastName" className="form-label">Your Last Name</label>
      <input type="text" name="lastName" className="form-control" id="lastName" placeholder='Last Name' 
      {...register("lastName", {
        required: {
          value:true,
          message: "Please, add your last name"
        },
        pattern: {
          value: /^[a-zA-Z]+$/,
          message: "Please enter a valid last name"
        }, 
        maxLength: {
          value: 20,
          message: "That's way too long to be a real last name, try again"
       }
      })}
      onChange={handleChange} required />
      {/* <ErrorMessage name='lastName' component={TextError} /> */}
      </Group>
    </div>

    <div className="col-12">
      <Group>
      <label htmlFor="yourEmail" className="form-label">Email</label>
      <input  name="email" className="form-control" id="yourEmail" placeholder='Email'
      {...register("email", {
        required: {
          value: true,
          message: "You need to specify a valid email address"
        }, 
        pattern: {
          value: /^\S+@\S+$/i,
          message: "invalid email!"
       }
      })}
      onChange={handleChange} required />
      {/* <ErrorMessage name='email'>
                {error => <div className='error'>{error}</div>}
              </ErrorMessage> */}
              </Group>
    </div>

    <div className="col-12">
      <Group>
      <label htmlFor="yourPassword" className="form-label">Password</label>
      <input type="password" name="password" className="form-control" id="yourPassword" placeholder='Password'
       {...register("password", {
        required: {
          value: true,
          message: "Required!"
        }, 
        maxLength: {
          value: 20,
          message: "20 characters should be more than enough!"
        }
      })}
      onChange={handleChange} required />
      {/* <ErrorMessage name='password' component={TextError}/> */}
      </Group>
    </div>

    <div className="col-12">
      <Group>
      <label htmlFor="confirmYourPassword" className="form-label">Confirm Password</label>
      <input type="password" name="confirmPassword" className="form-control" id="confirmYourPassword" placeholder="Please re-enter the password to confirm" 
      {...register("password", {
        required: {
          value: true,
          message: "Required!"
        }, 
        maxLength: {
          value: 20,
          message: "20 characters should be more than enough!"
        }
      })}
      onChange={handleChange} required />
      {/* <ErrorMessage name='password' component={TextError}/> */}
      {/* {error.confirmPassword && <span className='error'>{error.confirmPassword}</span>} */}
      </Group>
    </div>

    <div className="col-12">
      <Group>
      <label htmlFor="contactNumber" className="form-label">Contact Number</label>
      <input name="contactNumber" className="form-control" id="contactNumber" placeholder='Contact Number'
      {...register("contactNumber", {
        required: {
          value: true,
          message: "Please add your mobile phone number, I won't call you, promise!"
        }, 
        pattern: {
          value: /^[0-9+-]+$/,
          message: "This is not a valid mobile phone to me, try again!"
        }, 
        minLength: {
          value: 6,
          message: "This number is too short, not gotta fly, try again"
        }, 
        maxLength: {
          value: 12,
          message: "...And now it's too damn long, make sure the number is right, would you?"
        } })}
      onChange={handleChange} required />
      {/* <ErrorMessage name='contactNumber' component={TextError}/> */}
      </Group>
    </div>

      <fieldset className="row mb-3">
      <label>
        <legend className="col-form-label col-sm-2 " htmlFor="role"> User is: </legend>
        </label>
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="role" id="role-user" defaultValue="user" onChange={handleChange} required/>
            <label className="form-check-label" htmlFor="role">
              Client
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="role" id="role-admin" defaultValue="admin" onChange={handleChange} required/>
            <label className="form-check-label" htmlFor="role">
              Admin
            </label>
          </div>
        </div>
      </fieldset>


    <div className="col-12">
      <div className="form-check">
      <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
      <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the terms and conditions</label>
      <div className="invalid-feedback">You must agree before submitting.</div>
      </div>
    </div>


    <div>
      <div className="col-12">
      <button className="btn btn-primary w-100" type="submit" 
      // disabled={!formik.isValid || formik.isSubmitting}
      >Create Account</button>
      </div>
      <div className="col-12">
      <p className="small mb-0">Already have an account? 
      <a href="/logIn" className="btn btn-primary w-100">Log-In</a>
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
{/* </Formik> */}
</main>
    </>

  )
}




export default SignUp;


