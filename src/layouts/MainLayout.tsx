import { Outlet } from "react-router"
import defaultClass from "./MainLayout.module.css";

function MainLayout() {
  return (
    <div className={defaultClass.layout}>
      <header className={defaultClass.header}>
        <h1 className={defaultClass.title}>Pokedex</h1>
      </header>
      <main className={defaultClass.container}>
        <Outlet></Outlet>
      </main>
      <footer className={defaultClass.footer}>
        <p>Supinfo</p>
      </footer>
    </div>
  )
}

export default MainLayout