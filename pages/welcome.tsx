import React from 'react'
import Container from 'react-bootstrap/Container';
import styles from '../styles/Default.module.css'


function welcome() {
  return (
    <Container>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}> Welcome! </h1>
      </div>
    </Container>
  )
}

export default welcome