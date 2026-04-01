import Navbar from "../components/navbar"

export default function Profile() {

  const user = {
    pseudo: "F0st3r",
    bio: "Wake up to reality",
    classes: [
      {name: "Chasseur", level: 500},
      {name: "Titan", level: 500},
      {name: "Arcaniste", level: 500}
    ]
  }

  return (

    <main>

      <Navbar/>

      <section className="profile">

        <h2>{user.pseudo}</h2>
        <p>{user.bio}</p>

        {user.classes.map((c) => (

          <div key={c.name} className="class">

            {c.name}
            <span>{c.level}</span>

          </div>

        ))}

      </section>

    </main>
  )
}