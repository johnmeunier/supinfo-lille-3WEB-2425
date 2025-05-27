import { Outlet } from "react-router"
import defaultClass from "./mainLayout.module.css";

function MainLayout() {
  return (
    <div className={defaultClass.layout}>
      <header className={defaultClass.header}>
        <h1 className={defaultClass.title}>Pokedex</h1>
      </header>
        <nav className={defaultClass.nav}>
            <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/add">Add Pokemon</a>
            </li>
            </ul>
        </nav>
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