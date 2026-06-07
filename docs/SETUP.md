# Setup

Guia rapido para rodar o projeto localmente.

## Requisitos

- Node.js 20 ou superior.
- npm, pnpm ou yarn.
- PostgreSQL para as proximas etapas com banco de dados.

## Instalar dependencias

```powershell
npm install
```

## Configurar variaveis de ambiente

Copie `.env.example` para `.env.local` e `.env`.

O Next.js usa `.env.local` durante o desenvolvimento. O Prisma CLI usa `.env` para migrations, generate e seed.

```powershell
Copy-Item .env.example .env.local
Copy-Item .env.example .env
```

## Rodar em desenvolvimento

```powershell
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Verificacoes

```powershell
npm run typecheck
npm run lint
```

## Banco de dados

Depois de configurar um PostgreSQL e preencher `DATABASE_URL`, rode:

```powershell
npm run db:generate
npm run db:migrate
npm run db:seed
```

Para visualizar os dados:

```powershell
npm run db:studio
```

## Usuario de exemplo

O seed cria um administrador local:

```text
E-mail: admin@sorteiosolidario.local
Senha: admin12345
```

## Rotas iniciais

```text
/login
/cadastro
/painel
```

## Observacao

Nesta etapa o projeto tem a modelagem inicial do banco. A autenticacao entra em uma etapa futura.
