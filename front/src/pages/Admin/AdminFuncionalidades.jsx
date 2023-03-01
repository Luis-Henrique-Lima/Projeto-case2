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
        const nome = form.nome.value
        const genero = form.genero.value
        const ano = form.ano.value
        const duracao = form.duracao.value
        const url = form.url.value
      

        const response = await CmsApi().postFuncionalidade({nome, genero, ano, duracao, url})
        console.log('ok')
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
        const colunaNome = linha.children[1]
        // Cria um input para o título
        const inputNome = document.createElement('input')
        inputNome.type = 'text'
        inputNome.value = colunaNome.innerText
        colunaNome.innerText = ''
        colunaNome.appendChild(inputNome)
        // Cria um input para o gênero
        const colunaGenero = linha.children[2]
        const inputGenero = document.createElement('input')
        inputGenero.type = 'text'
        inputGenero.value = colunaGenero.innerText
        colunaGenero.innerText = ''
        colunaGenero.appendChild(inputGenero)
        // Cria um input para o ano.
        const colunaAno = linha.children[3]
        const inputAno = document.createElement('input')
        inputAno.type = 'number'
        inputAno.value = colunaAno.innerText
        colunaAno.innerText = ''
        colunaAno.appendChild(inputAno)
        // Cria um input para a duração
        const colunaDuracao = linha.children[4]
        const inputDuracao = document.createElement('input')
        inputDuracao.type = 'text'
        inputDuracao.value = colunaDuracao.innerText
        colunaDuracao.innerText = ''
        colunaDuracao.appendChild(inputDuracao)
        // Cria um input para a url
        const colunaUrl = linha.children[5]
        const inputUrl = document.createElement('input')
        inputUrl.type = 'text'
        inputUrl.value = colunaUrl.innerText
        colunaUrl.innerText = ''
        colunaUrl.appendChild(inputUrl)
    
    }

    async function salvarEdicao(botao, id) {
        const linha = botao.parentNode.parentNode
        const colunaNome = linha.children[1]
        const inputNome = colunaNome.children[0]
        const colunaGenero = linha.children[2]
        const inputGenero = colunaGenero.children[0]
        const colunaAno = linha.children[3]
        const inputAno = colunaAno.children[0]
        const colunaDuracao = linha.children[4]
        const inputDuracao = colunaDuracao.children[0]
        const colunaUrl = linha.children[5]
        const inputUrl = colunaUrl.children[0]

    

        const response = await CmsApi().patchFuncionalidade({id: id, nome: inputNome.value, genero: inputGenero.value, ano: inputAno.value, duracao: inputDuracao.value, url: inputUrl.value})
        if(!response.ok) {
            alert('Erro ao editar funcionalidade')
            return
        }
        alert('Funcionalidade editada com sucesso')
        
        colunaNome.innerText = inputNome.value
        colunaGenero.innerText = inputGenero.value
        colunaAno.innerText = inputAno.value
        colunaDuracao.innerText = inputDuracao.value
        colunaUrl.innerText = inputUrl.value


        botao.innerText = 'Editar'
        botao.classList.remove('btn-success')
        botao.classList.add('btn-primary')
    }


    return (
        <Container style={{marginBottom:'50%', textAlign:'center'}} className="conteudo-margin pt-5"> 
            
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
                    <Form.Control type="text" placeholder="Digite a duração" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="url">
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control type="text" placeholder="Insira a url da imagem" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Cadastrar
                </Button>
            </Form>
            <hr />
            <p>LISTA DE FILMES</p>
            <Table style={{color:'whitesmoke'}} striped hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Gênero</th>
                        <th>Ano</th>
                        <th>Duração</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    {funcionalidades.map((funcionalidade) => (
                        <tr key={funcionalidade.id}>
                            <td style={{color:'#bbbbbb'}}>{funcionalidade.id}</td>
                            <td style={{color:'#bbbbbb'}}>{funcionalidade.nome}</td>
                            <td style={{color:'#bbbbbb'}}>{funcionalidade.genero}</td>
                            <td style={{color:'#bbbbbb'}}>{funcionalidade.ano}</td>
                            <td style={{color:'#bbbbbb'}}>{funcionalidade.duracao}</td>
                            <td style={{color:'#bbbbbb'}}>{funcionalidade.url}</td>
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