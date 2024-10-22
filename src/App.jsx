import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CadastrarBanda from './banda/CadastrarBanda'
import ListarBanda from './banda/ListarBanda'
import { Link, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>

      <div>
        <Link to='/cadastrarBanda'>Cadastrar Banda</Link> 
        <Link to='/listarBanda'>Listar Banda</Link>
      </div>

      <Routes>
        <Route path='/cadastrarBanda' element={<CadastrarBanda />}></Route>
        <Route path='/listarBanda' element={<ListarBanda />}></Route>
      </Routes>

      teste
      
    </>
  )
}

export default App
