import Navbar from "../components/navbar"

export default function Login() {
  return (

    <main>

      <Navbar/>

      <div className="loginBox">

        <h2>Se connecter</h2>

        <input placeholder="Identifiant"/>

        <input type="password" placeholder="Mot de passe"/>

        <button>
          Se connecter
        </button>

      </div>

    </main>
  )
}