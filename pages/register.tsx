import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function register() {
  return (
    <>
    <Card style={{padding: '25px', width: '30rem', margin: '50px'}}>
    <Card.Body>
    <Form>
      <h1>REGISTER FORM</h1>
      <hr />
    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Register
      </Button>
    </Form> 
    </Card.Body>
    
    </Card>
    </>
  )
}

export default register