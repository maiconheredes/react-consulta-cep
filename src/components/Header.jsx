import React from 'react';
import MainMenu from '../components/MainMenu.jsx';
import { Container, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <MainMenu />
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Header;