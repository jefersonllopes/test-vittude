import React from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as AnalyticsPerson } from "../../images/analyticsPerson.svg";
import { Container } from "./styles";
export default function MainRightSide() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    !isPortrait && (
      <Container>
        <AnalyticsPerson
          style={{ marginTop: 327, width: isTabletOrMobile ? 400 : "100%" }}
        />
      </Container>
    )
  );
}
