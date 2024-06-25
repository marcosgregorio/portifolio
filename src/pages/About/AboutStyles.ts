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
  justify-content: space-evenly;

  height: 80vh;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  > img {
    width: 10%;
    height: 25%;
    border-radius: 100px;
    border: 1px solid #444;
  }
`;

export const Section = styled.section`
    /* height: 80vh; */
`;

export const TextBox = styled.div`

  color: black;
  background-color: #ffff;

  > p {
    text-align: center;
  }
`;
