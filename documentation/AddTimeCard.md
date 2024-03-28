# Adicionar cartão de ponto

Essa **API** serve para adicionar um cartao de ponto para um colaborador

> ## Request

- `enrollment` (number): Matrícula do colaborador.
- `startDate` (date): Data de início do cartão de ponto.
- `endDate` (date): Data de fim do cartão de ponto.

```json
POST /employees/time-card
```

```json
{
	"enrollment": 1,
	"startDate": "2024-02-03T08:00:00Z",
	"endDate": "2024-02-03T18:00:00Z"
}
```

> ## Response

- `statusCode` (number): O código de status HTTP da resposta.
- `data` (object): Objeto com os dados da resposta.

```json
{
  "statusCode": 201,
  "data": {"message": "TimeCard created"}
}
```

> ## Fluxo primário

1. Recebe uma requisição do tipo **POST** na rota **/employees/time-card**. ✅
2. Adiciona o cartão de ponto no banco de dados. ✅

> ## Fluxo de exceção: Consulta de elegibilidade não encontrada

1. Api nao possui tratamento para esse tipo de erro. ✅

> ## Fluxo de exceção: Erro ao criar registro de validação de documento de carteirinha elegível

1. Deve retornar **500** com a mensagem "Internal Server Error". ✅
