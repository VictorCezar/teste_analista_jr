# Modificar colaborador

Essa **API** serve para modificar um colaborador

> ## Request

- `enrollment` (number): Matrícula do colaborador.
- `name` (string): Nome do colaborador.
- `salary` (number): Salário do colaborador.
- `role` (string): Cargo do colaborador.

```json
PUT /employees
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
  "statusCode": 204,
  "data": {"message": "Employee updated"}
}
```

> ## Fluxo primário

1. Recebe uma requisição do tipo **PUT** na rota **/employees**. ✅
2. Modifica o colaborador no banco de dados. ✅

> ## Fluxo de exceção: Consulta de elegibilidade não encontrada

1. Api nao possui tratamento para esse tipo de erro. ✅

> ## Fluxo de exceção: Erro ao criar registro de validação de documento de carteirinha elegível

1. Deve retornar **500** com a mensagem "Internal Server Error". ✅
