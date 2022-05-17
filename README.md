# DS Vendas
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/daniellegb/ws-sds3/blob/main/LICENSE)

# Sobre o projeto

https://daniellegb-sds3.netlify.app/

DS Vendas é uma aplicação web construída durante a terceira Semana Spring-React promovida pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

A aplicação consiste em um painel de controle de vendas. Ele exibe a taxa de sucesso dos vendedores, o percentual de cada vendedor sob o total de vendas e uma tabela com todos os detalhes para cada venda.

## Layout web
![Web 1](https://github.com/daniellegb/ws-sds3/blob/main/assets/tela.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/daniellegb/ws-sds3/blob/main/assets/sds3-mc.png)

## Padrão de camadas adotado
![Padrão de Camadas Adotado](https://github.com/daniellegb/ws-sds3/blob/main/assets/padrao-camadas.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
- ApexCharts
## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/daniellegb/dsvendas-sds3

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/daniellegb/dsvendas-sds3

# entrar na pasta do projeto front end web
cd front-web

# instalar dependências
yarn install

# executar o projeto
yarn start
```
