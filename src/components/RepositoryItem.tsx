import "../styles/repositories.scss";

interface RepositoryItemProps {
  repos: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  };
}

function RepositoryItem(props: RepositoryItemProps) {
  return (
    <>
      <li>
        <small>ID: {props.repos.id ?? "Repo sem nome"}</small>
        <h2>{props.repos?.name ?? "Repositório sem Nome"}</h2>
        <p>{props.repos?.description ?? "Projeto sem Descrição"}</p>

        <a
          href={props.repos?.html_url ?? "Esse link foi perfido"}
          target="_blank"
        >
          Acessar
        </a>
      </li>
    </>
  );
}

export default RepositoryItem;
