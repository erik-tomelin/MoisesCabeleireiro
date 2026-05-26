import React from 'react'

interface FooterProps {
  onNavClick: {
    home: () => void
    about: () => void
    services: () => void
    testimonials: () => void
    contact: () => void
  }
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const navItems = [
    { label: 'Home', onClick: onNavClick.home },
    { label: 'Sobre', onClick: onNavClick.about },
    { label: 'Serviços', onClick: onNavClick.services },
    { label: 'Testemunhas', onClick: onNavClick.testimonials },
    { label: 'Contato', onClick: onNavClick.contact },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#09080d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#A78BFA]">Moisés</h3>
          <p className="text-sm text-[#e5e7f0]/75">Cabeleireiro Profissional</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:justify-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-[#A78BFA]/40 hover:bg-white/10"
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="text-sm text-[#cbd5e1]/70">Copyright © 2026 All rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer
