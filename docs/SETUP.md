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

Copie `.env.example` para `.env.local` e ajuste os valores conforme o ambiente.

```powershell
Copy-Item .env.example .env.local
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

## Observacao

Nesta primeira parte, o projeto ainda nao tem banco de dados nem autenticacao. A proxima etapa sera modelar as entidades e preparar o Prisma.
