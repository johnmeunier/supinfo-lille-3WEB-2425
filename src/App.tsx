import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from "@layouts/MainLayout"
import PokemonList from '@components/PokemonList'

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import PokemonInfo from '@components/PokemonInfos/PokemonInfos'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<PokemonList />}></Route>
              <Route path='/pokemon/:id' element={<PokemonInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
