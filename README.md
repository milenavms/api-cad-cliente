# api-cad-cliente

### Overview

 - Esta apresentas asseguintes funcionalidades.
 
 1 - Cadastro
 
 2 - Login
 
 ### Detalhes
 
 - A aplicação foi desenvolvida em Nodejs 
 - O banco de Dados utilizado foi Mongodb
 - Foi utilizado o Postman
 
 
  ### requisitos
  
1 - mongodb 

2 - nodeJS
 
  ### Executando
 
 - Baixar do projeto
 - Abrir com o projeto
 - start na aplicação

```
> node index.js ou nodemon index.js
```
- start no banco de dados 
```
//Sobe o banco de dados
> mongod 
```

```
// Abre o banco de dados - shell
> mongo 
```

```
//alguns comandos

show databases; //mostra os db
use nomedodbespefico; // seleciona o banco
show collections // mostra as "tabelas"
db.nomedatabela.find() //mostra o conteúdo de uma "tabela"
db.nomedatabela.find("email":"email@emal.com") //especifico

```
## POST - Cadastro
```
http://localhost:8081/autenticacao/registro
```
```
 {
  "nome": "Milena Vasconcelos Moraes",
"sobrenome": "Santos",
"nascimento": "1999cadce",
"sexo": "f",
"cpf": "22545448451",
"destinatario": "maria",
"cep": "01001000",
"endereco": "Praça da Sé",
"numero": 22222,
"complemento": "lado ímpar",
"bairro": "Tiradentes",
"cidade": "São Paulo",
"estado": "SP",
"referencia": "a",
"celular": "9222222",
"email": "milenavasconcelos.info33@gmail.com",
"senha": "123456"
}
```

## POST - Entrar

```
http://localhost:8081/autenticacao/entrar
```

```
{
    "email": "sandra@email.com",
    "senha": "123456"
}
```

## GET - Perfil do Usuário

```
http://localhost:8081/projeto/perfil
```
#### Headers  - Authorization (Bearer + token)
```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMTc4ZjEyYjVjMDJkODEyYzc3NTEyOCIsImlhdCI6MTU5NTM3OTk1NiwiZXhwIjoxNTk1NDY2MzU2fQ.vLHb84SON7-u63I4WeODRMZzR-4ocn3cCIRUQlxSUG8
```


