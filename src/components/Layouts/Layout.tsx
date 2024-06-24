import React from "react";
import { Container, FooterBar, List, ListFooter, ListOption, MenuLink, NavBar } from "./LayoutStyles";
import gmailLogo from "../../assets/gmail-logo.png"
import githubLogo from "../../assets/github-sign.png"
import linkedinLogo from "../../assets/social.png"

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
          <ListOption><a href=""> <img src={githubLogo}/> </a></ListOption>
          <ListOption><a href=""> <img src={gmailLogo}/> </a></ListOption>
          <ListOption><a href=""> <img src={linkedinLogo}/> </a></ListOption>
        </ListFooter>
      </FooterBar>
    </Container>
  );
};
