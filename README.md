## **Sobre API**

Essa API faz parte de um desafio proprosto pela empresa Sinobras para uma vaga de Analista jr.
<br />

### **Arquitetura**

Arquitetura foi pensada no MVC, onde temos a camada de Model, View e Controller. Além disso, foi utilizado o conceito de Clean Architecture, onde temos as camadas de Entities, Use Cases e Controllers. A arquitetura foi pensada para ser escalável e de fácil manutenção.

<br />

### **APIs construídas**

1. [Adicionar Colaborador](./documentation/AddEmployee.md)
2. [Busca um Colaborador](./documentation/GetEmployee.md)
3. [Remover Colaborador](./documentation/RemoveEmployee.md)
4. [Modificar Colaborador](./documentation/ChangeEmployee.md)
5. [Busca relatório de colaboradores](./documentation/RemoveEmployee.md)
6. [Adicionar ponto de entrada](./documentation/AddTimeCard.md)

<br />

### **Tecnologias utilizadas**

- **NodeJS**: Linguagem de programação utilizada para desenvolver a API.
- **Typescript**: Linguagem de programação utilizada para desenvolver a API.
- **Express**: Framework utilizado para desenvolver a API.
- **Jest**: Framework utilizado para desenvolver os testes unitários.
- **Eslint**: Ferramenta utilizada para fazer a padronização do código.
- **Prettier**: Ferramenta utilizada para fazer a padronização do código.
- **Husky**: Ferramenta utilizada para fazer a padronização do código.
- **Lint-staged**: Ferramenta utilizada para fazer a padronização do código.
- **Docker**: Ferramenta utilizada para fazer o container da aplicação.
- **Docker-compose**: Ferramenta utilizada para fazer o container da aplicação.

<br />

### **Princípios utilizados**

- **YAGNI**: You Aren't Gonna Need It
- Small Commits

<br />

### **Design Patterns**

<br />

### **Metodologias e Designs**

- **MVC**
- **TDD**
- **Clean Code**

<br />

### **Features de Testes**

- **Testes Unitários**

<br />

### **Como rodar a aplicação**

1. Clone o repositório
2. Instale as dependências com `npm run install`
3. Rode a aplicação com `npm run start:dev`
4. para rodas as migrations `npx prisma migrate dev <nome da migration>`
5. Acesse a aplicação em `http://localhost:3000`

<br />

### **Como rodar a aplicação com docker**

1. Clone o repositório
2. Rode a aplicação com `docker-compose up -d`
4. na raiz do projeto no termial use o comando para rodas as migrations `npx prisma migrate dev <nome da migration>`
3. Acesse a aplicação em `http://localhost:3000`
4. Para parar a aplicação rode `docker-compose down`

### **Como rodar os testes**

1. Clone o repositório
2. Instale as dependências com `npm run install`
3. Rode os testes com `npm run test:watch`
