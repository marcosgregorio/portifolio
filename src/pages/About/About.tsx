import { Container, SectionAboutMe, TextAboutMe, TextBox, TextBoxContainer } from "./AboutStyles";
import homemLindo from "../../assets/foto homem mais lindo do mundo(1).png";

export const About: React.FC = () => {
  return (
    <Container>
      <SectionAboutMe>
        <TextBox>
          <h2>Sobre mim</h2>
          <TextBoxContainer>
            <div>
              <img id="foto" src={homemLindo} alt="Homem mais lindo do universo" />
            </div>
            <TextAboutMe>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                placeat, eveniet dolores eaque laborum consequatur ducimus vel
                odit sequi ullam quibusdam obcaecati incidunt ut atque quae
                dignissimos? Voluptatibus, pariatur error. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officia placeat, eveniet
                dolores eaque laborum consequatur ducimus vel odit sequi ullam
                quibusdam obcaecati incidunt ut atque quae dignissimos?
                Voluptatibus, pariatur error.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                placeat, eveniet dolores eaque laborum consequatur ducimus vel
                odit sequi ullam quibusdam obcaecati incidunt ut atque quae
                dignissimos? Voluptatibus, pariatur error. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Officia placeat, eveniet
                dolores eaque laborum consequatur ducimus vel odit sequi ullam
                quibusdam obcaecati incidunt ut atque quae dignissimos?
                Voluptatibus, pariatur error.
              </p>
            </TextAboutMe>
          </TextBoxContainer>
        </TextBox>
      </SectionAboutMe>
    </Container>
  );
};
