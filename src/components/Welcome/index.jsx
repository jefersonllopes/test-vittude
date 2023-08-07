import React from "react";
import { useMediaQuery } from "react-responsive";
import ButtonCustom from "../Button";
import {
  Block,
  Container,
  ContainerTexts,
  Subtitle,
  Text,
  Title,
} from "./styles";

export default function Welcome({ createUser, forgotPassword }) {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  return (
    <Container data-testid="content-welcome">
      <ContainerTexts isPortrait={isPortrait}>
        <Title>Terapia online</Title>
        <Subtitle>Seu psicólogo a qualquer hora, em qualquer lugar.</Subtitle>
        <Text>Vamos lá, por onde você quer começar?</Text>
      </ContainerTexts>
      <Block>
        <ButtonCustom
          label="Ativar meu benefício corporativo"
          top={22}
          type="submit"
        />
        <ButtonCustom
          label="Agendar consulta sem benefício"
          variant="secondary"
          top={4}
        />
      </Block>
    </Container>
  );
}
