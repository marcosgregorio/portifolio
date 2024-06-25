import { Container } from "./CardStyles";

type CardProps = {
  icon: string;
  bodyText: string;
};
export const Card: React.FC<CardProps> = ({ icon, bodyText }) => {
  return (
    <Container>
      <img src={icon} />
      <p>{bodyText}</p>
    </Container>
  );
};
