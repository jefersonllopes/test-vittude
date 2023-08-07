import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InputCustom from "../Input";
import ButtonCustom from "../Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../core/services/login";
import {
  Block,
  ButtomCreateUser,
  Container,
  ContainerTitle,
  Title,
} from "./styles";
import { FormSchema } from "../../core/schemas";

export default function Login({ createUser, forgotPassword, welcome }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(FormSchema) });

  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState({ code: "", message: "" });

  const onSubmitHandler = (data) => {
    setLoading(true);
    setTimeout(() => {
      const resLogin = login(data.email, data.password);
      if (resLogin.code === 200) {
        welcome();
        reset();
      } else {
        setMessageError(resLogin);
        setError(true);
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <Container data-testid="content-login">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ContainerTitle isPortrait={isPortrait}>
          <Title>
            Bem-vindo <br />a Vittude!
          </Title>
        </ContainerTitle>
        <Block>
          <InputCustom
            label="Login"
            name={"email"}
            placeholder="email@exemplo.com"
            register={register}
            error={
              errors.email?.message ||
              (error && messageError.code === 404 && messageError.message)
            }
          />
          <InputCustom
            label="Senha"
            name={"password"}
            placeholder="······"
            type="password"
            register={register}
            error={
              errors.password?.message ||
              (error && messageError.code === 401 && messageError.message)
            }
          />
        </Block>
        <Block>
          <ButtonCustom
            label="Acessar"
            top={22}
            type="submit"
            loading={loading}
          />
          <ButtonCustom
            label="Esqueci minha Senha"
            variant="secondary"
            top={4}
            action={forgotPassword}
          />
          <ButtomCreateUser onClick={createUser}>
            Novo por aqui? Cadastre-se
          </ButtomCreateUser>
        </Block>
      </form>
    </Container>
  );
}
