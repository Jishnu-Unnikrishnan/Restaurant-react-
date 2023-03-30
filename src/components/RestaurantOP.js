import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';


function RestaurantOP({op}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button className='btn btn-dark' variant="dark" onClick={handleShow}>
      Restaurant Operating Hours
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Operating Hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup>
      <ListGroup.Item>Monday: {op.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday: {op.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday: {op.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday: {op.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday: {op.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday: {op.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday: {op.Sunday}</ListGroup.Item>
    </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button className='btn btn-dark' variant="dark" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default RestaurantOP