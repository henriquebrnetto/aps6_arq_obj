import { useEffect, useState } from 'react'

function ListarBiblioteca() {

  const [lista, setLista] = useState([])

  useEffect(() => {
    load()
  }, [])

  function load() {

    fetch('http://localhost:8080/api/v1/biblioteca', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(data => {
      setLista(data.content)
    }).catch(response => {
      alert('Erro no cadastro da biblioteca')
    })

  }

  return (
    <>
      <br/>
      <table>
        <tr>
          <td>Nome</td>
          <td>País</td>
          <td>Ano Formação</td>
        </tr>
        {lista.map((biblioteca, index) => {

          return <tr>
            <td>{biblioteca.nome}</td>
            <td>{biblioteca.pais}</td>
            <td>{biblioteca.anoFormacao}</td>
          </tr>

        })}

      </table>

      
    </>
  )
}

export default ListarBiblioteca
