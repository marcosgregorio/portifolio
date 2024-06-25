import { Container, Section, SectionAboutMe, TextBox } from "./AboutStyles";
import homemLindo from "../../assets/foto homem mais lindo do mundo(1).png"

export const About: React.FC = () => {
  return (
    <Container>
      <SectionAboutMe>
        <img src={homemLindo} alt="Homem mais lindo do universo" />
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
