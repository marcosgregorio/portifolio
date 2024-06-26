import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-template-areas:
    "HE HE"
    "FO FO"; */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #011;
`;

const loadingAnimation = keyframes`
  0% {opacity: 1;}
  25% {opacity: 0.25;}
  50% {opacity: 0.5;}
  100% {opacity: 1;}
`;

export const LoadingOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.5);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: 2em;
    animation: ${loadingAnimation} 2s infinite;
  }
`;

export const ContainerNavBar = styled.div`
  width: 100%;
  height: 2em;
`;

export const NavBar = styled.nav`
  width: 40%;
  position: fixed;
`;

export const ChildrenContainer = styled.main`
  margin: 2em;
`;

export const List = styled.ul`
  list-style-type: none;

  margin: 0;
  padding: 1em;

  overflow: hidden;

  background-color: #333;

  display: flex;
  justify-content: space-around;

  border-radius: 0px 0px 25px 0px;
`;

export const BackgroundImage = styled.img``;

export const ListOption = styled.li`
  > a {
    transition: all 0.3s;
    &:hover {
      background-color: #444;
    }
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    padding: 1em;
  }
`;

export const ListOptionFooter = styled.li`
  > a {
    transition: all 0.3s;
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
    padding: 1em;
  }
`;

export const SocialMediaLogo = styled.img`
  transition: all 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
  width: 2em;
  height: 2em;
  align-items: center;
`;

export const FooterBar = styled.nav`
  width: 30%;
  position: fixed;
  bottom: 0;
`;

export const ListFooter = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0.5em;

  overflow: hidden;

  background-color: #333;

  display: flex;
  justify-content: space-around;

  border-radius: 0px 25px 0px 0px;
`;

export const MenuLink = styled(Link)``;
