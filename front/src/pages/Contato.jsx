import {Container, Button, Form} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import Depoimentos from '../components/Depoimentos'
import CmsApi from '../api/CmsApi'
import "../assets/css/Contato.css"

function Contato() {
    const [contatos, setContatos] = useState([])

    useEffect (() => {
        async function getContatos() {
            const response = await CmsApi().getContatos()
            const contatos = await response.json()
            setContatos(contatos.data)
        }

        getContatos()
    }, [])


    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const nome = form.nome.value
        const email = form.email.value
        const mensagem = form.mensagem.value


        const response = await CmsApi().postContatos({nome, email, mensagem})
        if(!response.ok) {
            alert('Erro ao cadastrar mensagem')
            return
        }
        const contato = await response.json()
        alert('Mensagem cadastrada com sucesso')
        setContatos([...contatos, contato.data])
        form.reset()
    }

    
    
    return (
        <Container className='conteudo-margin pt-5'>
            <h1>Contato</h1>
            <p>Entre em contato conosco</p>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control className="Form-Control" type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control className="Form-Control" type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control className="Form-Control" as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar contato
                </Button>
            </Form>

        </Container>
    );
}

export default Contato;