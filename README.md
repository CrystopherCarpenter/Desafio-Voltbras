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

6. Acesse http://localhost:4000/ no seu navegador para poder testar a API
