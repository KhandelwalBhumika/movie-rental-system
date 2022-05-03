import React, { useState } from 'react';
import {
    Modal,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  } from "react-bootstrap";
  import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
  import Swal2 from "sweetalert2";
  import api from "../ApiTracker/api";


function EditMovies(props) {


  const movieDate = new Date(props.releaseDate)

  const [movie, setMovie] = useState({
    name: props.name,
    releaseDate: movieDate.toLocaleDateString(),
    genre: props.genre,
    description: props.description,
    price: props.price,
    quantity: props.quantity
})

    const handleChange = event =>{

        const {name, value} = event.target;
        setMovie({
            ...movie,
            [name]: value
        })
    };

    const editingMovie = (e) =>{
          e.preventDefault()
          const {name, releaseDate, genre, description, price, quantity} = movie;
          if(name && releaseDate &&  genre && description && price && quantity){
           console.log('movie', movie)
          //  movie.releaseDate = new Date(movie.releaseDate || props.releaseDate)
              api.put(`movies/${props._id}`, movie)
              .then((res)=>{
                console.log(res)
                  Swal2.fire({
                      icon : "success",
                      // title: res.dat.message
                      title: "Successfully updated!"
                  })
                  props.updatePage()
                  // return setMovie
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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>




        <Container fluid>
        <Row>
          <Col md="8">
            <Card>
            <Card.Body>
                <Form onSubmit={editingMovie}>
                <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Name:</label>
                          <Form.Control
                            name="name"
                            // placeholder="Name"
                            value={movie.name}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Release-Date:</label>
                          <Form.Control
                            name="releaseDate"
                            // placeholder="Release Date"
                            type="date"
                            // value={movie.releaseDate}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Genre:</label>
                          <Form.Control
                            name="genre"
                            // placeholder="Genre"
                            type="text"
                            value={movie.genre}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Description:</label>
                          <Form.Control
                            name="description"
                            // placeholder="Description"
                            type="text"
                            value={movie.description}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Quantity:</label>
                          <Form.Control
                            name="quantity"
                            // placeholder="Quantity"
                            type="number"
                            value={movie.quantity}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Price:</label>
                          <Form.Control
                            name="price"
                            // placeholder="price"
                            type="number"
                            value={movie.price}
                            onChange={handleChange}
                          ></Form.Control>
                        </Form.Group>
                      </Col>

                    <button
                    className="btn btn-primary align-center"
                    type="submit"
                    variant="info"
                  > Edit Movie
                  </button>


                     <Router>
                    <Switch>
                    <Route path="/editMovies" exact={true} render={() => <Redirect to ="/showAllMovies" />} />
                    </Switch>
                    </Router> 

                    </Row>
                </Form>
                </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>





        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default EditMovies;
