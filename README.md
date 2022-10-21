## Desafio Voltbras

O ano é 2118 e a Voltbras expandiu seus negócios para gerenciamento de carregamento de veículos espaciais não tripulados com propulsão de íons.
O Propulsor de Íons é um dos diversos tipos de propulsão espacial, que utiliza feixes de luz à base de energia elétrica (aí onde entra a Voltbras, fornecendo esta energia).
Especificamente, esta propulsão de energia deve ser provinda de combustível nuclear, pois a força de impulsão é muito forte.
Se a inserção do combustível for realizada num planeta de baixa gravidade, acontece a fissão do combustível nuclear e perde-se bastante potencial energético.
Por isso é necessário realizar o abastecimento das naves em planetas com alta gravidade, nos quais chega a ser 100 vezes mais eficiente o abastecimento.

Essa API tem o objetivo de ajudar nesse trabalho, descobrindo em quais planetas a Voltbras pode instalar seus novos postos de carregamento e otimizar a experiência de recarga para os viajantes espaciais, utilizando a API de exoplanetas da NASA para encontrar aqueles que tem gravidade adequada.

Alem disso a API possibilita o controle da instalação das estações de recarga e da execução da prõpria recarga.

## Como Executar

### Requisitos

### [npm](https://www.npmjs.com/)

### [postgreSQL](https://www.postgresql.org/)

1. Clone este repositório e setup (https://github.com/CrystopherCarpenter/Desafio-Voltbras)
2. Instale as dependências

```bash
npm i
```

3. Crie seu arquivo .env, utilizando o .env.example como referência

4. Crie o banco da dados com o Prisma

-   Rode os seguintes comandos no terminal, na pasta raíz do projeto

```bash
npx prisma init
npx prisma migrate dev
```

5. Rode o projeto com

```bash
npm run start
```

6. Acesse http://localhost:4000/ no seu navegador para poder usar a API

## Queries e Mutations

### Queries:

-   suitablePlanets: essa Query não recebe nenhum dado e retorna a lista atualizada com os planetas que podem receber uma estação de recarga.
-   stations: não recebe nenhum dado e retorna lista de todas as estações instaladas.
-   user: recebe um "name" como input, verifica se existe um usuário com esse nome, retornando as informações desse usuário, caso ele exista.

### Mutations:

-   installStation: essa Mutation recebe como parâmetro um objeto no formato { name: "nome de exemplo", planetName: "planeta de exemplo" } e adiciona uma estação ao planeta escolhido.
-   createUser: recebe um "name" e cria um usuário.
-   recharge: recebe um objeto no formato {stationId, userId, finishAt} e inicia uma recarga, finalizando no horário estipulado em "finishAt".

## Tecnologias aplicadas

<a href="https://nodejs.org/en/" title="NodeJS"><img src="https://img.shields.io/badge/-NodeJS-&?style=for-the-badge&logo=nodedotjs&color=black" alt="Node logo" /></a>
<a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://img.shields.io/badge/-Typescript-&?style=for-the-badge&logo=typescript&color=black" alt="Typescript logo" /></a>
<a href="https://www.postgresql.org/" title="Postgres"><img src="https://img.shields.io/badge/-PostgreSQL-&?style=for-the-badge&logo=postgresql&color=black" alt="Postgres logo" /></a>
<a href="https://www.prisma.io/" title="Prisma"><img src="https://img.shields.io/badge/-prisma-&?style=for-the-badge&logo=prisma&color=black" alt="Prisma logo" /></a>
<a href="https://graphql.org/" title="GraphQL"><img src="https://img.shields.io/badge/-graphql-&?style=for-the-badge&logo=graphql&color=black" alt="GraphQL logo" /></a>
<a href="https://www.apollographql.com/" title="Apollo"><img src="https://img.shields.io/badge/-apollo graphql-&?style=for-the-badge&logo=apollographql&color=black" alt="Apollo logo" /></a>
