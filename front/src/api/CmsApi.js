const CmsApi = () => {
    const url = 'http://localhost:3000'

    return {
        login (email, password) {
            return fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
        },
        getSobre (id) {
            return fetch(`${url}/sobre/1`)
        },
        patchSobre (sobre) {
            return fetch(`${url}/sobre/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(sobre)
            })
        },        
        getFuncionalidades () {
            return fetch(`${url}/filmes`)
        },
        postFuncionalidade (funcionalidade) {
            return fetch(`${url}/filmes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        patchFuncionalidade (funcionalidade) {
            return fetch(`${url}/filmes/${funcionalidade.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(funcionalidade)
            })
        },
        deleteFuncionalidade (id) {
            return fetch(`${url}/filmes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                }
            })
        },
        getContatos () {
            return fetch(`${url}/contato`)
        },
        postContatos (contatos) {
            return fetch(`${url}/contato`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(contatos)
            })
        },
        patchContatos (contatos) {
            return fetch(`${url}/contato/${contatos.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(contatos)
            })
        },
        deleteContatos (id) {
            return fetch(`${url}/contato/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': localStorage.getItem('token')
                }
            })
        }
    }
}

export default CmsApi