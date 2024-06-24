import React from "react";
import { Container, FooterBar, List, ListFooter, ListOption, MenuLink, NavBar } from "./LayoutStyles";

type LayoutProps = {
  children: React.ReactNode
};

export const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Container>
      <NavBar>
        <List>
          <ListOption>
            <MenuLink to="/projects">Projetos </MenuLink>
          </ListOption>
          <ListOption>
            <MenuLink to="/experience">Experiencias </MenuLink>
          </ListOption>
          <ListOption>
            <MenuLink to="/">Home </MenuLink>
          </ListOption>
        </List>
      </NavBar>
      {children}
      <FooterBar>
        <ListFooter>
          <ListOption><MenuLink to=""></MenuLink></ListOption>
          <ListOption><MenuLink to=""></MenuLink></ListOption>
          <ListOption><MenuLink to=""></MenuLink></ListOption>
        </ListFooter>
      </FooterBar>
    </Container>
  );
};
