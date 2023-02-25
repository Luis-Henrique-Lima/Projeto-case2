import cors from "cors";
import express from "express";

import UserController from './controller/UserController.js'
import ProductController from './controller/ProductController.js'
import PageController from './controller/PageController.js'
import ContactController from './controller/ContactController.js'

import PageDAO from './DAO/Page.js'
import ProductDAO from './DAO/Product.js'
import UserDAO from './DAO/User.js'
import ContactDAO from './DAO/Contact.js'

const app = express()
app.use(cors())
app.use(express.json())

PageDAO.configurar()
ProductDAO.configurar()
UserDAO.configurar()
ContactDAO.configurar()

UserController.rotas(app)
ProductController.rotas(app)
PageController.rotas(app)
ContactController.rotas(app)

export default app