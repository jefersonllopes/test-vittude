import styled from "styled-components";

export const Container = styled.div`
  justify-items: center;
  width: 100%;
  margin-top: 240px;
`;
export const ContainerTexts = styled.div`
  display: inline-block;
  width: ${(props) => (props.isPortrait ? "320px" : "450px")};
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #7f8c8d;
  text-align: left;
`;
export const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 600;
  color: #e56048;
  text-align: left;
  padding-bottom: 20px;
  border-bottom: 1px solid #cdd5d5;
`;
export const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #7f8c8d;
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
