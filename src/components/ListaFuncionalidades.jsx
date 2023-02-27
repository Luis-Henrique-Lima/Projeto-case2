import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ItemFuncionalidade(item) {
    return (
        <Col sm="12" md="4" key={item.id}>
            <Card className='m-3'>
            <Card.Img variant="top" src="./img1.png"/>
                <Card.Body>
                    <Card.Title>
                        <strong>{item.nome}</strong>
                    </Card.Title>
                        <Card.Text style={{marginBottom:"0"}}>
                        {item.genero}
                    </Card.Text>
                    <Card.Text style={{marginBottom:"0"}}>
                        {item.duracao}
                    </Card.Text>
                    <Card.Text style={{marginBottom:"0"}}>
                        {item.ano}
                    </Card.Text>
                    <Button style={{width:"100%"}} variant="success">ASSISTIR FILME</Button>
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