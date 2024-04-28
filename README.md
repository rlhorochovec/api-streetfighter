
# api-streetfighter

Projeto de API utilizando Node.JS e Postgres.

## Rodando localmente

```bash
  cd api-streetfighter
  npm install
  node server.js
```

## Acessando

```
http://localhost:8080/api/fighters
```

## Documentação da API

#### Insere um lutador

```
  POST /api/fighters
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do lutador que você quer |
| `country` | `string` | **Obrigatório**. A nacionalidade do lutador que você quer |
| `thumbnailUrl` | `string` | **Obrigatório**. A URL da imagem do lutador que você quer |

#### Retorna todos os lutadores

```
  GET /api/fighters
```

#### Retorna um lutador

```
  GET /api/fighters/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |

#### Retorna lutadores filtrados por nome

```
  GET /api/fighters?name=${name}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O ID do lutador que você quer |


#### Altera um lutador

```
  PUT /api/fighters/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |
| `name`      | `string` | **Obrigatório**. O nome do lutador que você quer |
| `country` | `string` | **Obrigatório**. A nacionalidade do lutador que você quer |
| `thumbnailUrl` | `string` | **Obrigatório**. A URL da imagem do lutador que você quer |

#### Remove um lutador

```
  DEL /api/fighters/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `integer` | **Obrigatório**. O ID do lutador que você quer |


## Screenshots

<img src="https://github.com/rlhorochovec/api-streetfighter/blob/develop/screenshots/get.PNG" width="400" />