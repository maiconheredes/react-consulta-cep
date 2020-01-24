import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h4 className="text-center">SEF-MG</h4>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Footer;