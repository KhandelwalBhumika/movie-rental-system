import React, {useState} from 'react';
import Swal2 from "sweetalert2";
import api from "../configApi/api";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// // import * as yup from 'yup';
// import {addMovieSchema} from './Validation/ValidationSchema'

function AddMovies(props) {

  const genreOptions = ["comedy", "drama", "fantasy", "romcom", "patriotic", "action", "chill", "equality", "thriller", "sci-fi"]

  const history = useHistory();


  const userName = localStorage.getItem('name')

    //   const movie = {
    //       name: "",
    //     releaseDate: "",
    //     genre: "",
    //     description: "",
    //     price: "",
    //     quantity: ""}

    //  const [formValues, setFormValues] =useState(movie)
        
    const [movie, setMovie] = useState({
        name: "",
        releaseDate: "",
        genre: "",
        description: "",
        price: "",
        quantity: ""
    })

    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = event =>{
        const {name, value} = event.target;
        setMovie({
            ...movie,
            [name]: value
        })
    };


    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormValues({ ...formValues, [name]: value });
    // };

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(formValues));
    //   setIsSubmit(true);
    // };


    const addingMovie = (e) =>{
        e.preventDefault()
        const {name, releaseDate, genre, description, price, quantity} = movie;
        console.log('movie', movie)
        if(name && releaseDate &&  genre && description && price && quantity){
          // console.log("here");
            api.post("movies/admin/create", movie )
            .then((res)=>{
              Swal2.fire({
                  icon : res.data.status,
                  title: res.data.message
              })
            if (res.data.role && res.data.token) {
                localStorage.getItem("role", res.data.role);
                localStorage.getItem("token", res.data.token);
              }
            })
            .catch((error)=>{
              Swal2.fire({
                  icon : "error",
                  text: error.response.data.message
              })
            })
        }
      }

      const logOut = () => {
        localStorage.clear()
        history.push('/logIn');
      }

      const manageProfile = () => {
        history.push('/manageProfileAndWallet')
      }
      


      // useEffect(() => {
      // console.log(formErrors);
      // if (Object.keys(formErrors).length === 0 && isSubmit) {
      //   console.log(formValues);
      // }
      // }, [formErrors]);
      // const validate = (values) => {
      //   const errors = {};
      //   if (!values.name) {
      //     errors.name = "name is required!";
      //   }
      //   if (!values.releaseDate) {
      //     errors.releaseDate = "releaseDate is required!";
      //   } 
      //   if (!values.genre) {
      //     errors.genre = "genre is required!";
      //   }
      //   if (!values.description) {
      //     errors.description = "description is required!";
      //   }
      //   if (!values.quantity) {
      //     errors.quantity = "quantity is required!";
      //   }
      //   if (!values.price) {
      //     errors.price = "price is required!";
      //   }
      //   return errors;
      // };




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
    {/* <!-- ======= Header ======= --> */}


   



    {/* BODY */}

           <div className="container">
           {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        // <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        ''
      )} */}
           <div className='min-vh-100 d-flex flex-column py-4'>
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
      
      <Breadcrumb className='m-4'>
                <Breadcrumb.Item href="/logIn" >LogIn</Breadcrumb.Item>
                <Breadcrumb.Item href="/showAllMovies" > Show All Movies</Breadcrumb.Item>
                <Breadcrumb.Item href="/addMovies" active >Add Movie</Breadcrumb.Item>
            </Breadcrumb>
            
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
              {/* <p>{formErrors.name}</p> */}

          <div className="col-12">
            <label htmlFor="genre" className="form-label">Genre</label>
                  <div className="col-sm-10">
                        <select
                        type="text"
                        name='genre'
                        className="form-select" 
                        id="genre" 
                        aria-label="Floating label select example"
                        onChange={handleChange}
                        required
                        >
                          <option value="" default>--Select one--</option>
                        {genreOptions.map((value) => <option key={[value]} >{value}</option>)}
                        </select>
                  </div> 
                </div>
                {/* <p>{formErrors.genre}</p> */}

          <div className="col-12">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" name="description" className="form-control" id="description" 
            placeholder='description'
            onChange={handleChange}
            required />
          </div>
          {/* <p>{formErrors.description}</p> */}

          <div className="col-12">
            <label htmlFor="releaseDate" className="form-label">Release Date</label>
            <input type="date" name="releaseDate" className="form-control" id="releaseDate"
            placeholder='releaseDate'
            onChange={handleChange} 
            required />
          </div>
          {/* <p>{formErrors.releaseDate}</p> */}

          <div className="col-12">
            <label htmlFor="quantity" className="form-label">Quantity</label>
            <input type="number" name="quantity" className="form-control" id="quantity" 
            onChange={handleChange} 
          placeholder='quantity'
            required />
          </div>
          {/* <p>{formErrors.quantity}</p> */}

          <div className="col-12">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" name="price" className="form-control" id="price" 
            onChange={handleChange} 
          placeholder='price'
            required />
          </div>
          {/* <p>{formErrors.price}</p> */}


            <hr></hr>
                <div>
                  <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit" 
                  // onClick={addingMovie}
                  >Add Movie</button>
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
</div>
{/* // </main> */}








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

export default AddMovies;

