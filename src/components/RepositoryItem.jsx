import '../styles/repositories.scss'
function RepositoryItem(props) {
  return (
    <>
    <li>
      <h2>{props.repos?.name ?? 'Repositório sem Nome'}</h2>
      <p>{props.repos?.description ?? 'Projeto sem Descrição'}</p>

      <a href={props.repos?.html_url ?? 'Esse link foi perfido'} target="_blank">
       Acessar repositório no github
      </a>
    </li>

    </>
  )
}

export default RepositoryItem
