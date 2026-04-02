import Navbar from "../components/navbar"

export default function Profile() {

  const user = {
    pseudo: "F0st3r",
    bio: "Wake up to reality",
    classes: [
      { name: "Chasseur", level: 500, color: "bg-blue-400" },
      { name: "Titan", level: 500, color: "bg-red-500" },
      { name: "Arcaniste", level: 500, color: "bg-yellow-400 text-black" }
    ]
  }

  return (

    <main className="min-h-screen bg-[#243b6b] text-white">

      <Navbar/>

      <section className="max-w-3xl mx-auto mt-16">

        {/* PROFIL */}

        <div className="bg-[#1c2f57] p-8 rounded-xl flex items-center gap-6 shadow-lg">

          <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center">
            🎮
          </div>

          <div>

            <h2 className="text-2xl font-bold">
              {user.pseudo}
            </h2>

            <p className="text-gray-300">
              {user.bio}
            </p>

          </div>

        </div>

        {/* CLASSES */}

        <div className="mt-10 space-y-4">

          {user.classes.map((c) => (

            <div
              key={c.name}
              className={`flex justify-between p-5 rounded-lg font-semibold ${c.color}`}
            >

              {c.name}

              <span>
                {c.level}
              </span>

            </div>

          ))}

        </div>

      </section>

    </main>
  )
}