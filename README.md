
# api-streetfighter

Projeto de API utilizando Node.JS e Postgres.


## Documentação da API

#### Insere um lutador

```
    POST /api/lutadores
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O nome do lutador que você quer |
| `nacionalidade` | `string` | **Obrigatório**. A nacionalidade do lutador que você quer |

#### Retorna todos os lutadores

```
    GET /api/lutadores
```

#### Retorna um lutador

```
    GET /api/lutadores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |

#### Retorna lutadores filtrados por nome

```
    GET /api/lutadores?nome=${nome}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nome`      | `string` | **Obrigatório**. O ID do lutador que você quer |


#### Altera um lutador

```
    PUT /api/lutadores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |
| `nome`      | `string` | **Obrigatório**. O nome do lutador que você quer |
| `nacionalidade` | `string` | **Obrigatório**. A nacionalidade do lutador que você quer |

#### Remove um lutador

```
    DEL /api/lutadores/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |


## Screenshots

<img src="https://github.com/rlhorochovec/api-streetfighter/blob/develop/screenshots/get.PNG" width="400" />