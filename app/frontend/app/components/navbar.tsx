import Link from "next/link"

export default function Navbar() {
  return (

    <header className="w-full bg-[#1c2f57] shadow-md">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <div className="flex items-center gap-2">

          <img 
            src=".../assets/logo_drc.png"  // Remplace par ton chemin réel
            alt="Logo"
            className="w-8 h-8 rounded-md object-cover"
          />

          <span className="font-bold text-lg text-white">
            Destiny Raid Companion
          </span>

        </div>

        {/* Navigation */}

        <nav className="flex gap-6 text-white font-medium">

          <Link href="/" className="hover:text-blue-300 transition">
            Accueil
          </Link>

          <Link href="#" className="hover:text-blue-300 transition">
            Actualités
          </Link>

          <Link href="#" className="hover:text-blue-300 transition">
            Guildes
          </Link>

          <Link href="#" className="hover:text-blue-300 transition">
            Escouade
          </Link>

          <Link href="#" className="hover:text-blue-300 transition">
            Calendrier
          </Link>

          <Link href="/profile" className="hover:text-blue-300 transition">
            Profil
          </Link>

        </nav>

      </div>

    </header>

  )
}