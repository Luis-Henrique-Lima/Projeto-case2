import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../assets/css/ListaFuncionalidades.css'

function ItemFuncionalidade(item) {
    return (
        <Col clasName="sm-12 md-4" key={item.id}>
            <div className="flip-card m-3">
                <div className ="flip-card-inner m-5">
                    <Card.Img className ="flip-card-front" variant="top" src={item.url}/>
            <Card className='flip-card-back'>
                <Card.Body style={{color:'white', fontSize:'13.5px'}}>
                    <Card.Title style={{fontSize:'16.5px', textAlign:'center'}}>
                        <p><strong>{item.nome}</strong></p>
                        <hr />  
                    </Card.Title>
                    <Card.Text>
                        <u><b>GÊNERO</b></u>: {item.genero}
                        <hr />
                    </Card.Text>
                    <Card.Text>
                    <u><b>ESTREIA</b></u>: {item.ano}
                    <hr />
                    </Card.Text>
                    <Card.Text>
                    <u><b>DURAÇÃO</b></u>: {item.duracao}
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            </div>
            
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