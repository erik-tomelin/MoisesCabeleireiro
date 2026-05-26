import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#2d0052] to-[#1a0033] pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.18)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.16)_0%,transparent_50%)] animate-[gradientShift_8s_ease-in-out_infinite]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-6xl flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <div className="space-y-6 px-4 py-10 sm:px-0">
          <h1 className="text-5xl font-black tracking-tight text-transparent bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] bg-clip-text sm:text-6xl lg:text-7xl">
            Moisés Cabeleireiro
          </h1>
          <h2 className="text-2xl font-light text-[#c4b5fd] sm:text-3xl lg:text-4xl">
            Seu estilo em destaque
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[#e5e7f0]/90 sm:text-lg lg:text-xl">
            Cortes, cores e tratamentos com atendimento personalizado e acabamento impecável.
          </p>
        </div>

        <div className="mt-12 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-lg text-[#c4b5fd] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:text-xl">
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
