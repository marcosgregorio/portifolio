import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
    grid-template-areas:
    "AS AS"
    "AS CT"; */
  height: 100vh;
  background-color: #011;
`;

export const NavBar = styled.nav`
  width: 40%;
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
  width: 40%;
  position: fixed;
  bottom: 0;
`;

export const ListFooter = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1em;

  overflow: hidden;

  background-color: #333;

  display: flex;
  justify-content: space-around;

  border-radius: 0px 25px 0px 0px;
`;

export const MenuLink = styled(Link)``;
