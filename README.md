# Aliadas da Tesoura - Plataforma Imobiliária

Sistema web para gestão de imóveis, clientes e visitas, desenvolvido como projeto da disciplina **Tópicos Especiais**.

---

## Sobre o Projeto

A **Aliadas da Tesoura** é uma aplicação web voltada para corretores de imóveis que precisam organizar, de forma centralizada, o gerenciamento de:

- **Imóveis disponíveis** (cadastro, edição, exclusão e filtros)
- **Clientes interessados** (compradores e locatários)
- **Visitas agendadas** (vinculando cliente e imóvel)

O sistema substitui o controle manual feito em cadernos e planilhas, oferecendo uma interface intuitiva com listagens, formulários validados e um painel administrativo com resumo geral das operações.

---

## Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **Node.js** | Ambiente de execução JavaScript |
| **Express** | Framework web para Node.js |
| **EJS** | Template engine para renderização de views |
| **MySQL** | Banco de dados relacional |
| **Bootstrap 5** | Framework CSS para interface responsiva |
| **express-session** | Gerenciamento de sessões e autenticação |
| **method-override** | Suporte a PUT e DELETE em formulários HTML |
| **Git/GitHub** | Versionamento de código |

---

## Funcionalidades

### Autenticação
- Login e logout com sessão
- Proteção de rotas com middleware
- Usuário padrão: `corretor@email.com` / `123456`

### Clientes (CRUD)
-  Listar clientes com filtros
-  Cadastrar novo cliente (nome, CPF, telefone, e-mail, tipo)
-  Editar cliente
-  Excluir cliente (com validação de vínculo com visitas)

### Imóveis (CRUD)
-  Listar imóveis com filtros por zona e tipo
-  Cadastrar novo imóvel (endereço, zona, tipo, valor, status)
-  Editar imóvel
-  Excluir imóvel

### Visitas (CRUD)
-  Listar visitas com dados do cliente e imóvel
-  Agendar nova visita
-  Editar visita (data, horário, status, observação)
-  Cancelar/excluir visita

### Dashboard
-  Total de imóveis cadastrados
-  Total de clientes cadastrados
-  Total de visitas agendadas
-  Próximas visitas (data, horário, cliente, imóvel, status)

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (v18+)
- MySQL (XAMPP ou similar)
- Git

## Passo a passo

### Clone o repositório
```bash
git clone https://github.com/anaclaramantellaa/Imobiliaria.git
cd Imobiliaria
```
### Instale as dependências
```bash
npm install
```
### Configure o banco de dados
-  Inicia o MySQL (XAMPP)
-  Acesse o phpMyAdmin 
-  Crie um anco chamado imobiliaria
-  Importe o arquivo database/schema.sql

### .env
crie um arquivo .env e coloque:
```env
- DB_HOST=localhost
- DB_USER=root
- DB_PASSWORD=
- DB_NAME=imobiliaria
- DB_PORT=3306
```

### Exxecute o servidor
```bash
node server.js
```
### Acesse no navegadr 
http://localhost:3000/login
