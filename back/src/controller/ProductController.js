import { verificarToken } from "../middleware/authorization.js"
import Product from "../DAO/Product.js"

export default class ProductController {
    static rotas(app) {
        app.post('/filmes', verificarToken, ProductController.inserir)
        app.get('/filmes', ProductController.listarTodos)
        app.patch('/filmes/:id', verificarToken, ProductController.atualizar)
        app.delete('/filmes/:id', verificarToken, ProductController.deletar)
    }

    static async inserir(req, res) {        
        const { nome, genero, ano, duracao, url } = req.body
        if (!nome || !genero || !ano || !duracao || !url) {
            return res.status(400).send({
                message: 'Os campos "title" e "description" são obrigatórios'
            })
        }

        const product = new Product()
        product.nome = nome
        product.genero = genero
        product.ano = ano
        product.duracao = duracao
        product.url = url

        await product.save()

        res.status(200).send({
            message: 'Produto criado com sucesso!',
            data: product
        })
    }

    static async listarTodos(req, res) {
        const products = await Product.findAll()
        res.status(200).send({
            message: 'Produtos listados com sucesso!',
            data: products
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const product = await Product.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        const {nome, genero, ano, duracao, url} = req.body
        if (nome) {
            product.nome = nome
        }
        if (genero) {
            product.genero = genero
        }
        if (ano) {
            product.ano = ano
        }
        if (duracao) {
            product.duracao = duracao
        }
        if (url) {
            product.url = url
        }

        await product.save()

        res.status(200).send({
            message: 'Produto alterado com sucesso!',
            data: product
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const product = await Product.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        await product.delete()

        res.status(200).send({
            message: 'Produto deletado com sucesso!'
        })
    }
}