# Remover colaborador

Essa **API** serve para remover um colaborador

> ## Request

- `enrollment` (number): Matrícula do colaborador.

```json
DELETE /employees/:enrollment
```

> ## Response

- `statusCode` (number): O código de status HTTP da resposta.
- `data` (object): Objeto com os dados da resposta.

```json
{
  "statusCode": 204,
  "data": {"message": "Employee removed"}
}
```

> ## Fluxo primário

1. Recebe uma requisição do tipo **DELETE** na rota **/employees/:enrollment**. ✅
2. Remove o colaborador no banco de dados. ✅

> ## Fluxo de exceção: Consulta de elegibilidade não encontrada

1. Api nao possui tratamento para esse tipo de erro. ✅

> ## Fluxo de exceção: Erro ao criar registro de validação de documento de carteirinha elegível

1. Deve retornar **500** com a mensagem "Internal Server Error". ✅
