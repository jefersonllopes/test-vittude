import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import InputCustom from "../Input";
import ButtonCustom from "../Button";
import { Block, Container, ContainerTitle, Title } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../core/schemas";
import { createUser } from "../../core/services/createUser";

export default function CreateUser({ goBack }) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState({ code: "", message: "" });
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(FormSchema) });
  const onSubmitHandler = (data) => {
    setLoading(true);
    setTimeout(() => {
      const responseCreateUser = createUser(data.email, data.password);
      if (responseCreateUser.code === 200) {
        reset();
      } else {
        setError(true);
        setMessageError(responseCreateUser);
      }
      setLoading(false);
    }, 2000);
  };
  return (
    <Container data-testid="content-create-user">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <ContainerTitle isPortrait={isPortrait}>
          <Title>Cadastre-se</Title>
        </ContainerTitle>
        <Block>
          <InputCustom
            label="Login"
            name={"email"}
            setError={() => {
              setError(false);
            }}
            placeholder="email@exemplo.com"
            register={register}
            error={errors.email?.message || (error && messageError.message)}
          />
          <InputCustom
            label="Senha"
            name={"password"}
            placeholder="······"
            type="password"
            register={register}
            error={errors.password?.message}
          />
        </Block>
        <Block>
          <ButtonCustom label="Cadastrar" top={22} loading={loading} />
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
