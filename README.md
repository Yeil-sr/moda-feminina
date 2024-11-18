# Moda Feminina

Bem-vindo ao projeto **Moda Feminina**, uma aplicação web desenvolvida para conectar mulheres às últimas tendências da moda íntima. Este sistema oferece uma interface moderna e prática para navegação, gerenciamento de produtos e compras online, garantindo uma experiência única e intuitiva.

---

## **Índice**
- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Instalação e Execução](#instalação-e-execução)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Admin](#admin)
- [Armazenamento de Imagens com Google Cloud Storage](#armazenamento-de-imagens-com-google-cloud-storage)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Deploy](#deploy)
- [Contato](#contato)

---

## **Visão Geral do Projeto**
O **Moda Feminina** é composto por três módulos principais que trabalham em conjunto:
- **Admin**: Painel de administração para gerenciar produtos, categorias e usuários.
- **Frontend**: Interface de cliente, projetada para uma navegação fluida e intuitiva.
- **Backend**: API responsável por gerenciar a lógica de negócios, autenticação e integração com o banco de dados.

**Moda Íntima Feminina**  
A moda íntima feminina é mais do que funcionalidade; é uma expressão de estilo, conforto e bem-estar. Este projeto reflete essa visão, proporcionando uma experiência moderna e personalizada para cada cliente.

---

## **Pré-requisitos**
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js (>=18.x)](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (local ou em nuvem)
- [Google Cloud CLI](https://cloud.google.com/sdk)

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

4. Certifique-se de que o backend está rodando no [http://localhost:4000](http://localhost:4000).

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

## **Armazenamento de Imagens com Google Cloud Storage**
1. Certifique-se de que seu bucket no Google Cloud está configurado.
2. Atualize as permissões do bucket para permitir acesso público às imagens.
3. Configure as credenciais do Google Cloud no backend usando um arquivo JSON de chave de serviço.
4. Execute o comando para autenticar:
   ```bash
   gcloud auth activate-service-account --key-file=/path/to/keyfile.json
   ```

---

## **Tecnologias Utilizadas**
- **Frontend**: React, React Router DOM
- **Backend**: Node.js, Express
- **Banco de Dados**: MongoDB
- **Armazenamento de Imagens**: Google Cloud Storage

---

## **Deploy**
- **Frontend**: [moda-feminina.vercel.app](https://moda-feminina.vercel.app)
- **Backend**: Deploy realizado no Railway.
- **Banco de Dados**: MongoDB Atlas para armazenamento em nuvem.

---

## **Contato**
Se tiver dúvidas ou sugestões, entre em contato:
- **Nome**: Yale Souza  
- **E-mail**: yale.designers@gmail.com  
- **Portfólio**: [www.yaledesigner.com.br](http://www.yaledesigner.com.br)

---

Aproveite o projeto **Moda Feminina** e explore o universo da moda íntima com tecnologia e inovação! 🚀
