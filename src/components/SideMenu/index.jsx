import React, { useState } from "react";
import menu from "../../images/menu.png";
import goBack from "../../images/goBack.png";
import { ReactComponent as Social } from "../../images/social.svg";
import { ButtonBackMenu, ButtonMenu, Container, OptionsMenu } from "./styles";
export default function SideMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container open={open} data-testid="content-side-menu">
        <ButtonBackMenu
          onClick={() => {
            setOpen(false);
          }}
          src={goBack}
          alt="menu"
        />

        <OptionsMenu>Site Institucional</OptionsMenu>
        <OptionsMenu>Blog</OptionsMenu>
        <OptionsMenu>
          <Social />
        </OptionsMenu>
      </Container>
      <ButtonMenu
        src={menu}
        onClick={() => {
          setOpen(true);
        }}
        alt="menu"
      />
    </>
  );
}
