import {Container, Table, Form, Button, Card} from 'react-bootstrap'
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



    async function excluirContato(id) {
        console.log(id)
        const response = await CmsApi().deleteContatos(id)
        if(!response.ok) {
            alert('Erro ao excluir contato')
            return
        }

        alert('Contato excluído com sucesso')
        const contatosAtualizados = contatos.filter((contato) => contato.id !== id)
        setContatos(contatosAtualizados)

    }
    
    
    return (
        <>
        <Container style={{marginBottom:'50%', textAlign:'center'}} className="conteudo-margin pt-5"> 

            <h1>Contatos (Admin)</h1>
            
            <Card style={{display:"flex", textAlign:"center"}} className='m-3'>


            {contatos.map((contato) => (

                    <tr key={contato.id}>
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
</tr>
    ))}

            </Card>

        </Container>

</>
    )
}

export default AdminContatos