import React, { useState } from "react";
import {
  ChildrenContainer,
  Container,
  ContainerNavBar,
  FooterBar,
  List,
  ListFooter,
  ListOption,
  ListOptionFooter,
  LoadingOverlay,
  MenuLink,
  NavBar,
  SocialMediaLogo,
} from "./LayoutStyles";
import gmailLogo from "../../assets/gmail-logo.png";
import githubLogo from "../../assets/github-sign.png";
import linkedinLogo from "../../assets/social.png";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState<Boolean>(true);
  return (
    <Container>
      {loading && (
        <LoadingOverlay>
          <div>Loading...</div>
        </LoadingOverlay>
      )}
      <ContainerNavBar>
        <NavBar>
          <List>
            <ListOption>
              <MenuLink to="/projects">Projetos </MenuLink>
            </ListOption>
            <ListOption>
              <MenuLink to="/experience">Experiencias </MenuLink>
            </ListOption>
            <ListOption>
              <MenuLink to="/about">Sobre mim</MenuLink>
            </ListOption>
            <ListOption>
              <MenuLink to="/">Home </MenuLink>
            </ListOption>
          </List>
        </NavBar>
      </ContainerNavBar>
      <ChildrenContainer>{children}</ChildrenContainer>
      <ContainerNavBar>
        <FooterBar>
          <ListFooter>
            <ListOptionFooter>
              <a href="https://github.com/marcosgregorio" target="_blank">
                <SocialMediaLogo src={githubLogo} />
              </a>
            </ListOptionFooter>
            <ListOptionFooter>
              <a href="">
                <SocialMediaLogo src={gmailLogo} />{" "}
              </a>
            </ListOptionFooter>
            <ListOptionFooter>
              <a href="">
                <SocialMediaLogo src={linkedinLogo} />{" "}
              </a>
            </ListOptionFooter>
          </ListFooter>
        </FooterBar>
      </ContainerNavBar>
    </Container>
  );
};
