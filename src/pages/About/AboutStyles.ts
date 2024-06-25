import styled from "styled-components";
import backgroundImage from "../../assets/universo_e_tudo_mais.jpeg";

export const Container = styled.div`
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1em;
`;
export const SectionAboutMe = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Section = styled.section`
  /* height: 80vh; */
`;

export const TextBox = styled.div`
  width: 50%;
  height: 60vh;
  > h2 {
    text-align: center;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 5em;
  }
  #foto {
    width: 13em;
    height: 13em;
  }
  padding: 2em;
  border-radius: 15px;
  color: black;
  background-color: #ffff;

  box-shadow: 1px 1px 5px 4px #333;
`;

export const TextBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`
