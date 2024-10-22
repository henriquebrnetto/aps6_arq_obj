import { useState } from 'react'
import { Button, Grid, MenuItem, Select, TextField } from '@mui/material';

function CadastrarUsuario() {

  const [nome, setNome] = useState();
  const [pais, setPais] = useState();
  const [anoFormacao, setAnoFormacao] = useState();
  const [idUsuario, setIdUsuario] = useState();

  function click() {

    const data = {
      'nome':  nome,
      'pais': pais,
      'anoFormacao': anoFormacao,
      'usuario': {
        'id': idUsuario
      }
    }

    console.log(data)

    fetch('http://localhost:8080/api/v1/usuario', {
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

    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          label='Nome: '
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='País: '
          value={pais}
          onChange={e => setPais(e.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label='Ano Formação: '
          value={anoFormacao}
          onChange={e => setAnoFormacao(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          label='Ano Formação: '
          value={idUsuario}
          onChange={e => setIdUsuario(e.target.value)}>
          <MenuItem value='id1'>Usuario 1</MenuItem>
          <MenuItem value='id2'>Usuario 2</MenuItem>
          <MenuItem value='id3'>Usuario 3</MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12}>
        <Button 
          onClick={() => click()}
          variant="contained"
          color="success"
        >Cadastrar</Button>
        </Grid>

      </Grid>
    </>
  )
}

export default CadastrarUsuario
