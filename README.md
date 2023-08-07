# Desafio de Front-end da Vittude

A proposta desse desafio é transformar [este protótipo de tela de login](https://www.figma.com/file/WKialh3B7yNniqf8ZttNki/Vittude---Front-end-challenge?type=design&mode=design&t=rMqknxXXVAgMvDyK-1) em uma aplicação do mundo real.

## Notas

- Por ser opcional a integração com a api, optei por não adicionar, porém para ficar uma experiencia mais agradavel, criei um flow para **fazer login, cadastrar usuário e recuperar senha e área logada**, essas informações ficarão armazenadas na sessionStore do navegador.

- O flow ficou baseada na main page mas poderia também ser utilizado o react router para direcionamento das páginas.

- No intuito de ter um flow mais usual, foi incluido um componente chamado Welcome que nada mais é que a área logada, assim que o usuário fizer login com as crendenciais válidas, o componente será exibido.

- Adicionei um botão chamado **Novo por aqui? Cadastre-se**, o mesmo não se encontra no design proposto, mas foi adicionado (pode ser removido) no intuito de aumentar a experiência do usuário, que após criado assim que fizer login, será direcionado para a tela de área logada.

## Referência

- [React Hook Form](https://axios-http.com/) - Manipulação de formulários
- [React Responsive](https://www.npmjs.com/package/react-responsive) - Consultas de media queries para design responsivo.
- [Styled Components](https://styled-components.com/) - Estilização dos componentes.
- [Yup](https://github.com/jquense/yup) - Construtor de esquema para análise e validação de valor.
- [Jest](https://jestjs.io/docs/tutorial-react) - Framework de testes.

## Inicialização

Dentro da pasta execute os seguintes comandos

```bash
  npm i
  npm start
```

## Testes

Dentro da pasta execute os seguintes comandos para realização dos testes

```bash
  npm test
```

Serão testados o total de 6 componentes validando validando as informações contidas nos mesmos.
