import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FindCEP from '../components/FindCEP.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class Consult extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Container>
                        <Jumbotron className="mt-32">
                            <FindCEP />
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

export default Consult;