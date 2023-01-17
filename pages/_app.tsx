import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Default.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../graphql/apolloClient';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
    <NavBar />
    <Container>
      <Row className="justify-content-md-center">
      <Component {...pageProps} />
      </Row>
    </Container>
    </ApolloProvider>
    
      
    
    
  
  );
}
