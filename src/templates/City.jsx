import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FindCities from '../components/FindCities.jsx';
import { Container, Jumbotron } from 'react-bootstrap';

class City extends React.Component {
    render() {
        return (
            <>
                <header>
                    <Header />
                </header>
                <main>
                    <Container>
                        <Jumbotron className="mt-32">
                            <FindCities />
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

export default City;