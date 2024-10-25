import { useState } from 'react'
import { Button, Grid2, MenuItem, Select, TextField } from '@mui/material';

function CadastrarBiblioteca() {

  const [nome, setNome] = useState();
  const [endereco, setEndereco] = useState();

  function click() {

    const data = {
      'nome':  nome,
      'endereco': endereco
    }

    console.log(data)

    fetch('http://localhost:8080/biblioteca', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      alert('Biblioteca cadastrada com sucesso')
    }).catch(response => {
      alert('Erro no cadastro da biblioteca')
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

export default CadastrarBiblioteca
