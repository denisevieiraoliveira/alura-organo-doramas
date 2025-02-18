# 👥 Organo

O Organo é originalmente uma plataforma de cadastro de colaboradores da empresa Alura. Porém para fins de aprendizado modifiquei para o cadastro dos meus doramas favoritos.

## 💻 Tecnologias utilizadas

React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🚀 Instalação

Após clonar o projeto, acesse o diretório e digite o comando abaixo para instalar as dependências necessárias:

```
npm install
```

Para a criação de UUIDs RFC9562 utilizada para identificar os gêneros e doramas:

```
npm install uuid
```

Para renderizar os ícones:

```
npm install react-icons --save
```

Inicie o servidor da api local:

```
npm run dev
```

## 📕 Aprendizados

Este projeto foi desenvolvido a partir do zero, durante os cursos react: desenvolvendo com javascript e React: como os componentes funcionam, com base no design do organo no figma.

Conceitos aprendidos

- Como o react funciona e por que ele utiliza uma virtual DOM;
- Diferença entre export e export default;
- O que são componentes, como criá-los e diferença entre componentes funcionais de classes;
- props: children, destructing operator com props e como passar dados para o elemento pai, através de funções com props;
- O que é two-way data binding e one-way data binding(utilizado pelo react) e como passar informação entre componente de diferentes níveis;
- Uso de métodos de array para iteração de componentes, como map e filter;
- Renderização condicional com o operador ternário e operador &&. Refatoração de componentes;
- Eventos no react(eventos sintéticos);
- Hooks, como useState para criar componentes controlados, e useEffects para impedir loop infinito.


## 👉 Confira o projeto pelo link:

https://alura-organo-doramas.vercel.app/