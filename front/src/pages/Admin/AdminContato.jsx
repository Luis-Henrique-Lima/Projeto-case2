import ListaContatos from "../../components/ListaContatos"
import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'
import { LinkContainer } from 'react-router-bootstrap';

function AdminContatos() {
    const [contatos, setContatos] = useState([])

    useEffect (() => {
        async function getContatos() {
            const response = await CmsApi().getContatos()
            const contatos = await response.json()
            setContatos(contatos.data)
        }

        getContatos()
    }, [])

    
    

    return (
        <Container style={{marginTop:"5%"}} className="conteudo-margin">
            <Container style={{display:"flex", justifyContent:'space-around', margin:'10% 0% 3% 0%'}}>
            <LinkContainer to="/admin/sobre">
                        <Button variant='secondary'>SOBRE (ADMIN)</Button>
            </LinkContainer>
            <LinkContainer to="/admin/filmes">
                        <Button variant='secondary'>FILMES (ADMIN)</Button>
            </LinkContainer>
            <LinkContainer to="/admin/contato">
                        <Button variant='secondary'>CONTATOS (ADMIN)</Button>
            </LinkContainer>
            </Container>    

            <h1>Contatos (Admin)</h1>
            
            <ListaContatos contatos={contatos} />

        </Container>
    )
}

export default AdminContatos