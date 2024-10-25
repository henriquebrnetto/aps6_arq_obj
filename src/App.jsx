import { useState } from 'react'
import './App.css'
import CadastrarBiblioteca from './biblioteca/CadastrarBiblioteca'
import ListarBiblioteca from './biblioteca/ListarBiblioteca'
import ListarUsuario from './usuario/ListarUsuario'
import CadastrarUsuario from './usuario/CadastrarUsuario'
import { Link, Route, Routes } from 'react-router-dom'
import {List, ListItem, IconButton} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'


function App() {

  return (
    <>

      <IconButton>
        <Link to='/'><HomeIcon /></Link>
      </IconButton>
      
      Bem-vindo ao Biblioteca Manager

      <List>
        <ListItem><Link to='/cadastrarBiblioteca'>Cadastrar Biblioteca</Link></ListItem> 
        <ListItem><Link to='/listarBiblioteca'>Listar Biblioteca</Link></ListItem>
        <ListItem><Link to='/cadastrarUsuario'>Cadastrar Usuário</Link> </ListItem>
        <ListItem><Link to='/listarUsuario'>Listar Usuário</Link></ListItem>
      </List>

      <Routes>
        <Route path='/cadastrarBiblioteca' element={<CadastrarBiblioteca />}></Route> 
        <Route path='/listarBiblioteca' element={<ListarBiblioteca />}></Route>
        <Route path='/cadastrarUsuario' element={<CadastrarUsuario />}></Route> 
        <Route path='/listarUsuario' element={<ListarUsuario />}></Route>
      </Routes>
      
    </>
  )
}

export default App
