import { Outlet } from "react-router"

function MainLayout() {
  return (
    <>
    <header>
      <h1>Pokedex</h1>
    </header>
      <Outlet></Outlet>
    <footer>
      <p>Supinfo</p>
    </footer>
    </>
  )
}

export default MainLayout