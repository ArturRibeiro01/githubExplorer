import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

interface repos {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  // Armazena listagem de repositórios
  const [repos, setRepos] = useState<repos[]>([]);

  useEffect(() => {
    // faz o fetch com a API
    fetch("https://api.github.com/users/ArturRibeiro01/repos")
      // Recebe os dados e transforma em Json
      .then((response) => response.json())

      //  pega os dados transpomados em json e manda para o State repos
      .then((data) => setRepos(data));
  }, []);
  // Os [] servem para dizer quando o efeito deve ser aplicado, se deixar em branco, será aplicado quando a pagina for carregada.

  return (
    <>
      <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
          {repos.map((repos) => (
            <RepositoryItem repos={repos} key={repos.id} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default RepositoryList;
