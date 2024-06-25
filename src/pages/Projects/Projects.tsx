import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { Container } from "./ProjectsStyles";

export const Projects: React.FC = () => {
  // const [projects, setProjects] = useState()
  const projects = {
    icon: "",
    bodyText:
      "lorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsum lorem ipsum lorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsum lorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsum lorem ipsum lorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsum lorem ipsummlorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsum lorem ipsum lorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsulorem ipsum lorem ipsum",
  };

  return (
    <Container>
      <div>
        <Card icon="" bodyText={projects.bodyText} />
        <Card icon="" bodyText={projects.bodyText} />
        <Card icon="" bodyText={projects.bodyText} />
        <Card icon="" bodyText={projects.bodyText} />
        <Card icon="" bodyText={projects.bodyText} />
        <Card icon="" bodyText={projects.bodyText} />
        <Card icon="" bodyText={projects.bodyText} />
      </div>
    </Container>
  );
};
