import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Container } from "./ProjectsStyles";
import axios from "axios";

type Repository = {
  icon: string;
  bodyText: string;
};
export const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchRepos = async () => {
      console.log("entrei no fetch repo");
      type Repo = {
        name: string;
      };
      const repoResponse = await axios.get(
        "https://api.github.com/users/marcosgregorio/repos"
      );
      const repos = repoResponse.data;

      const readmes = Promise.all(
        repos.map(async (repo: Repo) => {
          console.log("fazendo get no readme");
          const readmeResponse = await axios.get(
            `https://api.github.com/repos/marcosgregorio/${repo.name}/README.md`,
            { headers: { Accept: "application/vnd.github.v3.raw" } }
          );
          console.log(readmeResponse);
          return { name: repo.name, readme: readmeResponse.data };
        })
      );
    };
    fetchRepos();
  }, []);

  return (
    <Container>
      <div>
        {repos &&
          repos.map((repo) => (
            <Card icon={repo.icon} bodyText={repo.bodyText} />
          ))}
      </div>
    </Container>
  );
};
