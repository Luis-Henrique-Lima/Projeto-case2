import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../assets/css/main.css'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../img1.png" className ="rounded" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                            O DevPlayTV é muito fácil de usar. Você pode criar suas próprias listas de fimes e séries. 
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="outline-dark">Acessar o DevPlayTV</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../img2.png"  className="rounded"/>
                    <Card.Body>
                        <Card.Title>Rápido e confiável</Card.Title>
                        <Card.Text>
                            O DevPlayTV é muito rápido e confiável. Seus dados são armazenados em servidores seguros.
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="outline-dark">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="../img3.png" className="rounded" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            O DevPlayTV oferece suporte personalizado para você. Entre em contato conosco e tire suas dúvidas.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="outline-dark">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;