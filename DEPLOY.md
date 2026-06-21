# Plano de Deploy Futuro

## Repositório futuro

```text
Profbt/profbt-site
```

## Domínio futuro

```text
https://profbt.com.br
```

## Tipo

Site estático sem build obrigatório.

O projeto deve ser servido diretamente a partir dos arquivos versionados:

```text
index.html
assets/css/styles.css
assets/js/app.js
robots.txt
sitemap.xml
```

## Deploy previsto

Deploy futuro previsto via Coolify, em modo Static/Nixpacks/nginx ou equivalente para site estático.

Configuração preliminar sugerida:

```text
Tipo: Static site
Branch: main
Build command: vazio / none
Publish directory: /
Domínio: https://profbt.com.br
```

## DNS

O DNS do domínio raiz `profbt.com.br` ainda não está configurado nesta etapa.

Não configurar Cloudflare, DNS ou Coolify sem aprovação separada.

## Ambientes que não devem ser alterados

Não alterar:

```text
https://central.profbt.com.br
https://teste-central.profbt.com.br
```

Não remover ainda:

```text
https://profbt.vercel.app
```

## Observações

- Este repositório é separado de `Profbt/app_profbt`.
- A Central dos alunos continua em `https://central.profbt.com.br`.
- Não versionar secrets, tokens, arquivos `.env` ou credenciais.
- Antes de qualquer commit, criação de remoto ou push futuro, revisar o diff e obter aprovação.

## Estado atual validado

O site profissional está ativo em:

- https://profbt.com.br
- https://www.profbt.com.br

Aplicação no Coolify:

- Projeto: ProfBT
- Ambiente interno: production
- Aplicação: site-profissional
- Repositório: Profbt/profbt-site
- Branch: main
- Tipo: site estático sem build
- Build Pack: Nixpacks
- Static Image: nginx:alpine
- Healthcheck: GET http://localhost:80/
- Status esperado: healthy

DNS no Cloudflare:

- Tipo: A
- Nome: @
- Conteúdo: 137.131.161.79
- Proxy: Somente DNS
- TTL: Auto

- Tipo: A
- Nome: www
- Conteúdo: 137.131.161.79
- Proxy: Somente DNS
- TTL: Auto

Validação:

```bash
curl -I https://profbt.com.br
curl -I https://www.profbt.com.br
```

Resultado esperado:

```text
HTTP/2 200
```

## Domínios relacionados que não devem ser alterados

- https://central.profbt.com.br
- https://teste-central.profbt.com.br
- https://painel.profbt.com.br
- https://vps.profbt.com.br
- https://profbt.vercel.app

A Vercel deve permanecer ativa temporariamente como legado, até decisão explícita de remoção.
