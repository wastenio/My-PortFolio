# Portfólio Profissional | Wastenio da S. Rocha

Este projeto é a reestruturação do meu portfólio pessoal, originalmente criado a partir de um curso introdutório de desenvolvimento web. A primeira versão cumpriu bem o papel de estudo, mas ainda carregava muitas características do template do curso.

Com o objetivo de transformar esse projeto em um portfólio próprio, profissional e mais alinhado ao mercado, decidi migrar a base antiga para uma stack mais atual, utilizando Next.js, React, TypeScript e Tailwind CSS.

## Objetivo da reestruturação

A proposta desta nova versão é apresentar minha trajetória, experiências, tecnologias e projetos de forma mais clara, moderna e profissional.

Durante a migração, busquei aplicar conhecimentos práticos em:

- Organização de projeto com Next.js e App Router.
- Criação de componentes reutilizáveis com React.
- Tipagem de dados com TypeScript.
- Estilização responsiva com Tailwind CSS.
- Separação entre conteúdo, layout e apresentação.
- Melhoria de SEO, performance e estrutura para deploy.
- Criação de uma experiência visual mais própria, sem aparência de template de curso.

## Por que migrar o projeto?

O portfólio anterior foi importante para praticar HTML, CSS e JavaScript, mas eu queria que a nova versão demonstrasse melhor minha evolução como desenvolvedor.

A migração para tecnologias mais atuais permite que o projeto reflita melhor as stacks que venho estudando e utilizando, além de tornar o portfólio mais preparado para divulgação profissional e apresentação dos meus projetos reais.

## Stack utilizada

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Node.js
- npm

## Estrutura principal

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  data/
    portfolio.ts
public/
  assets/
```

## Onde editar o conteúdo

Os dados principais do portfólio ficam centralizados em:

```txt
src/data/portfolio.ts
```

Nesse arquivo é possível atualizar:

- Informações pessoais.
- Links de contato.
- Tecnologias.
- Projetos.
- Experiências profissionais.
- Formação.

## Como executar localmente

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```txt
http://localhost:3000
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão otimizada de produção.

```bash
npm run start
```

Executa a aplicação após o build.

```bash
npm run lint
```

Executa a verificação de qualidade do código.

## Deploy no GitHub Pages

O projeto está configurado para deploy estático no GitHub Pages usando GitHub Actions.

Ao enviar alterações para a branch `main`, o workflow em:

```txt
.github/workflows/deploy.yml
```

executa o build do Next.js, gera a pasta `out` e publica o conteúdo no GitHub Pages.

Como este repositório é publicado em uma URL de projeto, os assets são preparados com o caminho base:

```txt
/My-PortFolio
```

No GitHub, a configuração de Pages deve usar a origem:

```txt
GitHub Actions
```

## Aprendizados aplicados

Este projeto representa uma etapa importante da minha evolução profissional, pois une conhecimentos de frontend moderno, organização de código, boas práticas de componentização e preocupação com apresentação profissional.

Além de divulgar meus projetos, este portfólio também funciona como uma demonstração prática da minha capacidade de evoluir um projeto simples para uma aplicação mais estruturada, atualizada e preparada para uso real.
