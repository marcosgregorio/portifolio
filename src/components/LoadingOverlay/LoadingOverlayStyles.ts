import styled from "styled-components";
import { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {opacity: 1;}
  25% {opacity: 0.25;}
  50% {opacity: 0.5;}
  100% {opacity: 1;}
`;

export const LoadingOverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.5);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: 2em;
    animation: ${loadingAnimation} 2s infinite;
  }
`;
