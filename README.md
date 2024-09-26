### Tecnologias necessárias

- Docker
- Node.js v20.17.0
- Prisma

### Instale as dependências

```sh
  pnpm install
  npx prisma migrate dev
```

### Rode o banco

```sh
  docker compose up
```

### Rode o projeto

```sh
  pnpm dev
```

Abra o servidor em: `http://locahost:3000`