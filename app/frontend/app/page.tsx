import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main>

      <Navbar/>

      <section className="hero">

        <h1>Organisez vos raids comme un pro</h1>

        <a href="/login" className="btn">
          Se connecter
        </a>

      </section>

      <section className="features">

        <div className="card">
          Calendrier
        </div>

        <div className="card">
          Guides
        </div>

        <div className="card">
          Escouade
        </div>

      </section>

    </main>
  )
}