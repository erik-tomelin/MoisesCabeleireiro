import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

interface HeaderProps {
  onNavClick: {
    home: () => void
    about: () => void
    services: () => void
    testimonials: () => void
    contact: () => void
  }
}

const Header: React.FC<HeaderProps> = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', onClick: onNavClick.home },
    { label: 'Sobre', onClick: onNavClick.about },
    { label: 'Serviços', onClick: onNavClick.services },
    { label: 'Testemunhas', onClick: onNavClick.testimonials },
    { label: 'Contato', onClick: onNavClick.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#6d28d9]/95 backdrop-blur-xl shadow-[0_20px_40px_rgba(109,40,217,0.25)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="space-y-1">
          <h1 className="text-xl font-black uppercase tracking-[0.35em] text-white sm:text-2xl">MOISÉS</h1>
          <p className="text-xs uppercase tracking-[0.3em] text-[#f3e8ff]/80">Cabeleireiro</p>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav
          className={`absolute left-2 right-2 top-full z-40 overflow-hidden rounded-[2rem] border border-white/10 bg-[#5b21b6]/95 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 md:static md:top-auto md:left-auto md:right-auto md:mt-0 md:flex md:max-h-full md:items-center md:space-x-8 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isMenuOpen ? 'max-h-[calc(100vh-96px)]' : 'max-h-0'
          }`}
        >
          {menuItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="w-full rounded-3xl border border-transparent px-4 py-3 text-left text-sm font-medium text-white transition hover:border-white/15 hover:bg-white/5 md:w-auto md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-base"
              onClick={() => {
                item.onClick()
                setIsMenuOpen(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
