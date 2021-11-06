<h1 align="center">Blogs API</h1>

<h2 align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Blogs%20API&uri=https%3A%2F%2Fgithub.com%2Fdefauth98%2Fblogs-api%2Fblob%2Fmain%2FInsomnia_2021-11-06.json)

</h2>

**Descrição**

Projeto desenvolvido durante o modulo de backend da Trybe. Consiste em um CRUD de posts.

### :nut_and_bolt: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS][nodejs]
- [Express][express]
- [Sequelize][sequelize]
- [Json Web Token][jsonwebtoken]

[nodejs]: https://nodejs.org/en/
[express]: https://expressjs.com/pt-br/
[jsonwebtoken]: https://www.npmjs.com/package/jsonwebtoken
[sequelize]: https://sequelize.org/master/

### :thinking: Como rodar

```bash
# Clone o repositório
git clone https://github.com/defauth98/blogs-api.git blog-api

# Entre no diretório
cd blog-api

# Instale as depedências
npm install
```

Configure as variáveis de ambiente, e para fazer isso você tem que criar um arquivo .env na raiz do projeto com as seguintes variaveis:

```js
MYSQL_USER=
MYSQL_PASSWORD=
HOSTNAME=
JWT_SECRET=
```
Rode o projeto com `` npm start ``
  
---

### :bust_in_silhouette: Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/defauth98">
        <img src="https://avatars.githubusercontent.com/u/52966246?v=4" width="100px;" alt=""/>
        <br />
          <sub>
            <b>Daniel Ribeiro</b>
          </sub>
      </a>
    </td>
  </tr>
</table>
