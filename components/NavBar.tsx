import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Default.module.css'
import  {useRouter} from 'next/router' 

//need to add logout
import  useAuth  from '../hooks/useAuth';

import { useMutation } from '@apollo/client';
import { LOG_OUT } from '../mutations/userMutations';

function NavBar() {
  const router = useRouter()
  const { auth, setAuth } = useAuth();


  const [logout] = useMutation(LOG_OUT,{
    update(proxy) {
      
    }
  })

  const logOut = () =>{
    logout();
    setAuth({accessToken:'', isLoggedIn:false});
    router.push('/')
  }

  return (
    <Navbar className={styles.bg} variant = "dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className = {styles.font} href="#">SURGE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Nav>
          <Nav.Link className = {styles.font} href="/welcome">Home</Nav.Link>
          {/** {auth.isLoggedIn ? ( **/}
              <Nav.Link href="/login" className = {styles.font} onClick={logOut}>Logout</Nav.Link>
          {/**):( 
          <>**/}
            <Nav.Link className = {styles.font} href="/login">Login</Nav.Link>
            <Nav.Link className = {styles.font} href="/register">Register</Nav.Link>
          {/** </>
          )} **/}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar