import styled from "styled-components";
import Banner from "../../assets/banner.jpg";

export const Head = styled.header`
  background: #333;
  color: white;
  height: 80px;
`;

export const AnchorHeader = styled.a`
  float: left;
  padding: 15px 0 0 20px;
  color: white
  text-decoration: none;
  & :hover{
    color: #0b76a6;
  }
`;

export const SiteName = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.2em;
`;

export const SiteDesc = styled.span`
  display: block;
  font-weight: 300;
  font-size: 0.8em;
  color: #999;
`;

export const Navigator = styled.nav`
  float: right;
`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-right: 20px;
`;

export const NavigationElement = styled.li`
  display: inline-block;
  line-height: 80px;
`;

export const NavigationLink = styled.a`
  display: block;
  padding: 0 10px;
  text-decoration: none;
  & :hover{
    background: #0b76a6;
  }
`;
