import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ItemFuncionalidade(item) {
    return (
        <Col sm="12" md="4" key={item.id}>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title>
                        <strong>{item.nome}</strong>
                    </Card.Title>
                    <Card.Text>
                        {item.genero}
                    </Card.Text>
                    <Card.Text>
                        {item.ano}
                    </Card.Text>
                    <Card.Text>
                        {item.duracao}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

function ListaFuncionalidades(props) {
    return (
        <Row>
            {props.funcionalidades.map(item => ItemFuncionalidade(item))}
        </Row>
    );
}

export default ListaFuncionalidades