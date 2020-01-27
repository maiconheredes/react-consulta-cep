import React from 'react';
import { Form, Button } from 'react-bootstrap';
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
        event.preventDefault();

        const { cep, objectCep } = this.state;

        if (objectCep.hasOwnProperty('cep')) {
            if (this.formatCep(cep) === this.formatCep(objectCep.cep)) {
                return;
            }
        }

        if (cep === 0 || cep === "") {
            this.setState({ objectCep: {} })

            return;
        }

        fetch('https://viacep.com.br/ws/' + cep + '/json/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ objectCep: result })
                },
                (error) => {
                    this.setState({ objectCep: {} })
                }
            );
    }

    setCEP(event) {
        this.setState({ cep: this.formatCep(event.target.value) });
    }

    formatCep(cep) {
        return cep.replace('.', '').replace('-', '').replace('_', '');
    }

    render() {
        const { objectCep } = this.state;

        let testObject;

        if (Object.keys(objectCep).length && !objectCep.hasOwnProperty('erro')) {
            testObject = <div>
                <p>CEP: {objectCep.cep}</p>
                <p>RUA: {objectCep.logradouro}</p>
                <p>BAIRRO: {objectCep.bairro}</p>
                <p>CIDADE: {objectCep.localidade}</p>
                <p>ESTADO: {objectCep.uf}</p>
            </div>;
        } else if (objectCep.hasOwnProperty('erro')) {
            testObject = <div>CEP não existe!</div>;
        }

        return (
            <>
                <Form onSubmit={this.consultCEP}>
                    <Form.Group controlId="cep">
                        <Form.Label>Informe o CEP</Form.Label>
                        <FormControl type="text" id="cep" name="cep" placeholder="Informe o CEP" mask="11.111-111" onChange={this.setCEP} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Consular</Button>
                </Form>
                <br />
                {testObject}
            </>
        );
    };
}

export default FindCEP;