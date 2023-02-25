import { verificarToken } from "../middleware/authorization.js"
import Contact from "../DAO/Contact.js"

export default class ContactController {
    static rotas(app) {
        app.post('/contato', verificarToken, ContactController.inserir)
        app.get('/contato', ContactController.listarTodos)
        app.patch('/contato/:id', verificarToken, ContactController.atualizar)
        app.delete('/contato/:id', verificarToken, ContactController.deletar)
    }

    static async inserir(req, res) {        
        const { nome, email, mensagem } = req.body
        if (!nome || !email || !mensagem) {
            return res.status(400).send({
                message: 'Todos os campos são obrigatórios'
            })
        }

        const contact = new Contact()
        contact.nome = nome
        contact.email = email
        contact.mensagem = mensagem

        await contact.save()

        res.status(200).send({
            message: 'Contato feito com sucesso!',
            data: contact
        })
    }

    static async listarTodos(req, res) {
        const contact = await Contact.findAll()
        res.status(200).send({
            message: 'Contatos listados com sucesso!',
            data: contact
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const contact = await Contact.findByProperty('id', id)
        if (!contact) {
            return res.status(404).send({
                message: `O contato de id ${id} não existe`
            })
        }

        const {nome, email, mensagem} = req.body
        if (nome) {
            contact.nome = nome
        }
        if (email) {
            contact.email = email
        }
        if (mensagem) {
            contact.mensagem = mensagem
        }

        await contact.save()

        res.status(200).send({
            message: 'Contato alterado com sucesso!',
            data: contact
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const contact = await Contact.findByProperty('id', id)
        if (!contact) {
            return res.status(404).send({
                message: `O contato de id ${id} não existe`
            })
        }

        await contact.delete()

        res.status(200).send({
            message: 'Contato deletado com sucesso!'
        })
    }
}