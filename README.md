# 🧪 Testes Automatizados – Formulários Site e Certificação

Este repositório contém testes automatizados desenvolvidos com **Cypress** para validação de formulários nas aplicações:

- `/site`
- `/certificacao`

Os testes garantem o correto funcionamento das regras de obrigatoriedade dos campos e comportamento dos botões de envio.

---

## 🚀 Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js

---


---

# 🔎 Aplicação 1: /site

### URL testada:
https://qualidade.apprbs.com.br/site

## 📌 Cenários Cobertos

### ✅ Cenários Negativos
- Não preenchimento do campo **nome**
- Não preenchimento do campo **email**
- Preenchimento apenas do telefone
- Exibição da mensagem:
  "Preencha este campo"
- Botão **Concluir** permanece desabilitado

### ✅ Cenário Positivo
- Preenchimento de **nome + email**
- Botão habilitado
- Possibilidade de avançar

---

# 🔎 Aplicação 2: /certificacao

### URL testada:
https://qualidade.apprbs.com.br/certificacao

## 📌 Cenários Cobertos

### ✅ Validação de Campos Obrigatórios
- Nome obrigatório
- Email obrigatório

### ✅ Validação de Interface
- Exibição de mensagens de erro
- Estado do botão (`disabled` / habilitado)
- Disparo correto de validações

---

# 🧠 Regras de Negócio Validadas

- Campos obrigatórios: **Nome e Email**
- Campo opcional: **Telefone**
- Exibição de mensagem quando campo obrigatório não preenchido
- Bloqueio do botão quando requisitos não atendidos
- Liberação do botão quando regras são satisfeitas

---

# ▶️ Como Executar os Testes

## 1️⃣ Instalar dependências

```bash
npm install
