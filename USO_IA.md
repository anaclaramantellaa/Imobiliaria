# 📊 Relatório de Uso de Inteligência Artificial

## 🤖 Ferramentas utilizadas

- **DeepSeek (ChatGPT)** - Assistente principal para desenvolvimento e correção de erros
- **GitHub Copilot** - Sugestões de código e autocompletar
- **Claude** - Assistente na gestão de negócios

---

## 🎯 Principais finalidades

### 1. Geração e estruturação de código
- Criação de Models, Controllers, Routes e Views seguindo o padrão MVC
- Estruturação do projeto com pastas organizadas
- Criação do schema.sql e seed.sql para o banco de dados

### 2. Correção de erros e debugging
- Identificação e correção de erros de sintaxe
- Resolução de problemas de conexão com o banco de dados
- Ajuste de caminhos de importação
- Correção de erros de autenticação e sessão

### 3. Apoio na documentação
- Estruturação do README.md
- Criação deste relatório (USO_IA.md)
- Explicações técnicas sobre o funcionamento do sistema

### 4. Criação de dados fictícios
- Geração de dados de teste para clientes, imóveis e visitas

---

## 📝 Exemplos de prompts utilizados

### Prompt 1: Estrutura do projeto
**Prompt:**
> "Preciso criar um sistema com Node.js, Express, MySQL e EJS. Me ajude a estruturar esse esqueleto seguindo o padrão MVC"

**Resposta:**
O assistente sugeriu a estrutura de pastas com `models/`, `controllers/`, `routes/`, `views/`, `middlewares/` e explicou a função de cada uma.

**O que fizemos:** Aceitamos integralmente a sugestão.

---

### Prompt 2: Erro de conexão com o banco
**Prompt:**
> "Estou com erro 'Access denied for user 'root'@'localhost'' no MySQL. O que pode ser?"

**Resposta:**
O assistente explicou que a senha do .env estava incorreta e sugeriu verificar as credenciais do XAMPP.

**O que fizemos:** Aceitamos e corrigimos a senha no .env para ficar vazia (já que o XAMPP não tinha senha configurada).

---

### Prompt 3: Erro de autenticação
**Prompt:**
> "Estou tendo erro 'Cannot read properties of undefined (reading 'nome')' no navbar. O que pode ser?"

**Resposta:**
O assistente explicou que a variável `usuario` não estava sendo passada para a view e sugeriu adicionar `usuario: req.session?.usuario` no `res.render()`.

**O que fizemos:** Aceitamos a solução e corrigimos todos os controllers.

---

### Prompt 4: Relacionamento entre tabelas
**Prompt:**
> "Como fazer a relação entre cliente e visita no MySQL? Preciso que cada visita tenha um cliente e um imóvel."

**Resposta:**
O assistente explicou como usar `FOREIGN KEY` e mostrou o SQL para criar a tabela `visita`.

**O que fizemos:** Aceitamos e implementamos no schema.sql.

---

### Prompt 5: Formatação de data e horário
**Prompt:**
> "Como formatar a data para dd/mm/aaaa e o horário para HH:MM nas views EJS?"

**Resposta:**
O assistente sugeriu criar funções `formatarData()` e `formatarHorario()` nas views.

**O que fizemos:** Aceitamos e adaptamos para o nosso estilo.

---

### Prompt 6: Erro "Cannot GET /imoveis"
**Prompt:**
> "O servidor está dando erro 'Cannot GET /imoveis'. O que pode ser?"

**Resposta:**
O assistente identificou que o controller estava retornando JSON em vez de renderizar EJS e que faltava o middleware `auth` nas rotas.

**O que fizemos:** Corrigimos o controller e adicionamos a proteção nas rotas.

---

### Prompt 7: Autenticação com sessão
**Prompt:**
> "Como implementar login e logout no Express usando sessão? Preciso proteger as rotas para que apenas usuários logados acessem."

**Resposta:**
O assistente explicou como usar express-session para criar a sessão, como armazenar o usuário em req.session.usuario e como criar um middleware auth.js para verificar se o usuário está logado antes de acessar cada rota.

**O que fizemos:** Aceitamos e implementamos a autenticação exatamente como sugerido, com o middleware protegendo todas as rotas administrativas.

---

### Prompt 8: Proteger rotas com middleware
**Prompt:**
> "Como faço para proteger as rotas de cliente, imóvel e visita com autenticação? Quero que todas as rotas do sistema exijam login."

**Resposta:**
O assistente sugeriu criar um arquivo auth.js na pasta middlewares/ com uma função que verifica req.session.usuario, e usar router.use(auth) em cada arquivo de rotas para proteger todas as rotas de uma vez.

**O que fizemos:** Aceitamos e implementamos o middleware em ClienteRoutes.js, ImoveisRoutes.js e VisitaRoutes.js

---

### Prompt 9: Dashboard com resumo
**Prompt:**
> "Quero criar um Dashboard que mostre o total de clientes, imóveis e visitas cadastrados, além das próximas visitas. Como fazer?"

**Resposta:**
O assistente sugeriu fazer consultas SQL com COUNT(*) para os totais e uma consulta com JOIN e ORDER BY para buscar as próximas visitas, passando todos os dados para a view EJS.

**O que fizemos:** Aceitamos e implementamos o Dashboard com todas as consultas sugeridas.

---

### Prompt 10: Tabelas no README.md
**Prompt:**
> "No meu README.md, quero colocar os comandos de instalação do projeto dentro de um bloco de código com fundo escuro e formatação de terminal. Como faço isso? Também quero uma tabela com as tecnologias usadas."

**Resposta:**
O assistente mostrou como usar ``` bash bash para comandos de terminal, ```sql para código SQL, ```javascript para código JavaScript, e como criar tabelas com | e --- para separar cabeçalho do corpo da tabela.

**O que fizemos:** Aceitamos e implementamos os blocos de código e tabelas no README.md.

## O que foi aceito, adaptado ou recusado

### Aceito 
- Estrutura MVC
- Código base dos CRUDs
- Schema do banco de dados
- Sistema de autenticação com sessão
- Middleware de proteção de rotas
- Funções de formatação nas views

### Adaptado 
- Nomes de colunas (ex: `id_cliente` em vez de `id`)
- Valores ENUM para minúsculos (`comprador` em vez de `Comprador`)
- Caminhos dos includes nos EJS (`../partials/head`)

### Recusado
- Uso de `var` (optamos por `const` e `let`)
- Código muito genérico (personalizamos para o domínio imobiliário)
- Sugestões de frameworks adicionais (optamos por manter simples)

---

## Reflexão crítica

### Onde a IA ajudou
- **Acelerou o desenvolvimento:** gerou a estrutura base rapidamente, poupando tempo de digitação
- **Explicou erros:** ajudou a entender mensagens de erro complexas que não conseguiríamos decifrar sozinhos
- **Sugeriu boas práticas:** como uso de middleware, validação de dados e organização de código
- **Documentação:** ajudou a estruturar o README e o relatório do uso de IA

### Onde a IA atrapalhou
- **Código genérico:** muitas vezes as sugestões precisavam ser adaptadas para o nosso contexto específico
- **Erros de contexto:** algumas sugestões não se aplicavam ao nosso setup (ex: sugeriu PostgreSQL em vez de MySQL)
- **Sobrecarga de informações:** algumas respostas eram muito extensas e precisavam ser filtradas

### Cuidados adotados

1. **Compreensão do código:** todo código foi revisado e compreendido antes de ser implementado
2. **Testes manuais:** testamos cada funcionalidade após implementar
3. **Adaptação:** ajustamos nomes de variáveis, colunas e valores para o nosso banco
4. **Validação:** verificamos se as sugestões estavam alinhadas com os requisitos do projeto
5. **Documentação:** registramos as decisões importantes para justificar as escolhas

---

## Conclusão

A IA foi uma ferramenta valiosa que **acelerou o desenvolvimento** e **ajudou na resolução de problemas**. No entanto, a equipe manteve **controle total sobre o código**, entendendo cada linha implementada e adaptando as sugestões conforme necessário para atender aos requisitos do projeto.

**A IA foi uma assistente, mas a autoria e responsabilidade técnica são inteiramente da equipe.**