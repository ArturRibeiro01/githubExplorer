
function RepositoryItem(props) {
  return (
    <>
    <li>
      <strong>{props.repository?.name ?? 'Repositório sem Nome'}</strong>
      <p>{props.repository?.description ?? 'Projeto sem Descrição'}</p>

      <a href={props.repository?.link ?? 'https://www.globo.com.br'} target="_blank">
        Acessar repositório no github
      </a>
    </li>

    </>
  )
}

export default RepositoryItem
