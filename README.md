# Sorteio Solidario

SaaS para rifas e acoes beneficentes.

Plataforma para igrejas, grupos e organizacoes venderem numeros online, receberem via PIX, realizarem sorteios e prestarem contas com transparencia.

## Problema

Muitas campanhas beneficentes ainda dependem de planilhas, mensagens manuais e comprovantes enviados por WhatsApp. Isso gera retrabalho, risco de erro, dificuldade para controlar pagamentos e pouca transparencia para participantes e organizadores.

## Proposta

Criar um SaaS simples e confiavel para gerenciar campanhas de rifas e acoes beneficentes do inicio ao fim:

- Criacao de campanhas.
- Venda/reserva de numeros online.
- Pagamento via PIX.
- Confirmacao automatica ou manual de pagamentos.
- Sorteio com registro auditavel.
- Prestacao de contas para organizadores e participantes.

## Publico-alvo

- Igrejas.
- Grupos de jovens.
- Associacoes comunitarias.
- ONGs pequenas.
- Times, turmas e grupos beneficentes.
- Organizadores independentes de campanhas solidarias.

## MVP

O primeiro objetivo e validar o fluxo principal:

1. O organizador cria uma campanha.
2. Define quantidade de numeros, valor, premio e data do sorteio.
3. O participante escolhe numeros disponiveis.
4. O sistema gera uma cobranca PIX.
5. Apos pagamento, os numeros ficam confirmados.
6. O organizador acompanha vendas e saldo.
7. Ao final, o sistema realiza ou registra o sorteio.
8. A campanha exibe uma prestacao de contas simples.

## Modulos do Produto

### 1. Organizadores e autenticacao

- Cadastro e login.
- Perfil da organizacao.
- Usuarios administradores.
- Controle basico de permissoes.

### 2. Campanhas

- Criar, editar e encerrar campanha.
- Titulo, descricao, imagens, premio, valor por numero e data do sorteio.
- Status: rascunho, ativa, encerrada, sorteada, cancelada.

### 3. Numeros da rifa

- Geracao automatica dos numeros.
- Visualizacao por disponibilidade.
- Reserva temporaria durante checkout.
- Confirmacao apos pagamento.

### 4. Checkout publico

- Pagina publica da campanha.
- Escolha de numeros.
- Dados do participante.
- Resumo do pedido.
- PIX copia e cola e QR Code.

### 5. Pagamentos PIX

- Integracao inicial com provedor PIX.
- Webhook para confirmacao automatica.
- Fallback de confirmacao manual no painel.
- Historico de pagamentos.

### 6. Sorteio

- Sorteio entre numeros pagos.
- Registro do resultado.
- Pagina publica com vencedor.
- Log basico para auditoria.

### 7. Prestacao de contas

- Total arrecadado.
- Quantidade de numeros vendidos.
- Custos informados pelo organizador.
- Valor liquido destinado a causa.
- Relatorio simples compartilhavel.

### 8. Painel administrativo

- Dashboard por campanha.
- Vendas recentes.
- Pagamentos pendentes e confirmados.
- Exportacao CSV.
- Acoes rapidas: confirmar pagamento, cancelar reserva, encerrar campanha.

## Fases de Desenvolvimento

### Parte 1 - Fundacao do projeto

- Stack definida: Next.js, TypeScript, Tailwind CSS, PostgreSQL e Prisma.
- Estrutura inicial do projeto criada.
- Layout base do painel do organizador criado.
- Arquivo de ambiente de exemplo criado.
- Guia de setup criado em `docs/SETUP.md`.

Sugestao de commit:

```text
chore: initialize project structure
```

### Parte 2 - Modelagem e banco de dados

- Definir entidades principais.
- Criar schema do banco.
- Criar migrations.
- Popular dados de exemplo.

Entidades iniciais:

- User
- Organization
- Campaign
- RaffleNumber
- Order
- Payment
- Draw
- Expense

Sugestao de commit:

```text
feat: add initial database schema
```

### Parte 3 - Autenticacao e painel

- Login.
- Cadastro.
- Area protegida.
- Painel inicial do organizador.

Sugestao de commit:

```text
feat: add organizer authentication
```

### Parte 4 - CRUD de campanhas

- Criar campanha.
- Editar campanha.
- Listar campanhas.
- Publicar ou pausar campanha.

Sugestao de commit:

```text
feat: add campaign management
```

### Parte 5 - Numeros e pagina publica

- Gerar numeros.
- Mostrar numeros disponiveis.
- Reservar numeros no checkout.
- Criar pagina publica da campanha.

Sugestao de commit:

```text
feat: add public raffle number selection
```

### Parte 6 - Checkout e pedidos

- Capturar dados do participante.
- Criar pedido.
- Expirar reservas nao pagas.
- Mostrar resumo e status.

Sugestao de commit:

```text
feat: add raffle checkout flow
```

### Parte 7 - PIX

- Gerar cobranca PIX.
- Exibir QR Code e copia e cola.
- Receber webhook.
- Confirmar pagamento.

Sugestao de commit:

```text
feat: integrate pix payments
```

### Parte 8 - Sorteio

- Selecionar vencedor entre numeros pagos.
- Registrar resultado.
- Exibir resultado publicamente.

Sugestao de commit:

```text
feat: add raffle draw flow
```

### Parte 9 - Prestacao de contas

- Informar despesas.
- Calcular arrecadacao bruta, custos e valor liquido.
- Gerar relatorio publico.

Sugestao de commit:

```text
feat: add accountability report
```

### Parte 10 - Polimento e producao

- Testes.
- Ajustes responsivos.
- Logs.
- Deploy.
- Termos, privacidade e regras de uso.

Sugestao de commit:

```text
chore: prepare app for production
```

## Melhorias Importantes Para Diferenciar

- Prestacao de contas publica por campanha.
- Link publico bonito para compartilhar no WhatsApp.
- Painel simples para pessoas que hoje usam planilha.
- Reserva temporaria para evitar dois participantes escolhendo o mesmo numero.
- Exportacao CSV para backup.
- Pagina de transparencia com sorteio, vencedor e totais.
- Modo confirmacao manual para campanhas que ainda nao usam PIX automatico.

## Sugestao de Stack

Stack recomendada para evoluir rapido:

- Next.js com TypeScript.
- Tailwind CSS.
- PostgreSQL.
- Prisma.
- Auth.js ou Clerk para autenticacao.
- Mercado Pago, Efí Bank, Asaas ou Gerencianet/Efí para PIX.
- Vercel para frontend/API.
- Neon, Supabase ou Railway para banco.

## Primeira Versao Util

Para a primeira entrega, nao precisamos fazer tudo. Uma versao ja utilizavel pode ter:

- Login do organizador.
- Cadastro de campanha.
- Numeros gerados automaticamente.
- Pagina publica de escolha.
- Pedido com status pendente.
- PIX manual ou copia e cola configurado pelo organizador.
- Confirmacao manual de pagamento.
- Sorteio entre numeros confirmados.
- Relatorio simples.

Depois disso, entramos no PIX automatico com webhook.
