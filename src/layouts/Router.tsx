import { Routes, Route } from 'react-router'
import MainLayout from "@layouts/MainLayout"
import PokemonList from '@components/PokemonList'
import PokemonInfo from '@components/PokemonInfos/PokemonInfos'

export const Router = () => {
  return <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<PokemonList />}></Route>
      <Route path='/pokemon/:id' element={<PokemonInfo />} />
    </Route>
  </Routes>
}