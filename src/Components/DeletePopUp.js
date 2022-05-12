import React from 'react';
import {
    Modal,
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  } from "react-bootstrap";
  import Swal2 from "sweetalert2";
  import api from "../configApi/api";
  // import { useHistory } from 'react-router-dom';


function DeletePopUp(props) {


  const propsPageRefresh = () => props.pageRefresh()

    const deleteMovie = (e) =>{
        e.preventDefault()
            api.delete(`movies/${props._id}/`)
            .then((res)=>{
                Swal2.fire({
                    icon : "success",
                    title: res.data.message
                })
                props.pageRefresh()
                // props.updatePage()
                // history.push('/showAllMovies')
            })
            .catch((error)=>{
                Swal2.fire({
                    icon: "error",
                    title : error.message
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
                  Delete Movie
                </Modal.Title>
              </Modal.Header>
                <Modal.Body>
                <Container fluid>
                  <Row>
                    <Col md="12 p=3">
                    <Card>
                        <Card.Body>
                            <Form >
                          <Form.Group>
                            <label>Are you sure you want to permanently delete this movie?</label>
                          </Form.Group>
                    </Form>
                    </Card.Body>
                    </Card>
                    </Col>
                  </Row>
                </Container>
                </Modal.Body>
                      <Modal.Footer>
                      <Button onClick={deleteMovie} updatePage={propsPageRefresh}>Yes</Button>
                      <Button onClick={props.onHide}>Cancel</Button>
                      </Modal.Footer>
                      </Modal>
            </>
  )
}

export default DeletePopUp