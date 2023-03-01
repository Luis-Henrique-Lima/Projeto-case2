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
                        <Card.Title>Assista de onde estiver</Card.Title>
                        <Card.Text>
                            O DevPlayTV é prático e você pode acessar de todos os seus dispositivos. Assista seus fimes e séries preferidos aonde estiver. 
                        </Card.Text>
                        <LinkContainer style={{color:"#bbbbbb"}} to="/login">
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
                            Navegue com rápidez enquanto assiste seus vídeos e fique tranquilo! Seus dados são armazenados em servidores seguros.
                        </Card.Text>
                        <LinkContainer style={{color:"#bbbbbb"}}  to="/filmes">
                            <Button variant="outline-dark">Conheça nosso catálogo</Button>
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
                            O DevPlayTV oferece suporte personalizado para você. Entre em contato conosco e tire todas as suas dúvidas.
                        </Card.Text>
                        <LinkContainer style={{color:"#bbbbbb"}}  to="/contato">
                        <Button variant="outline-dark">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;
