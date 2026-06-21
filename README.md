# ProfBT Site

Site profissional e institucional do Prof. Bruno Carvalho (ProfBT), preparado para o domínio futuro:

```text
https://profbt.com.br
```

A Central dos alunos é um projeto separado e continua em:

```text
https://central.profbt.com.br
```

## Objetivo do repositório

Este repositório contém o futuro site principal do ProfBT: uma presença institucional leve para apresentar atuação profissional, projetos, educação digital, sistemas e canais oficiais.

A versão visual escolhida para o site principal foi:

```text
001-cinematic-minimal
```

O projeto foi pensado para ser simples de manter e publicar como site estático, sem etapa obrigatória de build.

## Estrutura de pastas

```text
profbt-site/
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
├── DEPLOY.md
├── .gitignore
├── .editorconfig
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── app.js
    ├── img/
    │   └── .gitkeep
    └── icons/
        └── .gitkeep
```

## Como abrir localmente

Opção direta: abrir `index.html` no navegador.

Opção com servidor estático local, a partir da raiz do repositório:

```bash
python3 -m http.server 8080
```

Depois acessar:

```text
http://localhost:8080
```

## Site estático sem build

Este projeto não usa framework, não possui `package.json` e não exige dependências para funcionar.

Arquivos servidos diretamente:

- `index.html`
- `assets/css/styles.css`
- `assets/js/app.js`
- `robots.txt`
- `sitemap.xml`

## Deploy futuro

O deploy futuro previsto será via Coolify como site estático, usando o futuro repositório GitHub:

```text
Profbt/profbt-site
```

A configuração de Coolify, DNS e publicação não foi feita nesta etapa.

## Central dos alunos

Este site não substitui nem altera a Central dos alunos. A Central permanece separada em:

```text
https://central.profbt.com.br
```
