import ApplicationModel from "./ApplicationModel.js";

export default class Contact extends ApplicationModel {
    id; nome; email; mensagem;

    static configurar() {
        Contact.associar('id', 'ID')
        Contact.associar('nome', 'NOME')
        Contact.associar('email', 'EMAIL')
        Contact.associar('mensagem', 'MENSAGEM')
    }
}
