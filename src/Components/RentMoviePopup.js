import React, {useState} from 'react';
import {
    Modal,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  } from "react-bootstrap";
  import { useHistory } from 'react-router-dom';
  import api from '../configApi/api';
import Swal2 from "sweetalert2";

function RentMoviePopup(props) {


  const history = useHistory();


    const[movie, setMovie] = useState({
        quantity: 1
    });



    const handleChange = event =>{
        const {name, value} = event.target;
        console.log('target', name, value)
        setMovie({
            movie,
            [name]: value
        })
    };

    

    const rentMovie = (e) => {
        e.preventDefault()
        const requestBody = { movieId: props._id, quantity: Number(movie.quantity) }
        // console.log('body', requestBody, 'movie', movie, 'props', props, 'cond1', requestBody.quantity > Number(props.quantity), requestBody.quantity, Number(props.quantity), 'cond2', requestBody.quantity < 1)
        if (requestBody.quantity > Number(props.quantity) || requestBody.quantity < 1 ) {
            return Swal2.fire({
              icon : "error",
              title: "Please enter valid quantity to be rented."
            })
        }
        api.post("movies/rent-movie", requestBody)
        .then((res)=>{
          console.log('res', res)
            if (res.data.status == 'success') {
              Swal2.fire({
                icon : "success",
                // title: res.data.message
                title: "Movie rented Succesfully"
              })
              props.updatePage()
              return
            }
            Swal2.fire({
              icon : "error",
              // title: res.data.message
              title: res.data.message
            })
        // history.push('/showAllMovies')
        })
        .catch((error)=>{
            Swal2.fire({
                icon : "error",
                title: error.message
            })
        })
        }

       

  return (
      <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rent Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Container fluid>
    <Row>
      <Col md="8">
        <Card>
        <Card.Body>
            <Form>
            {/* <Row> */}
                  {/* <Col className="pr-1" md="6"> */}
                    <Form.Group>
                      <label>How many movies do you want to rent?</label>
                      <Form.Control
                        name="quantity"     
                        onChange={handleChange}  
                        type="number" 
                        required="true"    
                        min="1"    
                        max={props.quantity}      
                      ></Form.Control>
                    </Form.Group>
                {/* </Col> */}
                {/* </Row> */}
                </Form>
                </Card.Body>
                </Card>
                </Col>
                </Row>
                </Container>
                </Modal.Body>
                <Row>
                  <Col md="8" m="3">
                    <p>
                      Quantity:{movie.quantity}
                      <br>
                      </br>
                      {/* Price(for one): {props._id.price} */}
                      Price(for one):{props.price}
                      <br>
                      </br>
                      Total amount:{movie.quantity * props.price}
                    </p>
                  </Col>
                </Row>
                

                <Modal.Footer>
                <Button onClick={rentMovie}>Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
      </>
  )
}

export default RentMoviePopup;