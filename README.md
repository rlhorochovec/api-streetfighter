
# api-streetfighter

Projeto de API utilizando Node.JS e Postgres.


## Documentação da API

#### Insere um lutador

```http
 POST /api/lutadores
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome do lutador que você quer |
| `nacionalidade` | `string` | **Obrigatório**. A nacionalidade do lutador que você quer |

#### Retorna todos os lutadores

```http
  GET /api/lutadores
```

#### Retorna um lutador

```http
 GET /api/lutadores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |

#### Retorna lutadores filtrados por nome

```http
 GET /api/lutadores?nome=${nome}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O ID do lutador que você quer |


#### Altera um lutador

```http
 PUT /api/lutadores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |
| `nome`      | `string` | **Obrigatório**. O nome do lutador que você quer |
| `nacionalidade` | `string` | **Obrigatório**. A nacionalidade do lutador que você quer |

#### Remove um lutador

```http
 DEL /api/lutadores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |


## Screenshots

<img src="https://github.com/rlhorochovec/api-streetfighter/blob/develop/screenshots/get.png" width="400" />