import styled from "styled-components";

export const Container = styled.div`
  background-color: #f26b5b;
  height: 100%;
  width: ${(props) => (props.open ? "210px" : "0px")};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 6px;
`;

export const ButtonBackMenu = styled.img`
  margin-bottom: 30px;
  margin-left: 10px;
  width: 35px;
  display: block;
  padding: "8px 8px 8px 32px";
`;

export const ButtonMenu = styled.img`
  width: 35px;
  margin-left: 15px;
`;
export const OptionsMenu = styled.a`
  margin-top: 30px;
  text-decoration: none;
  display: block;
  transition: 0.3s;
  color: #ffffff;
  font-size: 16px;
  line-height: 19.2px;
  cursor: pointer;
`;
