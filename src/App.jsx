import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CadastrarBiblioteca from './biblioteca/CadastrarBiblioteca'
import ListarBiblioteca from './biblioteca/ListarBiblioteca'
import { Link, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>

      <div>
        <Link to='/cadastrarBiblioteca'>Cadastrar Biblioteca</Link> 
        <Link to='/listarBiblioteca'>Listar Biblioteca</Link>
        <Link to='/deletarBiblioteca'>Deletar Biblioteca</Link>
        <Link to='/cadastrarUsuario'>Cadastrar Usuário</Link> 
        <Link to='/listarUsuario'>Listar Usuário</Link>
        <Link to='/deletarUsuario'>Deletar Usuário</Link>
      </div>

      <Routes>
        <Route path='/cadastrarBiblioteca' element={<CadastrarBiblioteca />}>Cadastrar Biblioteca</Route> 
        <Route path='/listarBiblioteca' element={<ListarBiblioteca />}>Listar Biblioteca</Route>
        <Route path='/deletarBiblioteca' element={<DeletarBiblioteca />}>Deletar Biblioteca</Route>
        <Route path='/cadastrarUsuario' element={<CadastrarUsuario />}>Cadastrar Usuário</Route> 
        <Route path='/listarUsuario' element={<ListarUsuario />}>Listar Usuário</Route>
        <Route path='/deletarUsuario' element={<DeletarUsuario />}>Deletar Usuário</Route>
      </Routes>

      teste
      
    </>
  )
}

export default App
