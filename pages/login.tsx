import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Default.module.css'

function login() {
  return (
    <>
    <Card className={styles.card} style={{padding: '25px', width: '30rem', margin: '50px'}}>
    
    <Card.Body>
    <h1 className={styles.heading} >Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.textFields}>Email: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.textFields}>Password: </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className={styles.wrapper}>
      <Button className={styles.button} variant= "danger" size = "lg" type="submit">
        Login
      </Button>
      </div>
    </Form> 
    </Card.Body>
    
    </Card>
    
    
    </>
    
  )
}

export default login