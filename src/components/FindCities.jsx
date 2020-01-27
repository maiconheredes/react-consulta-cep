import React from 'react';
import { Form, Button } from 'react-bootstrap';

class FindCities extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            state: 0,
            states: [],
            cities: []
        };

        this.setSelectedState = this.setSelectedState.bind(this);
        this.clearCities = this.clearCities.bind(this);
        this.findCities = this.findCities.bind(this);
    }

    componentDidMount() {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ states: result })
                },
                (error) => {
                    this.setState({ states: [] })
                }
            );
    }

    setSelectedState(event) {
        this.setState({ state: event.target.value });
    }

    findCities(event) {
        event.preventDefault();

        const { state } = this.state;

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + state + "/municipios")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ cities: result });
                },
                (error) => {
                    this.setState({ cities: [] });
                }
            );
    }

    clearCities(event) {
        this.setState({ cities: [] });
    }

    render() {
        const { states, cities } = this.state;

        let viewCities;

        if (Object.keys(cities).length) {
            viewCities = <div>
                {cities.map(city => (
                    <p key={city.id}><strong>Nome:</strong> {city.nome}</p>
                ))}
            </div>;
        }

        return (
            <>
                <Form id="findCities" onSubmit={this.findCities}>
                    <Form.Group controlId="findCities.selectState">
                        <Form.Label>Selecione seu estado</Form.Label>
                        <Form.Control as="select" onChange={this.setSelectedState}>
                            <option value="0">-- Selecione seu estado --</option>
                            {states.map(state => (
                                <option key={state.id} value={state.id}>{state.nome}</option>
                            ))}
                        </Form.Control>
                        <Button variant="primary" type="submit" className="mt-15 mr-15">Buscar cidades</Button>
                        <Button variant="danger" type="button" className="mt-15" onClick={this.clearCities}>Limpar cidades</Button>
                    </Form.Group>
                </Form>
                {viewCities}
            </>
        );
    }
}

export default FindCities