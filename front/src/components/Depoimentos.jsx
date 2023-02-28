import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/main.css';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3 pt-4 pb-2'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Maria Eduarda</strong>
                <p>
                    "Simplesmente amo a DevPlayTV!<br />
                    Sou apaixonada por filmes e a DevPlayTV possui um catálogo maravilhoso com todos os meus favoritos!"
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Mateus Borges</strong>
                <p>
                "Muito intuitivo!<br /> Além de fácil de usar, a qualidade de áudio e imagem dos vídeos é superior a de outros serviços de streaming."
                </p>
            </Col>
        </Row>        
        </>
    )
}

export default Depoimentos
