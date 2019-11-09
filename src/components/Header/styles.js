import styled, {keyframes} from "styled-components";
import BannerImg from '../../assets/bowl.jpg';


export const Main = styled.div `
  text-align: center;
  text-transform: uppercase;
  scroll-snap-type: y mandatory;
  position: relative;
  height: 400px;
`;

export const Hover = styled.div`
  cursor: pointer
`;

export const Concept = styled.div`
  background: rgb(255, 213, 175)
  top center / cover;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  height: 100%;
  & :hover{
    transition: 0.6s ease;
    padding: 10px;
		animation:  0.6s ease forwards;
  }
`;

export const ConceptName = styled.h1`
  color: gray;
  font-weight: bold;
  padding: 0 10px;
  & :before{
    content: "Dsayunos";
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    max-width: 400px;
    color: transparent;
    letter-spacing: 10px;
    text-shadow: none;
    transition: 0.6s ease;
		color: rgba(255, 255, 255, 0.8);
		animation: jump-out 0.6s ease forwards;
  }
`;

export const Head = styled.header`
  background: rgb(89, 104, 134);
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

export const OurList = styled.ul``;

export const OurElement = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 20px
`;
