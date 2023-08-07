import styled from "styled-components";

export const Container = styled.div`
  justify-items: center;
  width: 100%;
  margin-top: 240px;
`;
export const ContainerTitle = styled.div`
  display: inline-flex;
  width: ${(props) => (props.isPortrait ? "320px" : "450px")};
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 48px;
  line-height: 58.09px;
  text-align: left;
`;

export const Block = styled.div`
  display: grid;
  justify-content: center;
`;
export const ButtomCreateUser = styled.a`
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
  color: #f26b5b;
  cursor: pointer;
`;
