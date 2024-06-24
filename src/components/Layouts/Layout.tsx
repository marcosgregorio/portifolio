import { Container, FooterBar, List, ListFooter, ListOption, NavBar } from "./LayoutStyles";

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <Container>
      <NavBar>
        <List>
          <ListOption>
            <a href="">Projetos </a>
          </ListOption>
          <ListOption>
            <a href="">Experiencias </a>
          </ListOption>
          <ListOption>
            <a href="">Home </a>
          </ListOption>
        </List>
      </NavBar>
      {/* Childrens */}
      <FooterBar>
        <ListFooter>
          <ListOption><a href=""></a></ListOption>
          <ListOption><a href=""></a></ListOption>
          <ListOption><a href=""></a></ListOption>
        </ListFooter>
      </FooterBar>
    </Container>
  );
};
