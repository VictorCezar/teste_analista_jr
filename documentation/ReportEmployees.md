# Busca relatório de colaboradores

Essa **API** serve para buscar um relatório de colaboradores

> ## Request

- `date` (date): Data do relatório.

```json
GET /employees/report/:2024-02-03
```

> ## Response

- `statusCode` (number): O código de status HTTP da resposta.
- `data` (object): Objeto com os dados da resposta.

```json
{
	"employees": [
		{
			"timeCards": [
				{
					"employeeEnrollment": 1,
					"startDate": "2024-03-03T08:00:00.000Z",
					"endDate": "2024-03-03T18:00:00.000Z"
				},
				{
					"employeeEnrollment": 1,
					"startDate": "2024-03-03T08:00:00.000Z",
					"endDate": "2024-03-03T18:00:00.000Z"
				}
			],
			"enrollment": 1,
			"name": "Victor",
			"salary": 1200,
			"role": "Analyst"
		}
	]
}
```

> ## Fluxo primário

1. Recebe uma requisição do tipo **GET** na rota **/employees/report/:date**. ✅
2. Busca o relatório de colaboradores no banco de dados. ✅

> ## Fluxo de exceção: Consulta de elegibilidade não encontrada

1. Api nao possui tratamento para esse tipo de erro. ✅

> ## Fluxo de exceção: Erro ao criar registro de validação de documento de carteirinha elegível

1. Deve retornar **500** com a mensagem "Internal Server Error". ✅
