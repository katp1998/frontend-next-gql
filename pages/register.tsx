/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Default.module.css'
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../mutations/userMutations';
import { User } from '../types/userType';

function Register() {
  const router = useRouter();

  const {auth, setAuth} = useAuth();

  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: ''
  })
  
  const [error, setError] = useState<string>('')

  const onChange = (e: any) => {
    setFields({...fields, [e.target.name]: e.target.value})
    setError('')
  }


  //registering user:
  const [register, {loading}] = useMutation(REGISTER_USER, {
    onCompleted: ({registerUserResolver: {accessToken}}) => {
      setAuth({accessToken: accessToken, isLoggedIn: true})
      router.push('/')
    },
    onError(graphQLErrors){
      setError(graphQLErrors.message)
    },
    variables: { name: fields.name, email: fields.email, password: fields.password}
  })

  //handleRegister:
  const handleRegister = (e: any) => {
    e.preventDefault();
    setError('');
    const user: User = {
      name: fields.name,
      email: fields.email,
      password: fields.password
    }

    for(const [key, value] of Object.entries(user)){
      if (value === ''){
        setError(`Please fill in the ${key} field`)
        return undefined
      }
    }
    register();
  }


  return (
    <>
    <Card className={styles.card} style={{padding: '25px', width: '30rem', margin: '50px'}}>
    <Card.Body>
    <Form onSubmit={handleRegister}>
      <h1 className={styles.heading}>Register</h1>

    <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className={styles.textFields} >name: </Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" onChange={onChange} value={fields.name}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.textFields} >Email: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={onChange} value={fields.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.textFields} >Password: </Form.Label>
        <Form.Control type="password" placeholder="Enter password" name="password" onChange={onChange} value={fields.password} />
      </Form.Group>
      <div className={styles.wrapper}>
      <Button className={styles.button} variant= "danger" size = "lg" type="submit">
        Register
      </Button>
      </div>
      <Form.Label>{error}</Form.Label>
      {<Form.Label>{loading}</Form.Label> }
    </Form> 
    </Card.Body>
    
    </Card>
    </>
  )
}

export default Register