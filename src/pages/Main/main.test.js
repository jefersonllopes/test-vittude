import { render, screen } from "@testing-library/react";

import Welcome from "../../components/Welcome/index";
import Login from "../../components/Login/index";
import ForgotPassword from "../../components/ForgotPassword/index";
import CreateUser from "../../components/CreateUser";

test("renders the login page", () => {
  render(<Login />);
  const element = screen.getByTestId("content-login");

  expect(element).toHaveTextContent("Bem-vindo a Vittude!");
  expect(element).toHaveTextContent("Novo por aqui? Cadastre-se");
  expect(element).toHaveTextContent("Login");
  expect(element).toHaveTextContent("Senha");
  expect(element).toHaveTextContent("Acessar");
  expect(element).toHaveTextContent("Esqueci minha Senha");
});

test("renders the main page", () => {
  render(<Welcome />);
  const element = screen.getByTestId("content-welcome");

  expect(element).toHaveTextContent("Terapia online");
  expect(element).toHaveTextContent(
    "Seu psicólogo a qualquer hora, em qualquer lugar."
  );
  expect(element).toHaveTextContent("Vamos lá, por onde você quer começar?");
  expect(element).toHaveTextContent("Ativar meu benefício corporativo");
  expect(element).toHaveTextContent("Agendar consulta sem benefício");
});

test("renders the forgot password page", () => {
  render(<ForgotPassword />);
  const element = screen.getByTestId("content-forgot-password");

  expect(element).toHaveTextContent("Esqueci minha senha");
  expect(element).toHaveTextContent("Login");
  expect(element).toHaveTextContent("Recuperar");
  expect(element).toHaveTextContent("Voltar");
});

test("renders the create use page", () => {
  render(<CreateUser />);
  const element = screen.getByTestId("content-create-user");

  expect(element).toHaveTextContent("Cadastre-se");
  expect(element).toHaveTextContent("Login");
  expect(element).toHaveTextContent("Senha");
  expect(element).toHaveTextContent("Cadastrar");
  expect(element).toHaveTextContent("Voltar");
});
