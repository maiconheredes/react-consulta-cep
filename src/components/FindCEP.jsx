import React from 'react';
import { Form, Button, Badge } from 'react-bootstrap';
import FormControl from 'react-bootstrap-maskedinput';

class FindCEP extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cep: 0,
            objectCep: {}
        };

        this.consultCEP = this.consultCEP.bind(this);
        this.formatCep = this.formatCep.bind(this);
        this.setCEP = this.setCEP.bind(this);
    }

    consultCEP(event) {
        fetch('https://viacep.com.br/ws/' + this.state.cep + '/json/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ objectCep: result })
                },
                (error) => {

                }
            );
        event.preventDefault();
    }

    setCEP(event) {
        this.setState({ cep: this.formatCep(event.target.value) });
    }

    formatCep(cep) {
        return cep.replace('.', '').replace('-', '').replace('_', '');
    }

    render() {
        let objectCep;

        if (this.state.objectCep.length > 0) {
            objectCep = <Badge variant="primary">New</Badge>;
        }

        return (
            <>
                <Form onSubmit={this.consultCEP}>
                    <Form.Group controlId="cep">
                        <Form.Label>Informe o CEP</Form.Label>
                        <FormControl type="text" id="cep" name="cep" placeholder="Informe o CEP" mask="11.111-111" onChange={this.setCEP} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Consular</Button>
                    {objectCep}
                </Form>
            </>
        );
    };
}

export default FindCEP;