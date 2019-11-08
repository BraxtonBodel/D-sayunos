import styled from 'styled-components';

export const NavigationElement = styled.li`
  display: inline-block;
  line-height: 80px;
`;

export const NavigationRedirect = styled.a`
  display: block;
  padding: 0 10px;
  text-decoration: none;
  & :hover{
    background: #0b76a6;
  }
`;