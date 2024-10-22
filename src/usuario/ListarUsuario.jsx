import { useEffect, useState } from 'react'

function ListarUsuario() {

  const [lista, setLista] = useState([])

  useEffect(() => {
    load()
  }, [])

  function load() {

    fetch('http://localhost:8080/api/v1/usuario', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(data => {
      setLista(data.content)
    }).catch(response => {
      alert('Erro no cadastro da usuario')
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
        {lista.map((usuario, index) => {

          return <tr>
            <td>{usuario.nome}</td>
            <td>{usuario.pais}</td>
            <td>{usuario.anoFormacao}</td>
          </tr>

        })}

      </table>

      
    </>
  )
}

export default ListarUsuario
