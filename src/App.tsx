import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from "@layouts/MainLayout"
import PokemonList from '@components/PokemonList'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<PokemonList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
