import ApplicationModel from "./ApplicationModel.js";

export default class Product extends ApplicationModel {
    id; nome; genero; ano; duracao; url;

    static configurar() {
        Product.associar('id', 'ID')
        Product.associar('nome', 'NOME')
        Product.associar('genero', 'GENERO')
        Product.associar('ano', 'ANO')
        Product.associar('duracao', 'DURACAO')
        Product.associar('url', 'URL')
    }
}
