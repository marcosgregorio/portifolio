import { Container, Section, SectionAboutMe, TextBox } from "./HomeStyles";

export const Home: React.FC = () => {
  return (
    <Container>
      <SectionAboutMe>
        <img src="" alt="Homem mais lindo do universo" />
        <TextBox>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            placeat, eveniet dolores eaque laborum consequatur ducimus vel odit
            sequi ullam quibusdam obcaecati incidunt ut atque quae dignissimos?
            Voluptatibus, pariatur error. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officia placeat, eveniet dolores eaque laborum
            consequatur ducimus vel odit sequi ullam quibusdam obcaecati
            incidunt ut atque quae dignissimos? Voluptatibus, pariatur error.
          </p>
        </TextBox>
      </SectionAboutMe>
    </Container>
  );
};
