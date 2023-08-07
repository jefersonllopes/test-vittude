import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;
export const ContentLeftSide = styled.div`
  width: 100%;
  justifyitems: center;
`;
export const ContentLeftSideItems = styled.div`
  width: ${(props) => (props.isPortrait ? "320px" : "430px")};
  display: inline-grid;
  padding-top: 10px;
  grid-template-columns: 5fr 1fr;
`;
export const ContentRightSide = styled.div`
  width: 100%;
  background-color: #f26b5b;
  padding-top: 10px;
`;
export const ContentRightSideBlock = styled.div`
  width: 451px;
  display: inline-block;
`;

export const ContentRightSideItems = styled.div`
  float: right;
  display: flex;
  width: 260px;
  justify-content: space-between;
`;
export const ContentRightSideOption = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  line-height: 19.2px;
  cursor: pointer;
`;
