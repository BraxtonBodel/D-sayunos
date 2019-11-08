import styled from "styled-components";
import Banner from "../../assets/banner.jpg";

export const Head = styled.header`
  background: #b38867;
  color: #cdcdc0;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  float: left;
`;

export const Navigator = styled.nav`
  float: right;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-right: 20px;
`;
