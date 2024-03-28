# Adicionar colaborador

Essa **API** serve para adicionar um novo colaborador

> ## Request

- `enrollment` (number): Matrícula do colaborador.
- `name` (string): Nome do colaborador.
- `role` (string): Cargo do colaborador.
- `salary` (number): Salário do colaborador.

```json
POST /employees/
```

```json
{
	"enrollment": 1,
	"name": "Victor",
	"role": "Analyst",
	"salary": 1200.00
}
```

> ## Response

- `statusCode` (number): O código de status HTTP da resposta.
- `data` (object): Objeto com os dados da resposta.

```json
{
  "statusCode": 200,
  "data": {"message": "Employee created"}
}
```

> ## Fluxo primário

1. Recebe uma requisição do tipo **POST** na rota **/employees**. ✅
2. Adiciona o colaborador no banco de dados. ✅

> ## Fluxo de exceção: Consulta de elegibilidade não encontrada

1. Api nao possui tratamento para esse tipo de erro. ✅

> ## Fluxo de exceção: Erro ao criar registro de validação de documento de carteirinha elegível

1. Deve retornar **500** com a mensagem "Internal Server Error". ✅
