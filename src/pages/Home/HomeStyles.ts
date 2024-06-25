import styled from "styled-components";
import backgroundImage from "../../assets/universo_e_tudo_mais.jpeg";

export const Container = styled.div`
  color: white;


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
`;

export const Section = styled.section`
    /* height: 80vh; */
`;

export const TextBox = styled.div`
  width: 30%;
  padding: 1em;

  color: black;
  background-color: #ffff;

  > p {
    text-align: center;
  }

  border-radius: 50px;
  box-shadow: 1px 1px 5px 4px #333;
`;
