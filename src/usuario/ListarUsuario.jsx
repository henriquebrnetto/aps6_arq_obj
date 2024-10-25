import { useEffect, useState } from 'react'

function ListarUsuario() {

  const [lista, setLista] = useState([])

  useEffect(() => {
    load()
  }, [])

  function load() {

    fetch('http://localhost:8080/usuario', {
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

      <IconButton>
        <Link to='/'><HomeIcon /></Link>
      </IconButton>
      
      <br/>
      <table>
        <tr>
          <td>Nome</td>
          <td>Endereço</td>
          <td>E-mail</td>
          <td>Biblioteca</td>
        </tr>
        {lista.map((usuario, index) => {

          return <tr>
            <td>{usuario.nome}</td>
            <td>{usuario.endereco}</td>
            <td>{usuario.email}</td>
            <td>{usuario.biblioteca}</td>
          </tr>

        })}

      </table>

      
    </>
  )
}

export default ListarUsuario
