import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Default.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apolloClient';
import { AuthProvider } from '../context/AuthProvider';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}> 
        <NavBar />
          <Container>
            <Row className="justify-content-center">
              <Component {...pageProps} />
            </Row>
          </Container>
      </ApolloProvider>
    </AuthProvider>
    
      
    
    
  
  );
}
