import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Container>
                        <Jumbotron className="mt-32">
                            <h1>Consulta CEP!</h1>
                            <p>Aplicativo ReactJS de teste para estudo.</p>
                        </Jumbotron>
                    </Container>
                </main>
                <footer>
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Home;