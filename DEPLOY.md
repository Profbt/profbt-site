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
assets/img/logo.svg
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
- Não versionar arquivos `.env` ou credenciais.
- Antes de qualquer commit, criação de remoto ou push futuro, revisar o diff e obter aprovação.
