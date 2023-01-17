/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Default.module.css'

function register() {
  
  
  return (
    <>
    <Card className={styles.card} style={{padding: '25px', width: '30rem', margin: '50px'}}>
    <Card.Body>
    <Form onSubmit={ e => {
      e.preventDefault();
      
    }}>
      <h1 className={styles.heading}>Register</h1>

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className={styles.textFields} >Username: </Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.textFields} >Email: </Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.textFields} >Password: </Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <div className={styles.wrapper}>
      <Button className={styles.button} variant= "danger" size = "lg" type="submit">
        Register
      </Button>
      </div>
      
    </Form> 
    </Card.Body>
    
    </Card>
    </>
  )
}

export default register