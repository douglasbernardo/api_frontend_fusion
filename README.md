
# 🚀 Star Wars SpaceShip API

API RESTful desenvolvida com NestJS para gerenciar naves espaciais do universo Star Wars. Possui autenticação com JWT, controle de afiliações e rotas protegidas.

---

## 📦 Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **MongoDB** (via Mongoose)
- **JWT** (`@nestjs/jwt`)
- **Bcrypt** (`bcrypt`)
- **class-validator** e **class-transformer**

---

## ⚙️ Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

---

## 🚀 Rodando o Projeto

```bash
npm run start:dev
```

---

## 🔐 Autenticação JWT

- A autenticação é feita por **token JWT**.
- O token tem duração de **2 minutos**.
- Deve ser enviado no **header** das requisições protegidas assim:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

---

## 📬 Rotas da API

### 🧍 Usuários

#### POST `/user/add`
- Cadastra um novo usuário.
- Body:
```json
{
  "name": "Luke Skywalker",
  "email": "luke@jedi.com",
  "pass": "123456",
  "affiliation": "JEDI"
}
```

---

#### POST `/auth/login`
- Realiza login e retorna o token JWT.
- Body:
```json
{
  "email": "luke@jedi.com",
  "pass": "123456"
}
```

- Resposta:
```json
{
  "user": {
    "name": "Luke Skywalker",
    "email": "luke@jedi.com",
    "affiliation": "JEDI"
  },
  "access_token": "SEU_TOKEN_AQUI"
}
```

---

### 🛸 Naves Espaciais

> Todas as rotas abaixo exigem token JWT

#### GET `/spaceships/list`
- Lista todas as naves cadastradas.

#### POST `/spaceships/create`
- Cria uma nova nave espacial.
- Body:
```json
{
  "name": "X-Wing",
  "model": "T-65B",
  "manufacturer": "Incom Corporation",
  "passengerCapacity": 1
}
```

---

## 🧙‍♂️ Afiliações Disponíveis

Os usuários podem pertencer a uma das seguintes afiliações:

- JEDI
- SITH
- REBELDE
- IMPERIO
- CAÇADOR_DE_RECOMPENSAS
- REPUBLICA
- ALIANCA_REBELDE

> Representadas via enum no backend.

---

## 🧩 Estrutura de Pastas (resumida)

```
src/
├── auth/                  # Login, signup e JWT
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── guards/auth.guard.ts
├── users/                 # Cadastro de usuários
│   └── user.schema.ts
├── spaceships/            # CRUD de naves
│   ├── spaceship.controller.ts
│   ├── spaceship.service.ts
│   └── spaceship.schema.ts
├── enums/                 # Afiliações (enum)
│   └── affiliation.enum.ts
├── main.ts
```

---

## 🛠️ Variáveis de Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto com:

```env
MONGO_URI=mongodb://localhost:27017/starwars
JWT_SECRET=thisisasecret
JWT_EXPIRES_IN=2m
```

---

## 🧑‍💻 Desenvolvido por

Douglas – [LinkedIn](https://www.linkedin.com/in/douglas-b-melo-abb190164/)  
Projeto pessoal desenvolvido como parte de um desafio da comunidade **Front End Fusion**.

---
