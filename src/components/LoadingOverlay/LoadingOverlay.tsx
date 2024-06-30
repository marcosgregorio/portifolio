import { LoadingOverlayContainer } from "./LoadingOverlayStyles";

type LoadingOverlayProps = {};

export const LoadingOverlay: React.FC<LoadingOverlayProps> = () => (
  <LoadingOverlayContainer>
    <div>Loading...</div>
  </LoadingOverlayContainer>
);
