import RepositoryItem from "./RepositoryItem";


const repository = {
  name:'Batata',
  description:'Forms in React',
  link: 'htttp://github.com/qualquer coisa',
  subtitle:'E eu sou o Subtitle',
}


function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}

export default RepositoryList;
