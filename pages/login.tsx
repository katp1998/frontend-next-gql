import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function login() {
  return (
    <>
    <Card style={{padding: '25px', width: '30rem', margin: '50px'}}>
    
    <Card.Body>
    <h1>LOGIN FORM</h1>
      <hr />
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger" type="submit">
        Login
      </Button>
    </Form> 
    </Card.Body>
    
    </Card>
    
    
    </>
    
  )
}

export default login