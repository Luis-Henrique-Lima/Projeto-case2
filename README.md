<h1>CASE 2: SITE DO MEU APP</h1>

![logo 7223f813d1de956d2822](https://user-images.githubusercontent.com/85020469/222034303-c769a11c-bc6b-48b1-8617-d7d4457e0e28.png)

## Proposta do projeto

O grupo deve decidir qual será o MVP utilizado nessa fase, o site precisa ter:
<ul>
<li />Página inicial
<li />Sobre (com conteúdo editável)
<li />Funcionalidades (com conteúdo cadastrável e editável)
<li />Tela de contato.
</ul>
O conteúdo das páginas sobre e funcionalidades deve ser consultado de uma API, para realizar a edição e cadastro serão criadas rotas /admin.
<br />
Hora de colocar tudo que discutimos sobre metodologias ágeis em prática!
<br />

## Sobre o projeto

O projeto foi desenvolvido com o intuito de criar um site para o DEVPLAY TV, um site de filmes feito pela necessidade de unir em um só lugar descrições sobre filmes, para cinéfilos que ajuda os usuários a se organizarem e buscarem as informações disponíveis.
O site foi desenvolvido com ReactJS e React Bootstrap. Para gestão do conteúdo é possível acessar a rota /login e informar usuário e senha cadastrados no back-end, essa rota recebe um token que fica armazenado no localStorage do navegador e é utilizado para acessar as rotas do admin.

## Tecnologias utilizadas

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rect/rect-original.svg)" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="40" height="40"/>

          


## Pré-requisitos

- [Node.js](https://nodejs.org/en/) (na versão 16 ou superior)
- [NPM](https://www.npmjs.com/)

## Como executar o Back-End?

```bash
cd back
npm install
npm start
```
## Como executar o Front-End?

```bash
cd front
npm install
npm run dev
```

## Dependências e bibliotecas

```bash
npm install nodemon --save-dev
npm install bcrypt cors express sqlite sqlite3
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install react-router-bootstrap
```

## Estrutura do site

O front e o back form desenvolvidos com auxílio do documento encontado em:
<p>https://github.com/resilia-br/case2-backend</p>
<p>https://github.com/resilia-br/case2-frontend</p>

### Configurando a comunicação com o back-end

Crie a pasta api, e dentro inclua um arquivo com as rotas que foram criadas em sua api. Criando funções para cada ação do back-end. (Exemplo: [CmsApi.js](/Projeto-case2-main/front/src/api/CmsApi.js))

## Criando as páginas do site

Crie a pasta pages, e dentro inclua um arquivo para cada página do site. (Exemplo: [Home.jsx](/Projeto-case2-main/front/src/pages/Home.jsx))

## Criando os componentes do site

Durante a criação das páginas aproveite para componentizar seu código. Crie a pasta components, e dentro inclua um arquivo para cada componente do site. (Exemplo: [Menu.jsx](/Projeto-case2-main/front/src/components/Menu.jsx))

### Criando as rotas do site

Crie a pasta routes, e dentro inclua um arquivo com a configuração das rotas do site, aqui estamos utilizando o `react-router-dom` para isso. (Exemplo: [Rotas.jsx](/Projeto-case2-main/front/src/routes/Rotas.jsx))

### Configurando as páginas do lado do admin

Crie a pasta admin, dentro da pasta pages, e dentro inclua um arquivo para cada página da administração. Aqui nesse projeto estamos utilizando um exemplo de login simples com um token que é enviado pelo back-end após acessar a tela de login (Exemplo: [AdminFuncionalidades.jsx](/Projeto-case2-main/front/src/pages/admin/AdminFuncionalidades.jsx) e [Login.jsx](/Projeto-case2-main/front/src/pages/Login.jsx))
