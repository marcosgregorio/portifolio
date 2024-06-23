import { Container, List, ListOption, NavBar } from "./LayoutStyles";

type LayoutProps = {};

export const Layout: React.FC<LayoutProps> = () => {
  return (
    <Container>
      <NavBar>
        <List>
          <ListOption><a href="">Projetos </a></ListOption>
          <ListOption><a href="">Experiencias </a></ListOption>
          <ListOption><a href="">Home </a></ListOption>
        </List>
      </NavBar>
      aaaaa
    </Container>
  );
};
