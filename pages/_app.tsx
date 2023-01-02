import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar';
import { AuthProvider } from '../context/AuthProvider';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
    <NavBar />
    <Container>
      <Row className="justify-content-md-center">
      <Component {...pageProps} />
      </Row>
    </Container>
      
    </AuthProvider>
    
    
  
  );
}
