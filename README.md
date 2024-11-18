# Moda Feminina

Bem-vindo ao projeto **Moda Feminina**, uma aplicação web que conecta as últimas tendências de moda feminina com uma interface moderna e intuitiva. Este projeto é composto por quatro partes principais: **admin**, **frontend**, **backend** e **services**, que trabalham juntas para oferecer uma experiência fluida aos usuários.

---

## **Índice**
- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação e Execução](#instalação-e-execução)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Admin](#admin)
- [Google Cloud Storage](#google-cloud-storage)
- [Contato](#contato)

---

## **Visão Geral do Projeto**
**Moda Feminina** é um projeto full-stack que inclui:
- **Admin**: Painel de administração para gerenciar produtos, categorias e usuários.
- **Frontend**: Interface do cliente para navegação e compras.
- **Backend**: API para gerenciar a lógica do servidor, autenticação e interação com o banco de dados.
- **Google Cloud Storage**: Armazenamento de imagens para produtos e usuários.

---

## **Pré-requisitos**
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js (>=18.x)](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (local ou em nuvem)
- [Google Cloud CLI](https://cloud.google.com/sdk)
- [Railway CLI](https://railway.app/cli) (para deploy do backend)

---

## **Configuração do Ambiente**
1. **Clone o repositório do projeto:**
   ```bash
   git clone https://github.com/Yeil-sr/moda-feminina.git
   cd moda-feminina
   ```

2. **Configuração de variáveis de ambiente:**
   Crie um arquivo `.env` em cada pasta conforme necessário e configure as seguintes variáveis:
   - **Backend**:
     ```env
     PORT=8000
     MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/<nome-db>
     JWT_SECRET=sua-chave-secreta
     GOOGLE_CLOUD_PROJECT_ID=seu-projeto-id
     GOOGLE_CLOUD_BUCKET_NAME=nome-do-bucket
     ```
   - **Admin** e **Frontend**:
     Não são necessárias variáveis de ambiente para desenvolvimento local.

---

## **Instalação e Execução**

### **Backend**
1. **Acesse o diretório do backend**:
   ```bash
   cd backend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   ```bash
   npm start
   ```

4. Certifique-se de que o backend está rodando no [http://localhost:8000](http://localhost:8000).

---

### **Frontend**
1. **Acesse o diretório do frontend**:
   ```bash
   cd frontend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. O frontend estará disponível em [http://localhost:3000](http://localhost:3000).

---

### **Admin**
1. **Acesse o diretório do admin**:
   ```bash
   cd admin
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. O painel administrativo estará disponível em [http://localhost:5173](http://localhost:5173).

---

## **Google Cloud Storage**
1. Certifique-se de que o projeto no Google Cloud está configurado com um bucket de armazenamento.
2. Atualize as permissões do bucket para permitir acesso às imagens do frontend.
3. Configure as credenciais do Google Cloud no backend usando um arquivo JSON de chave de serviço.
4. Execute o comando para autenticar:
   ```bash
   gcloud auth activate-service-account --key-file=/path/to/keyfile.json
   ```

---

## **Contato**
Se tiver dúvidas ou problemas, entre em contato:
- **Nome**: Yale  Souza
- **E-mail**: yale.designers@gmail.com
- **Portfólio**: [www.yaledesigner.com.br](http://www.yaledesigner.com.br)

---

Agora você está pronto para instalar, executar e gerenciar o projeto **Moda Feminina**! 🚀
