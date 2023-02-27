import {Container, Table, Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import CmsApi from '../../api/CmsApi'
import { LinkContainer } from 'react-router-bootstrap';
import Funcionalidades from './../Funcionalidades';

function AdminFuncionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect (() => {
        async function getFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        getFuncionalidades()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const title = form.title.value
        const description = form.description.value

        const response = await CmsApi().postFuncionalidade({title, description})
        if(!response.ok) {
            alert('Erro ao cadastrar funcionalidade')
            return
        }
        const funcionalidade = await response.json()
        alert('Funcionalidade cadastrada com sucesso')
        setFuncionalidades([...funcionalidades, funcionalidade.data])
        form.reset()
    }

    async function excluirFuncionalidade(id) {
        console.log(id)
        const response = await CmsApi().deleteFuncionalidade(id)
        if(!response.ok) {
            alert('Erro ao excluir funcionalidade')
            return
        }

        alert('Funcionalidade excluída com sucesso')
        const funcionalidadesAtualizadas = funcionalidades.filter((funcionalidade) => funcionalidade.id !== id)
        setFuncionalidades(funcionalidadesAtualizadas)
    }

    function habilitarEdicao(botao, id) {
        botao.innerText = 'Salvar'
        botao.classList.remove('btn-primary')
        botao.classList.add('btn-success')
        botao.onclick = (event) => {salvarEdicao(event.target, id)}

        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        // Cria um input para o título
        const inputTitulo = document.createElement('input')
        inputTitulo.type = 'text'
        inputTitulo.value = colunaTitulo.innerText
        colunaTitulo.innerText = ''
        colunaTitulo.appendChild(inputTitulo)
        // Cria um input para a descrição
        const colunaDescricao = linha.children[2]
        const inputDescricao = document.createElement('input')
        inputDescricao.type = 'text'
        inputDescricao.value = colunaDescricao.innerText
        colunaDescricao.innerText = ''
        colunaDescricao.appendChild(inputDescricao)
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaTitulo = linha.children[1]
        const inputTitulo = colunaTitulo.children[0]
        const colunaDescricao = linha.children[2]
        const inputDescricao = colunaDescricao.children[0]

        const response = await CmsApi().patchFuncionalidade({id: id, title: inputTitulo.value, description: inputDescricao.value})
        if(!response.ok) {
            alert('Erro ao editar funcionalidade')
            return
        }
        alert('Funcionalidade editada com sucesso')
        
        colunaTitulo.innerText = inputTitulo.value
        colunaDescricao.innerText = inputDescricao.value

        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container style={{marginTop:"5%"}} className="conteudo-margin">
            <Container style={{display:"flex", justifyContent:'space-around', margin:'10% 0% 3% 0%'}}>
            <LinkContainer to="/admin/sobre">
                        <Button variant='secondary'>SOBRE (ADMIN)</Button>
            </LinkContainer>
            <LinkContainer to="/admin/filmes">
                        <Button variant='secondary'>FILMES (ADMIN)</Button>
            </LinkContainer>
            </Container>    

            <h1>Filmes (Admin)</h1>
            <hr />
            <h2>Adicionar Filme</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite o nome do filme" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="genero">
                    <Form.Label>Gênero</Form.Label>
                    <Form.Control type="text" placeholder="Digite o gênero do filme" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="number" placeholder="Digite o ano do filme" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração</Form.Label>
                    <Form.Control type="time" placeholder="Digite a duração" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>Lista de Filmes</p>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Ano</th>
                        <th>Duração</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map((funcionalidade) => (
                        <tr key={funcionalidade.id}>
                            <td>{funcionalidade.id}</td>
                            <td>{funcionalidade.nome}</td>
                            <td>{funcionalidade.genero}</td>
                            <td>{funcionalidade.ano}</td>
                            <td>{funcionalidade.duracao}</td>
                            <td>
                                <Button variant="warning" onClick={(event) => {habilitarEdicao(event.target, funcionalidade.id)}}>Editar</Button>
                                 | 
                                 <Button variant="danger" onClick={() => {excluirFuncionalidade(funcionalidade.id)}}>Excluir</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default AdminFuncionalidades