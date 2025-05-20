import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from "@layouts/MainLayout"

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<div>Home page</div>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
