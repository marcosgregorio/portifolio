import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5em 20em;
  }
`;
