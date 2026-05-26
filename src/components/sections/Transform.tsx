import React from 'react'

const Transform: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0033] via-[#2d0052] to-[#1a0033] px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(139,92,246,0.15)_0%,transparent_50%),linear-gradient(-45deg,rgba(168,85,247,0.15)_0%,transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center text-white shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-14">
        <h2 className="mb-4 text-4xl font-black tracking-tight text-[#C4B5FD] sm:text-5xl">
          Renove o visual com Moisés
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-[#e5e7f0]/85 sm:text-xl">
          Transforme seu cabelo com técnica, cuidado e produtos premium.
        </p>
      </div>
    </section>
  )
}

export default Transform
