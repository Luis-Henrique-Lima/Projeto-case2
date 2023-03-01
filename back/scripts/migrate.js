import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"
import Contact from "../src/DAO/Contact.js"

// migrate: Cria todas as tabelas do banco de dados, sem nenhuma linha preenchida. Útil após um drop ou da primeira vez subindo seu banco de dados.
const migrate = async () => {
    await Page._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"TITLE" TEXT NOT NULL',
        '"TEXT" TEXT NOT NULL'
    ])
    await Product._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"NOME" TEXT NOT NULL',
        '"GENERO" TEXT NOT NULL',
        '"ANO" INTERGER NOT NULL',
        '"DURACAO" TEXT NOT NULL',
        '"URL" TEXT NOT NULL'
    ])
    await User._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"EMAIL" TEXT NOT NULL',
        '"ENCRYPTED_PASSWORD" TEXT NOT NULL',
        '"AUTH_TOKEN" TEXT'
    ])
    await Contact._migrate([
        '"ID" INTEGER PRIMARY KEY NOT NULL',
        '"NOME" TEXT NOT NULL',
        '"EMAIL" TEXT NOT NULL',
        '"MENSAGEM" TEXT NOT NULL'
    ])
}

migrate()