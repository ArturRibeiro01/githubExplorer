
function RepositoryItem(props) {
  return (
    <>
    <li>
      <strong>{props.repos?.name ?? 'Repositório sem Nome'}</strong>
      <p>{props.repos?.description ?? 'Projeto sem Descrição'}</p>

      <a href={props.repos?.html_url ?? 'Esse link foi perfido'} target="_blank">
        Acessar repositório no github
      </a>
    </li>

    </>
  )
}

export default RepositoryItem
