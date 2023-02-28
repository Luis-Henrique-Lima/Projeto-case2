import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CmsApi from '../api/CmsApi';
import {useEffect, useState} from 'react'
import AdminContatos from '../pages/Admin/AdminContato';




function ItemContatos(contato) {

    const [contatos, setContatos] = useState([])

    useEffect (() => {
        async function getContatos() {
            const response = await CmsApi().getContatos()
            const contatos = await response.json()
            setContatos(contatos.data)
        }

        getContatos()
    }, [])


    async function excluirContato(id) {
        console.log(id)
        const response = await CmsApi().deleteContatos(id)
        if(!response.ok) {
            alert('Erro ao excluir contato')
            return
        }

        alert('Contato excluído com sucesso')
        const contatosAtualizadas = contatos.filter((contato) => contato.id !== id)
        setContatos([contatosAtualizadas])

    }


    return (
        <Col sm="12" md="4" key={contato.id}>
            <Card style={{display:"flex", textAlign:"center"}} className='m-3'>
                <Card.Body>
                    <Card.Title>
                        <strong>{contato.nome}</strong>
                    </Card.Title>
                    <Card.Text>
                        {contato.email}
                    </Card.Text>
                    <Card.Text>
                        {contato.mensagem}
                    </Card.Text>
                    <Button style={{width:'100%'}} variant="danger" onClick={() => {excluirContato(contato.id)}}>Excluir mensagem</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

function ListaContatos(props) {
    return (
        <Row>
            {props.contatos.map(item => ItemContatos(item))}
             </Row>
    );
}

export default ListaContatos