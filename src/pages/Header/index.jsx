import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Social } from "../../images/social.svg";
import SideMenu from "../../components/SideMenu";
import { useMediaQuery } from "react-responsive";
import {
  Container,
  ContentLeftSide,
  ContentLeftSideItems,
  ContentRightSide,
  ContentRightSideBlock,
  ContentRightSideItems,
  ContentRightSideOption,
} from "./styles";
export default function Header() {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <Container>
      <ContentLeftSide>
        <ContentLeftSideItems
          isPortrait={isPortrait}
          data-testid="content-left-side-items"
        >
          <Logo />
          {isPortrait && <SideMenu />}
        </ContentLeftSideItems>
      </ContentLeftSide>
      {!isPortrait && (
        <ContentRightSide>
          <ContentRightSideBlock>
            <ContentRightSideItems data-testid="content-right-side-items">
              <ContentRightSideOption
                href="/"
                data-testid="text-content-right-side-one"
              >
                Site Institucional
              </ContentRightSideOption>
              <ContentRightSideOption
                href="/"
                data-testid="text-content-right-side-two"
              >
                Blog
              </ContentRightSideOption>
              <ContentRightSideOption href="/">
                <Social />
              </ContentRightSideOption>
            </ContentRightSideItems>
          </ContentRightSideBlock>
        </ContentRightSide>
      )}
    </Container>
  );
}
