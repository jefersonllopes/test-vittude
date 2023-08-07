import styled from "styled-components";

export const ContainerInput = styled.div`
  width: ${(props) => (props.isPortrait ? "320px" : "450px")};
`;

export const Label = styled.p`
  float: left;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400px;
`;

export const Input = styled.input`
  width: ${(props) => (props.isPortrait ? "280px" : "410px")};
  height: 44px;
  border: 1px solid #e7eaf4;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #777c88;
  padding: 0px 20px 0px 20px;
  font-family: "Fira Sans", sans-serif;
`;

export const ShowPassword = styled.img`
  float: right;
  margin-top: -34px;
  width: 25px;
  margin-right: 10px;
  position: sticky;
  cursor: pointer;
`;
export const MessageError = styled.p`
  font-size: 13px;
  color: #e74c3c;
  display: flex;
`;
