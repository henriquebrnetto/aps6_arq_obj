import { useState } from 'react'
import { Button, Grid2, MenuItem, Select, TextField } from '@mui/material';

function CadastrarUsuario() {

  const [nome, setNome] = useState();
  const [endereco, setEndereco] = useState();
  const [email, setEmail] = useState();
  const [biblioteca, setBiblioteca] = useState();

  function click() {

    const data = {
      'nome':  nome,
      'endereco': endereco,
      'email': email,
      'biblioteca': biblioteca
    }

    console.log(data)

    fetch('http://localhost:8080/usuario', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      alert('Usuario cadastrada com sucesso')
    }).catch(response => {
      alert('Erro no cadastro da usuario')
    })

  }

  return (
    <>

      <IconButton>
        <Link to='/'><HomeIcon /></Link>
      </IconButton>
    <Grid2 container spacing={2}>
      <Grid2 item xs={6}>
        <TextField
          label='Nome: '
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </Grid2>
      <Grid2 item xs={6}>
        <TextField
          label='Endereço: '
          value={endereco}
          onChange={e => setEndereco(e.target.value)}
        />
      </Grid2>
      <Grid2 item xs={6}>
        <TextField
          label='Email: '
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Grid2>
      <Grid2 item xs={12}>
        <Select
          label='Biblioteca: '
          value={biblioteca}
          onChange={e => setBiblioteca(e.target.value)}>
          <MenuItem value='b1'>Biblioteca 1</MenuItem>
        </Select>
      </Grid2>
      <Grid2 item xs={12}>
        <Button 
          onClick={() => click()}
          variant="contained"
          color="success"
        >Cadastrar</Button>
        </Grid2>

      </Grid2>
    </>
  )
}

export default CadastrarUsuario
