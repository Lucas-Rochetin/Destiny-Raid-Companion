import Navbar from "./components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#243b6b] text-white">

      <Navbar/>

      <section
        className="h-[600px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >

        <div className="bg-black/50 p-10 rounded-xl">

          <h1 className="text-5xl font-bold mb-6">
            Organisez vos raids et donjon
          </h1>

          <p className="mb-6 text-lg">
            Trouvez une escouade, planifiez vos raids et consultez les guides.
          </p>

          <div className="flex gap-4 justify-center">

            <a
              href="/login"
              className="bg-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
            >
              Se connecter
            </a>

            <a
              href="#"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300"
            >
              S'inscrire
            </a>

          </div>

        </div>

      </section>


      <section className="py-20 bg-[#1c2f57]">

        <h2 className="text-center text-3xl font-bold mb-12">
          Présentation
        </h2>

        <div className="flex justify-center gap-8 flex-wrap">

          <div className="bg-[#243b6b] p-6 rounded-xl w-64 text-center shadow-lg hover:scale-105 transition">

            <h3 className="text-xl font-bold mb-2">📅 Calendrier</h3>

            <p className="text-sm">
              Planifie tes raids hebdomadaires
            </p>

          </div>

          <div className="bg-[#243b6b] p-6 rounded-xl w-64 text-center shadow-lg hover:scale-105 transition">

            <h3 className="text-xl font-bold mb-2">📖 Guides</h3>

            <p className="text-sm">
              Découvre les stratégies des raids
            </p>

          </div>

          <div className="bg-[#243b6b] p-6 rounded-xl w-64 text-center shadow-lg hover:scale-105 transition">

            <h3 className="text-xl font-bold mb-2">👥 Escouade</h3>

            <p className="text-sm">
              Trouve des coéquipiers
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}