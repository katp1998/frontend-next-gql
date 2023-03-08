import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Default.module.css'
import useAuth from '../hooks/useAuth';
import { User } from '../types/userType';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../mutations/userMutations';


function Login() {
  const router = useRouter();

  const { auth, setAuth } = useAuth();

  const [fields, setFields] = useState<User>({
    email: '',
    password: ' '
  });

  const [error, setError] = useState<string>('');

  const onChange = (e: any) => {
    setFields({...fields, [e.target.name]: e.target.value});
    setError('')
  }


  //login user:
  const [login, {loading}] = useMutation(LOGIN_USER, {
    onCompleted:({loginUserResolver: {accessToken}}) => {
      setAuth({accessToken: accessToken, isLoggedIn: true})
      router.push('/')
    },
    onError({graphQLErrors}){
      setError(graphQLErrors[0].message)
    },
    variables : { email : fields.email , password : fields.password }
  })

  //handleLogin:
  const handleLogin = (e: any) => {
    e.preventDefault();
    setError('');

    const user: User = {
      email: fields.email,
      password: fields.password
    }

    for(const [key, value] of Object.entries(user)){
      if(value === ''){
        setError(`Please fill in the \"${key}\" field`);
        return undefined;
      }
    }

    //call login:
    login();
  }

  return (
    <>
    <Card className={styles.card} style={{padding: '25px', width: '30rem', margin: '50px'}}>
    
    <Card.Body>
    <h1 className={styles.heading} >Login</h1>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className={styles.textFields}>Email: </Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" onChange={onChange} value={fields.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={styles.textFields}>Password: </Form.Label>
        <Form.Control type="password" name="password" onChange={onChange} value={fields.password} />
      </Form.Group>
      <div className={styles.wrapper}>
      <Button className={styles.button} variant= "danger" size = "lg" type="submit">
        Login
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

export default Login