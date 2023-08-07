import styled from "styled-components";
export const Button = styled.button`
  width: ${(props) => (props.isPortrait ? "320px" : "450px")};
  height: 56px;
  background-color: ${(props) => (props.isPrimary ? "#FF6952" : "#fff")};
  color: ${(props) => (props.isPrimary ? "#fff" : "#FF6952")};
  border-radius: 10px;
  border: ${(props) => (props.isPrimary ? "none" : "1px solid #FF6952")};
  margin-top: ${(props) => `${props.top}px`};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isPrimary ? "#e35f4a" : "#fff6f6")};
  }
  &:active {
    background-color: ${(props) => (props.isPrimary ? "#bf5f4a" : "#eee9e9")};
  }
  font-size: 16px;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
`;
