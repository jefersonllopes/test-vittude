import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InputCustom from "../Input";
import ButtonCustom from "../Button";
import { Block, Container, ContainerTitle, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormForgotPasswordSchema } from "../../core/schemas";
import { forgotPassword } from "../../core/services/forgotPassword";

export default function ForgotPassword({ goBack }) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormForgotPasswordSchema) });
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState({ code: "", message: "" });
  const onSubmitHandler = (data) => {
    const resForgotPassword = forgotPassword(data.email);
    if (resForgotPassword.code === 200) {
      setPassword(resForgotPassword.message);
      setError(false);
    } else {
      setError(true);
      setMessageError(resForgotPassword);
    }
    console.log({ data });
  };
  return (
    <Container data-testid="content-forgot-password">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ContainerTitle isPortrait={isPortrait}>
          <Title>Esqueci minha senha</Title>
        </ContainerTitle>
        <Block>
          <InputCustom
            label="Login"
            name={"email"}
            placeholder="email@exemplo.com"
            register={register}
            error={errors.email?.message || (error && messageError.message)}
          />
          {password && (
            <InputCustom
              disabled
              label="Senha"
              register={register}
              name={"password"}
              value={password}
            />
          )}
        </Block>
        <Block>
          <ButtonCustom label="Recuperar" top={22} />
          <ButtonCustom
            label="Voltar"
            variant="secondary"
            top={4}
            action={goBack}
          />
        </Block>
      </form>
    </Container>
  );
}
